#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build:demo

# 进入生成的文件夹
cd demo

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy demo'

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://github.com/Zack921/Zack921.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/wzs28150/cool-data.git master:demo

cd -