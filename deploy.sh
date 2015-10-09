#!/bin/bash

# set -e # exit with nonzero exit code if anything fails

#!/bin/bash
echo $BRANCH

# if [ "$BRANCH" == "develop" ]; then
#   mkdir build
#   mv * build
#   tar -czf package.tgz build
#   export SSHPASS=$DEPLOY_PASS
#   sshpass -e scp package.tgz $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
#   sshpass -e ssh $DEPLOY_USER@$DEPLOY_HOST $DEPLOY_PATH/run.sh
# fi
