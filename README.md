# webpack-study

## getting-started-webpack
- webpackを使ってモジュールをバンドルするサンプル

## loader
### using-babel-loader
- ES6以降のコードをES5のコードに変換するローダー
    - babel-loader
        - @babel/core
        - @babel/preset-env

### using-sass-loader
- scssファイルをバンドルしたファイルの出力
    - sass-loader
        - node-sass
    - css-loader
    - style-loader

### using-url-loader
- 画像をDataURLに変換する
    - sass-loader
        - node-sass
    - css-loader
    - style-loader
    - url-loader

### using-file-loader
- ファイルサイズを閾値とした出力(8KB未満の画像はバンドルする)