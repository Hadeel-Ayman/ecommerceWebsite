import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const List = (props) => {
  const { option } = props;
  return (
    <>
      <SelectList>
        <option>{option}</option>
      </SelectList>
    </>
  );
};

export default List;

const SelectList = styled.select`
  height: 40px;
  width: 145px;
  background-color: transparent;
  outline: none;
  padding: 0 5px;
  border: 1px solid ${Colors.PRIMARY};
`;
export const Select = styled(SelectList)`
  height: 24px;
  width: 124px;
  border: none;
  top: 16px;
`;
