#!/bin/bash

rm -rf dist

npm run _build

pwd

scp -r ./dist guanhao@172.16.112.100:/home/guanhao/nginx/html