import { Button, Result, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useSetState } from "react-cc-hooks";
import { history } from "umi";
import Chatlist from "./Chatlist";
import { Wrapper } from "./ui";
import { rule } from "@/services/ant-design-pro/api";

const { Header, Footer, Sider, Content } = Layout;

const Chat: React.FC = () => {
  const [listInfo, setListInfo] = useSetState({ list: [], select: -1 });

  useEffect(() => {
    rule({ current: 1, pageSize: 10 }).then(({ data }) =>
      setListInfo({ list: data })
    );
  }, []);

  const now = listInfo.list[listInfo.select];

  return (
    <Wrapper>
      <Layout className="chat-layout">
        <Sider className="chat-sider">
          <Chatlist
            listInfo={listInfo}
            onSelect={(e: number) => setListInfo({ select: e })}
          />
        </Sider>
        <Layout>
          <Header>listInfo.list[listInfo.select]</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

export default Chat;
