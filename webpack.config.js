var webpack = require('webpack');
var path = require('path');
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /spec\.js$/,
                ],
                loader: 'istanbul-instrumenter-loader',
                query: {
                    esModules: true
                }
            },                 
            { 
                test: /\.js$/, 
                exclude: [/node_modules/], 
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader:'babel-loader',
                        options:{
                            presets: ['es2015'],
                            cacheDirectory: true
                        }
                    },
                ] 
            },
            { 
                test: /\.html$/, 
                loader: 'raw-loader' 
            },
            { 
                test: /\.(scss|sass)$/, 
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ] 
            }
        ]        
    },
    context: __dirname,
    entry: "./app/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: isProd ? 'bundle.js' : 'bundle.js',
        publicPath: './dist/'
    },
    //devtool: "source-map",
    devtool: 'inline-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                //sourceMap: true,
                mangle: {
                    except: ['$super', '$', 'exports', 'require', 'angular']
                }    
            }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
         new webpack.ProvidePlugin({
          "window.jQuery": "jquery"
        })
    ]

    
}