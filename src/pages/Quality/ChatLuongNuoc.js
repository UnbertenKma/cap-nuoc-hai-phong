import React from "react";
import { Col, Divider, Row } from 'antd';
import {Wrapper, Title, Content, ContenLeft, ContenRight } from './style'
import { Pagination } from "antd";
import { ContentLeft } from "./components/ContentLeft";
import { ContentRight } from "./components/ContentRight";

const ChatLuongNuoc = () => {
  return <>
    <Wrapper>
      <Title>
        Kiểm tra chất lượng nước
      </Title>
      <Divider />
      <Content>
        <Row>    
            <ContentLeft />
            <ContentRight />
        </Row>
      </Content>
      <div style={{justifyContent: "center"}}>
        <Pagination defaultCurrent={1} total={50}/>
      </div>
    </Wrapper>
  </>;
};

export default ChatLuongNuoc;
