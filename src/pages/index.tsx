import * as React from 'react';
import { Icon, Button } from 'antd';
import 'antd/dist/antd.css';

export default class Home extends React.Component<{}> {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <br />
        <Button type="primary" icon="smile">Smile</Button>
        <br />
        <Icon type="meh" theme="outlined" />
      </div>
    );
  }
}
