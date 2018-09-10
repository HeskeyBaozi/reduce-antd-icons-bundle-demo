import path from 'path';

export default {
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
};
