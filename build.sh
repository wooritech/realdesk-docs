#!/usr/bin/env sh

# abort on errors
set -e

# build
vuepress build . --dest ../docs

# if you are deploying to a custom domain
echo 'docs.realdesk.kr' > ../docs/CNAME

git add .

if [ "$1" = "" ] ; then
  NOW=$(date +'%Y-%m-%d %T')
  git commit -m "deploy $NOW"
  # echo "deploy $NOW"
else
  git commit -m "deploy: $1"
  # echo "deploy: $1"
fi

git push -f origin master
