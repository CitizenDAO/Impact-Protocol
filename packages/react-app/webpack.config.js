const getStyleLoaders = (cssOptions, preProcessor, preProcessorOptions = {}) => {
  // ... setting up css loaders ...
  if (preProcessor) {
    loaders.push(
      // ... setting up other pre processors ...
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
          ...preProcessorOptions,
        },
      },
    );
  }
  return loaders;
};

module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: getStyleLoaders(
        {
          importLoaders: 3,
          sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
        },
        "less-loader",
        {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      ),
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
    },
  ],
  // ...other config
};
