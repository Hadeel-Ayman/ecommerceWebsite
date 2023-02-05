import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Input = (props) => {
  const { label, placeholder } = props;
  return (
    <ParentApp>
      <LabelLogin>{label}</LabelLogin>
      <InputLogin placeholder={placeholder} />
    </ParentApp>
  );
};

export default Input;

export const InputLogin = styled.input`
  height: 40px;
  width: 317px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  color: #a9acb0;
  padding: 0 10px;
  border: 1px solid #e0e0e0;
  outline: none;
  margin-bottom: 20px;
`;
const LabelLogin = styled.label`
  height: 19px;
  width: 73px;
  border-radius: 2px;
  font-size: 16px;
  background-color: transparent;
  font-weight: 400;
  color: ${Colors.DARK};
  font-style: normal;
  margin-bottom: 3px;
`;
const ParentApp = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -4px;
`;
export const SearchInput = styled(InputLogin)`
  height: 40px;
  width: 421px;
  background-color: transparent;
  border: 1px solid ${Colors.PRIMARY};
  border-radius: 3px 0px 0px 3px;
`;
export const ItemInput = styled(SearchInput)`
  width: 440px;
  border-radius: 6px;
  border: 1px solid ${Colors.GRAY_300};
  margin-top: 15px;
`;
export const Quantity = styled(ItemInput)`
  width: 206px;
  margin-right: 15px;
`;
