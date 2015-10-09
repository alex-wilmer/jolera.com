#!/bin/bash

echo `dirname $0`

cd `dirname $0`

# Extract the package
tar -xzf package.tgz
rm package.tgz

pwd

# npm start
