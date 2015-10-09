#!/bin/bash

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  echo $TRAVIS_BRANCH
  mkdir build
  mv * build
  tar -czf package.tgz build

  cat ~/.ssh/id_rsa.pub

  # ssh user@domain "cat >> ~/.ssh/authorized_keys" < ~/.ssh/id_rsa.pub

  # scp package.tgz $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
  # ssh $DEPLOY_USER@$DEPLOY_HOST $DEPLOY_PATH/run.sh
fi
