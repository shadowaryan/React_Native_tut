import React from 'react';
import { Button } from '@ant-design/react-native';


const Button_login = (props) => {
  return (
    <Button onPress={console.log(props.username)}>
      Sign In
    </Button>
  );
};

export default Button_login;