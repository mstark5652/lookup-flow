import { useState, useEffect } from 'react'

export const useFetch = (initialUrl, initialPayload, method = 'GET') => {
  const [url, setUrl] = useState(initialUrl)
  const [payload, setPayload] = useState(initialPayload)
  const [apiResult, setApiResult] = useState(undefined)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setError(null)
      setLoading(false)
      if (url && (method === 'GET' || payload)) {
        try {
          setLoading(true)
          const res = await window.fetch(url, {
            method,
            headers: { 'content-type': 'application/json' },
            body: payload && JSON.stringify(payload)
          })
          if (!res.ok) {
            const error = res.json && await res.json()
            console.error('useFetch', { res, error })
            setError(error)
            return
          }
          const result = url !== '' && await res.json()
          setApiResult(result)
        } catch (err) {
          console.error('useFetch', err)
          setError(err)
        } finally {
          setLoading(false)
        }
      }
    }
    fetchData()
  }, [payload, url])

  return [{ apiResult, isLoading, error }, setPayload, setUrl]
}
