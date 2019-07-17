#!/bin/bash

rm -rf dist

npm run _build

cp -r dist /usr/local/var/www