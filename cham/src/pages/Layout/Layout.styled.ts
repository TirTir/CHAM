import styled from "styled-components";

export const StyledButton = styled.button`
  width: 73px;
  height: 40px;
  margin: 10px;
  border: gray;
  border-radius: 10%;
  background-color: white;
  cursor: pointer;
`;

export const ProfileStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  margin: 5px 0;
`;

const TeamStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 56px;
  border: solid 1px gray;
`;

export const Channel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aba2a2;
  ${(props) =>
    props.color &&
    `width: "300px",
      height: "100%",
  `}
  width: 90px;
  height: 100%;
`;
