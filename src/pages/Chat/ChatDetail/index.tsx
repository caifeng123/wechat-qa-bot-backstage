import {getDetail} from '@/services/ant-design-pro/api';
import {Layout} from 'antd';
import {useEffect, useState} from 'react';
import {useModel} from 'umi';
import ChatContent from './ChatContent';

const {Header, Footer, Sider, Content} = Layout;
const ChatDetail = ({detail = {}, userInfo = {}}) => {
    console.log(detail, userInfo);
    const {name, key} = detail;
    const [data, setData] = useState<API.RuleListItem>();

    useEffect(() => {
        getDetail({userId: userInfo?.userid, key}).then(res => {
            setData(res);
        });
    }, [key]);
    return (
        <>
            <Header>1</Header>
            <Content style={{overflow: 'scroll'}}>
                <ChatContent data={data} userInfo={userInfo} />
            </Content>
            <Footer>Footer</Footer>
        </>
    );
};

export default ChatDetail;