import {Input} from 'antd';
import {Wrapper} from './ui';

const DialogInput = () => {
    return (
        <Wrapper>
            <div className="resize"></div>
            <div className="content">
                <div className="toolbar">工具栏 表情 图片</div>
                <Input.TextArea />
            </div>
        </Wrapper>
    );
};

export default DialogInput;