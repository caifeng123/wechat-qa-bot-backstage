import {Wrapper} from './ui';
import _ from 'lodash';
import {useEffect, useRef} from 'react';

const Line = ({text, updateTime, isFrom, userInfo}) => {
    return (
        <Wrapper isFrom={isFrom}>
            <img className='content-avatar' src={userInfo.avatar}></img>
            <div className='content-name'>{userInfo.name}</div>
            <div className='content-content'>{text}</div>
        </Wrapper>
    );
};

const Content = ({data = {}}) => {
    console.log(data);
    const {list = [], userInfo, toUserInfo} = data;
    const final = useRef<HTMLDivElement>();
    useEffect(() => {
        final.current.scrollIntoView();
        console.log(final.current);

    }, [data]);
    return (
        <>
            {
                _.map(list, (item, index) => (
                    <Line
                        key={index}
                        isFrom={item.from === userInfo.userId}
                        userInfo={item.from === userInfo.userId ? userInfo : toUserInfo}
                        {...item}
                    />
                ))
            }
            <div ref={final} />
        </>
    );
};

export default Content;