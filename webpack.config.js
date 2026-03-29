const path = require('path');

module.exports = {
    mode: 'development',          // явно указываем режим сборки
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
  hot: true,
  static: [
    {
      directory: path.resolve(__dirname, 'dist'),
      watch: true
    },
    {
      directory: path.resolve(__dirname), // корень проекта
      watch: true
    }
  ]
},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { modules: 'commonjs' }] // преобразуем import/export в require/module.exports
                        ]
                    }
                }
            }
        ]
    }
};