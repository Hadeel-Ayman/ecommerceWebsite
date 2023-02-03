import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import CheckBox from "../../components/checkBox";
import Input from "../../components/input";
import OR from "../../components/OR";
import Title from "../../components/Title";
import { Colors } from "../../global/Colors";

const Login = () => {
  return (
    <div>
      <ParentLogin>
        <Title Title="Sign in" />
        <Input label="Username" placeholder="Email or phone" />
        <Input label="Password" placeholder="Type here" />
        <div>
          <CheckBox checkboxLabel=" Remember me" />
        </div>
        <Button title="login" />
              <OR/>
      </ParentLogin>
    </div>
  );
};

export default Login;

const ParentLogin = styled.div`
  height: 561px;
  width: 370px;
  left: 527px;
  top: 209px;
  border-radius: 6px;
  box-shadow: 0px 3px 10px 0px #2020201a;
  background: ${Colors.WHITE};
  margin: auto;
  padding: 0 30px;
`;
