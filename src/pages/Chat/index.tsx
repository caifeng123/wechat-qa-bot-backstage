import {Button, Result, Layout} from 'antd';
import React, {useEffect, useState} from 'react';
import {useSetState} from 'react-cc-hooks';
import {history, useModel} from 'umi';
import Chatlist from './Chatlist';
import {Wrapper} from './ui';
import {rule} from '@/services/ant-design-pro/api';
import ChatDetail from './ChatDetail';

const {Header, Footer, Sider, Content} = Layout;

const Chat: React.FC = () => {
    const [listInfo, setListInfo] = useSetState({list: [], select: -1});
    const {initialState} = useModel('@@initialState');
    const [userInfo, setUserInfo] = useState<API.CurrentUser>();

    const getUserInfo = async () => {
        const userInfo = await initialState?.fetchUserInfo?.();
        setUserInfo(userInfo);
    };

    useEffect(() => {
        rule({current: 1, pageSize: 10}).then(({data}) =>
            setListInfo({list: data})
        );
        getUserInfo();
    }, []);


    const now = listInfo.list[listInfo.select];

    return (
        <Wrapper>
            <Layout className="chat-layout">
                <Sider className="chat-sider">
                    <Chatlist
                        listInfo={listInfo}
                        onSelect={(e: number) => setListInfo({select: e})}
                    />
                </Sider>
                <Layout>
                    <ChatDetail detail={listInfo.list[listInfo.select]} userInfo={userInfo} />
                </Layout>
            </Layout>
        </Wrapper>
    );
};

export default Chat;
