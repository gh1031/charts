#!/bin/bash

rm -rf dist

npm run _build

cp -r dist guanhao@172.16.112.100:/usr/local/var/www