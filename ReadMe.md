# Reduce Antd icons bundle size

## Preview

| Before | After |
|:----:|:----:|
|![before](./docs/before.png) | ![after](./docs/after.png)|
|![before](./docs/before-cli.png) | ![after](./docs/after-cli.png)|

## Config `alias`

```js
// src/icons.js

// import what you need
import Smile from '@ant-design/icons/lib/outline/SmileOutline';
import Meh from '@ant-design/icons/lib/outline/MehOutline';

// import what antd other components need
import Loading from '@ant-design/icons/lib/outline/LoadingOutline';
// and other icons...

// export what you need
export const SmileOutline = Smile;
export const MehOutline = Meh;

// export what antd other components need
export const LoadingOutline = Loading;
```

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