import { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import * as S from "./Chat.styled";
import chatData from "./Data.json"; // JSON 파일 import

export function Chat() {
  const [messages, setMessages] = useState(chatData.chatData);

  useEffect(() => {
    // 메시지를 불러오고 상태 업데이트 (추후 API 연동 가능)
    setMessages(chatData.chatData);
  }, []);

  return (
    <S.MessagesContainer>
      {messages.map((chat) => (
        <div key={chat.date}>
          {/* 날짜 라벨 */}
          <S.DateLabelWrapper>
            <S.DateLabel>{chat.date}</S.DateLabel>
          </S.DateLabelWrapper>

          {/* 해당 날짜의 메시지 리스트 */}
          {chat.messages.map((message) => (
            <S.MessageWrapper key={message.id}>
              <S.AvatarWrapper>
                <Avatar size="large" icon={<UserOutlined />} />
              </S.AvatarWrapper>
              <S.MessageContent>
                <S.UserName>{message.username}</S.UserName>
                <S.MessageText>{message.text}</S.MessageText>
                <S.MessageTime>{message.time}</S.MessageTime>
              </S.MessageContent>
            </S.MessageWrapper>
          ))}
        </div>
      ))}
    </S.MessagesContainer>
  );
}
