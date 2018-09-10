# Reduce Antd icons bundle size

## Preview

| Before | After |
|:----:|:----:|
|![before](./docs/before.png) | ![after](./docs/after.png)|
|![before](./docs/before-cli.png) | ![after](./docs/after-cli.png)|

## Config `alias`

```js
// webpack.config.js
// or
// .umirc.js
alias: {
  '@ant-design/icons/lib/dist$': path.resolve(
    __dirname,
    './src/icons.js'
  ),
  '@ant-design/icons/lib': path.resolve(
    __dirname,
    'node_modules/@ant-design/icons/lib'
  )
}
```