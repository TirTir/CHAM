import styled from "styled-components";

export const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.625rem;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem; 
  background-color: white;
  width: 2.5625rem; 
  height: 2.5625rem;
  margin-right: 0.625rem; 
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2eaea;
  border-radius: 0.625rem; 
  padding: 0.625rem; 
  max-width: 60%;
`;

export const UserName = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;

export const MessageText = styled.div`
  font-size: 1rem;
  margin-top: 0.3125rem; 
`;

export const MessageTime = styled.div`
  font-size: 0.75rem;
  color: gray;
  margin-top: 0.3125rem; 
  text-align: right;
`;

export const DateLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0; 
`;

export const DateLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11rem; 
  height: 1.875rem; 
  border-radius: 0.625rem; 
  background-color: #f2eaea;
  margin-bottom: 0.9375rem; 
`;
