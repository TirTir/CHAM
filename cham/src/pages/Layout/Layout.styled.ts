import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.625rem;
  height: 100%;
  background-color: #827979;
`;

export const SidebarIcon = styled.div`
  width: 3.125rem; /* 50px → rem */
  height: 3.125rem;
  border-radius: 0.625rem; /* 10px → rem */
  background-color: white;
  margin: 0.3125rem 0; /* 5px → rem */
`;

export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18.75rem; /* 300px → rem */
  height: 100%;
  background-color: #aba2a2;
`;

export const ChatListHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 3.5rem; /* 56px → rem */
  width: 100%;
  border: solid 0.0625rem gray; /* 1px → rem */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3.7rem;
  background-color: #d9d9d9;
  align-items: center;
  padding: 0 0.625rem;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 3.6rem;
`;

export const SearchInput = styled.input`
  width: 10.875rem;
  height: 50%;
  border: none;
  border-radius: 0.625rem;
  outline: none;
  padding: 0.3rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  flex: 1;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.2rem;
  height: 3.625rem;
  background-color: #938181;
  bottom: 0;
  right: 0;
  width: 100%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 0.625rem;
  height: 2.8125rem;
  width: calc(100% - 90px);
  margin: 0 auto;
  padding: 0 5px;
`;

export const InputField = styled.input`
  flex-grow: 1;
  height: 2.25rem;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0 0.5rem;
`;
