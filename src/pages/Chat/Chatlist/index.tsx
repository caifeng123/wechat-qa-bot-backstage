import { Avatar, List, Skeleton } from "antd";
import { Wrapper } from "./ui";

const Chatlist = ({ listInfo, onSelect }) => {
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
                  background: listInfo.select === index ? "#ccc" : "#fff",
                }}
                avatar={<Avatar src={item.avatar} />}
                title={item.name}
                description={item.desc}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </Wrapper>
  );
};

export default Chatlist;
