#!/bin/bash

# A simple decoder script for JWT tokens
echo "Enter the JWT token to decode:"
read token

header=$(echo -n $token | cut -d "." -f1 | base64 -d)
payload=$(echo -n $token | cut -d "." -f2 | base64 -d)

echo "Header: $header"
echo "Payload: $payload"
