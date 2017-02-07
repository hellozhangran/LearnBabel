npm install -g browserify
npm install --save-dev uniq

browserify app/app.js > bundle.js
node app/app.js
node bundle.js
**browserify可以分析require依赖，并递归加载到一个js中**

***

##browserify in gulp

npm install --save-dev gulp
npm install --save-dev gulp-babel
npm install --save-dev gulp-uglify
npm install --save-dev vinyl-source-stream
npm install --save-dev vinyl-buffer
