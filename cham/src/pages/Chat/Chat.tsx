import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import * as S from "./Chat.styled";

export function Chat() {
  return (
    <S.MessagesContainer>
      <S.DateLabelWrapper>
        <S.DateLabel>2023-04-19</S.DateLabel>
      </S.DateLabelWrapper>

      <S.MessageWrapper>
        <S.AvatarWrapper>
          <Avatar size="large" icon={<UserOutlined />} />
        </S.AvatarWrapper>
        <S.MessageContent>
          <S.UserName>김유진</S.UserName>
          <S.MessageTime>오후 11:59</S.MessageTime>
          <S.MessageText>안녕하세요!</S.MessageText>
        </S.MessageContent>
      </S.MessageWrapper>

      <S.MessageWrapper>
        <S.AvatarWrapper>
          <Avatar size="large" icon={<UserOutlined />} />
        </S.AvatarWrapper>
        <S.MessageContent>
          <S.UserName>김유진</S.UserName>
          <S.MessageText>좋은 하루 보내세요!</S.MessageText>
          <S.MessageTime>오전 12:00</S.MessageTime>
        </S.MessageContent>
      </S.MessageWrapper>

      <S.MessageWrapper>
        <S.AvatarWrapper>
          <Avatar size="large" icon={<UserOutlined />} />
        </S.AvatarWrapper>
        <S.MessageContent>
          <S.UserName>김유진</S.UserName>
          <S.MessageText>좋은 하루 보내세요!</S.MessageText>
          <S.MessageTime>오전 12:00</S.MessageTime>
        </S.MessageContent>
      </S.MessageWrapper>

      <S.MessageWrapper>
        <S.AvatarWrapper>
          <Avatar size="large" icon={<UserOutlined />} />
        </S.AvatarWrapper>
        <S.MessageContent>
          <S.UserName>김유진</S.UserName>
          <S.MessageText>좋은 하루 보내세요!</S.MessageText>
          <S.MessageTime>오전 12:00</S.MessageTime>
        </S.MessageContent>
      </S.MessageWrapper>

      <S.MessageWrapper>
        <S.AvatarWrapper>
          <Avatar size="large" icon={<UserOutlined />} />
        </S.AvatarWrapper>
        <S.MessageContent>
          <S.UserName>김유진</S.UserName>
          <S.MessageText>좋은 하루 보내세요!</S.MessageText>
          <S.MessageTime>오전 12:00</S.MessageTime>
        </S.MessageContent>
      </S.MessageWrapper>

      <S.MessageWrapper>
        <S.AvatarWrapper>
          <Avatar size="large" icon={<UserOutlined />} />
        </S.AvatarWrapper>
        <S.MessageContent>
          <S.UserName>김유진</S.UserName>
          <S.MessageText>좋은 하루 보내세요!</S.MessageText>
          <S.MessageTime>오전 12:00</S.MessageTime>
        </S.MessageContent>
      </S.MessageWrapper>

      <S.MessageWrapper>
        <S.AvatarWrapper>
          <Avatar size="large" icon={<UserOutlined />} />
        </S.AvatarWrapper>
        <S.MessageContent>
          <S.UserName>김유진</S.UserName>
          <S.MessageText>좋은 하루 보내세요!</S.MessageText>
          <S.MessageTime>오전 12:00</S.MessageTime>
        </S.MessageContent>
      </S.MessageWrapper>
    </S.MessagesContainer>
  );
}
