// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, 'public/js')
  },
  // ソースマップの設定
  // まずはビルド速度とソースマップの品質をある程度保てるcheap-eval-source-mapをお勧め
  // しかしこの設定で生成されたソースマップはローダーで変換された後のコードのため，デバックしづらければ
  // cheap-module-eval-source-map　か　eval-source-mapを指定するといい
  devtool: 'cheap-module-eval-source-map'

};
