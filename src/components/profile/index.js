import React from "react";
import styled from "styled-components";
import { JoinButton, Login } from "../Button";
import Photo from "../PhotoProfile";
import avatar from "../../assets/images/Avatar.png";
const ProfileCard = () => {
  return (
    <ProfileCards>
      <Photo img={avatar} name="Hi, user lets get stated" />
      <JoinButton>Join now</JoinButton>
      <Login>Login</Login>
    </ProfileCards>
  );
};

export default ProfileCard;

const ProfileCards = styled.div`
  height: 150px;
  width: 200px;
  background: #e3f0ff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
