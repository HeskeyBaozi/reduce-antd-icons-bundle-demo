# Reduce Antd icons bundle size

## Before

```js
// webpack.config.js
// or
// .umirc.js
  alias: {
    '@ant-design/icons/lib/dist$': path.resolve(
      __dirname,
      './src/icons.js'
    ),
    '@ant-design/icons/lib/outline': path.resolve(
      __dirname,
      'node_modules/@ant-design/icons/lib/outline'
    )
  }
```