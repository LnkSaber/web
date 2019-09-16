npm run build
cp -r ../dis ./
docker build -t registry.cn-shanghai.aliyuncs.com/lin-saber/gilgil:v1.0.0 ./
docker push registry.cn-shanghai.aliyuncs.com/lin-saber/gilgil:v1.0.0