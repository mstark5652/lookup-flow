terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "bucket" {
  bucket = "lambda-flow-static"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
