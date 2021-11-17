module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
          options: {
            lessOptions: {
              // If you are using less-loader@5 please spread the lessOptions to options directly
              modifyVars: {
                // "primary-color": "#1DA57A",
                // "link-color": "#1DA57A",
                "border-radius-base": "15px",
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
      // ...other rules
    },
  ],
  // ...other config
};
