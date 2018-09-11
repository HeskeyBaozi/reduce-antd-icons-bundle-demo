# Reduce Antd icons bundle size

| Before | After |
|:----:|:----:|
|![before](./docs/before.png) | ![after](./docs/after.png)|
|![before](./docs/before-cli.png) | ![after](./docs/after-cli.png)|

## Config `alias`

See [src/icons.js](./src/icons.js)
```js
// src/icons.js

// export what you need
export { default as SmileOutline } from '@ant-design/icons/lib/outline/SmileOutline';
export { default as MehOutline } from '@ant-design/icons/lib/outline/MehOutline';

// export what antd other components need
export { default as LoadingOutline } from '@ant-design/icons/lib/outline/LoadingOutline';
```

See [.umirc.js](./umirc.js)
```js
// .umirc.js
export default {
  alias: {
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js')
  }
};
```