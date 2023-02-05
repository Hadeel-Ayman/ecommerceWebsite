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
export const Source = styled(Login)`
  height: 40px;
  width: 119px;
  border: 1px solid #ffffff;
  color: ${Colors.DARK};
  font-weight: 500;
  font-size: 16px;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
`;
export const Send = styled(Source)`
  width: 129px;
  color: ${Colors.WHITE};
  border: 1px solid #0d6efd;
  margin-top: 5px;
  margin-left: 8px;
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
`;
