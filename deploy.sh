#!/bin/bash

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  echo $TRAVIS_BRANCH
  mkdir build
  mv * build
  tar -czf package.tgz build

  scp package.tgz $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
  ssh $DEPLOY_USER@$DEPLOY_HOST $DEPLOY_PATH/run.sh
fi
