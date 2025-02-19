import { PlusOutlined, SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import * as S from "./Layout.styled";
import { Chat } from "../Chat/Chat";

export function Layout() {
  return (
    <S.LayoutContainer>
      <S.Sidebar>
        <S.SidebarIcon />
        <br />
        <S.SidebarIcon />
      </S.Sidebar>

      <S.ChatListContainer>
        <S.ChatListHeader>멋쟁이 사자처럼</S.ChatListHeader>
      </S.ChatListContainer>

      <S.MainContainer>
        <S.SearchContainer>
          <S.SearchWrapper>
            <S.SearchInput placeholder="검색" />
          </S.SearchWrapper>
        </S.SearchContainer>

        <S.ContentContainer>
          <Chat />
        </S.ContentContainer>

        <S.InputContainer>
            <Button
              style={{
                backgroundColor: "white",
                height: "2.8125rem",
                width: "2.8125rem",
                borderColor: "white",
                borderRadius: "0.625rem",
                margin: "0 5px",
              }}
              icon={<PlusOutlined />}
              size={"large"}
            />
            <S.InputBox>
              <S.InputField placeholder="메세지를 입력하세요" type="text" />
              <Button
                style={{
                  margin: "10px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "none",
                }}
                icon={<SendOutlined />}
              />
            </S.InputBox>
          </S.InputContainer>
      </S.MainContainer>
    </S.LayoutContainer>
  );
}
