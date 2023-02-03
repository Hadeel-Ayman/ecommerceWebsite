import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Button = (props) => {
  const { title } = props;

  return <SubmitButton>{title}</SubmitButton>;
};

export default Button;

export const SubmitButton = styled.button`
  height: 40px;
  width: 338px;
  border-radius: 6px;
  background-color: ${Colors.PRIMARY};
  border: 1px solid ${Colors.PRIMARY};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-top: 27px;
`;
export const SearchBtn = styled(SubmitButton)`
  width: 100px;
  border-radius: 0px 3px 3px 0px;
`;
export const JoinButton = styled(SubmitButton)`
  height: 30px;
  width: 180px;
  margin-top: 13px;
  font-size: 13px;
`;
export const Login = styled(SubmitButton)`
  height: 30px;
  width: 180px;
  color: ${Colors.PRIMARY};
  border: none;
  font-size: 13px;
  background-color: ${Colors.WHITE};
  margin-top: 10px;
`;
