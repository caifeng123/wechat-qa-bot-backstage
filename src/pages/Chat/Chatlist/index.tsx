import {Avatar, List, Skeleton, Tag} from 'antd';
import moment from 'moment';
import {Wrapper} from './ui';

const Chatlist = ({listInfo, onSelect}) => {
    return (
        <Wrapper>
            <List
                className="demo-loadmore-list"
                // loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={listInfo.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => onSelect(index)}>
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                style={{
                                    background: listInfo.select === index ? '#ccc' : '#fff',
                                }}
                                avatar={<Avatar src={item.avatar} />}
                                title={item.name}
                                description={
                                    <div className='desc'>
                                        <div className='desc-detail'>{item.desc}</div>
                                        <div className='desc-update'>{moment(item.updatedAt).fromNow()}</div>
                                    </div>
                                }
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Wrapper>
    );
};

export default Chatlist;
