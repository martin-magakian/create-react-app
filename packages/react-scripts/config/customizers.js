var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssModulesDev = '?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
var cssModulesProd = '?modules&-autoprefixer&importLoaders=1';

module.exports = {
  'BABEL_STAGE_0': {
    toArray: 'presets',
    getDev: function () {
      return require.resolve('babel-preset-stage-0')
    }
  },
  'DECORATORS': {
    toArray: 'babelPlugins',
    getDev: function () {
      return require.resolve('babel-plugin-transform-decorators-legacy')
    }
  },
  'SASS': {
    toArray: 'loaders',
    fileRegex: /\.(scss|sass)/,
    getDev: function () {
      return {
        test: /(\.scss|\.sass)$/,
        loader: "style!css!postcss!sass"
      }
    },
    getProd: function () {
      return {
        test: /(\.scss|\.sass)$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      }
    }
  },
  'SASS_MODULES': {
    toArray: 'loaders',
    fileRegex: /\.(mscss|msass)/,
    getDev: function () {
      return {
        test: /(\.mscss|\.msass)$/,
        loader: `style!css${cssModulesDev}!postcss!sass`
      }
    },
    getProd: function () {
      return {
        test: /(\.mscss|\.msass)$/,
        loader: ExtractTextPlugin.extract('style', `css${cssModulesProd}!postcss!sass`)
      }
    }
  },
  'LESS': {
    toArray: 'loaders',
    fileRegex: /\.less$/,
    getDev: function () {
      return {
        test: /\.less$/,
        loader: "style!css!postcss!less"
      }
    },
    getProd: function () {
      return {
        test: /\.less/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
      }
    }
  },
  'LESS_MODULES': {
    toArray: 'loaders',
    fileRegex: /\.mless$/,
    getDev: function () {
      return {
        test: /\.mless$/,
        loader: `style!css${cssModulesDev}!postcss!less`
      }
    },
    getProd: function () {
      return {
        test: /\.mless/,
        loader: ExtractTextPlugin.extract('style', `css${cssModulesProd}!postcss!less`)
      }
    }
  },
  'STYLUS': {
    toArray: 'loaders',
    fileRegex: /\.styl$/,
    getDev: function () {
      return {
        test: /\.styl/,
        loader: 'style!css!postcss!stylus'
      }
    },
    getProd: function () {
      return {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
      }
    }
  },
  'STYLUS_MODULES': {
    toArray: 'loaders',
    fileRegex: /\.styl$/,
    getDev: function () {
      return {
        test: /\.mstyl/,
        loader: `style!css${cssModulesDev}!postcss!stylus`
      }
    },
    getProd: function () {
      return {
        test: /\.mstyl/,
        loader: ExtractTextPlugin.extract('style', `css${cssModulesProd}!postcss!stylus`)
      }
    }
  },
  'EXTENSION_CSS_MODULES': {
    toArray: 'loaders',
    fileRegex: /\.mcss/,
    getDev: function () {
      return {
        test: /\.mcss$/,
        loader: `style!css${cssModulesDev}!postcss`
      }
    },
    getProd: function () {
      return {
        test: /\.mcss$/,
        loader: `style!css${cssModulesProd}!postcss`
      }
    }
  },
  'CSS_MODULES': {
    config: {
      dev: `style!css${cssModulesDev}!postcss`,
      prod: `style!css${cssModulesProd}!postcss`
    }
  }
}
