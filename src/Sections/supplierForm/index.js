import React from "react";
import styled from "styled-components";
import mask from "../../assets/images/Mask.png";
import Button, { Send } from "../../components/Button";
import { ItemInput, Quantity } from "../../components/input";
import { Select2 } from "../../components/list";
import { Colors } from "../../global/Colors";
const Supplier = () => {
  return (
    <ImgBackground>
      <Content>
        <h2>
          An easy way to send <br /> requests to all suppliers
        </h2>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br />
          elit, sed do eiusmod tempor incididunt.
        </Para>
      </Content>
      <Form>
        <h3>Send quote to suppliers</h3>
        <ItemInput placeholder="What item you need?" />
        <Textarea placeholder="Type more details"></Textarea>
        <div>
          <Quantity placeholder="Quantity" />
          <Select2 />
        </div>
        <Send>Send inquiry</Send>
      </Form>
    </ImgBackground>
  );
};

export default Supplier;

const ImgBackground = styled.div`
  background-image: url(${mask});
  display: flex;
  justify-content: space-between;
  background-repeat: no-repeat;
  width: 100%;
  height: 446px;
  margin-top: 20px;
  padding: 40px;
  margin-bottom: -20px;
`;
const Content = styled.div`
  color: ${Colors.WHITE};
`;
const Para = styled.p`
  margin-top: 15px;
`;
const Form = styled.div`
  height: 346px;
  width: 491px;
  left: 788px;
  top: 1436px;
  border-radius: 6px;
  color: ${Colors.DARK};
  background: ${Colors.WHITE};
  padding: 20px;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
`;
const Textarea = styled.textarea`
  width: 440px;
  height: 73px;
  border-radius: 6px;
  border: 1px solid ${Colors.GRAY_300};
  font-size: 16px;
  padding: 11px;
  font-weight: 400;
  outline: none;
  color: ${Colors.GRAY_500};
`;
