const path = require('path');

module.exports = {
  mode : 'development',
  entry: './src/app.ts', // 전체 프로젝트가 시작하는 파일
  devServer : {
    static : [
      {
        directory : path.join(__dirname),
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath : '/dist/',
  },
  module : {
    rules : [
      {
        test : /\.tsx?%/,
        use : 'ts-loader',
        exclude : /node_modules/
      }
    ]
  },
  resolve : { // 찾아낸 import에 어떤 파일 확장자를 추가할지 전달한다.
    extensions : ['.ts', '.js']
  }
};