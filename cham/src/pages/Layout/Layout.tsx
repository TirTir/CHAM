import { Button } from "antd";
import * as S from "./Layout.styled";

export function Layout() {
  return (
    <body
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90px",
          height: "100%",
          backgroundColor: "#827979",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: "white",
            margin: "5px 0",
          }}
        ></div>
        <br></br>
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: "white",
            margin: "5px 0",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          height: "100%",
          backgroundColor: "#aba2a2",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            height: "56px",
            width: "100%",
            border: "solid 1px gray",
          }}
        >
          멋쟁이 사자처럼
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "65px",
            backgroundColor: "#D9D9D9",
          }}
        >
          <S.StyledButton>채팅</S.StyledButton>
          <S.StyledButton>포스팅</S.StyledButton>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "100px",
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            PAGE
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "30px",
            backgroundColor: "#D9D9D9",
          }}
        ></div>
      </div>
    </body>
  );
}
