import {Input} from 'antd';
import {useState} from 'react';
import {Wrapper} from './ui';

const DialogInput = () => {
    const [input, setInput] = useState<string>('');

    const sendMessage = () => {
        setInput('');
    };

    const onPressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!e.metaKey) {
            sendMessage();
            e.preventDefault();
        }
        else {
            setInput(inp => `${inp}\n`);
        }
    };

    return (
        <Wrapper>
            <div className="resize"></div>
            <div className="content">
                <div className="toolbar">工具栏 表情 图片</div>
                <Input.TextArea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    autoComplete="on"
                    autoFocus
                    onPressEnter={onPressEnter}
                />
            </div>
        </Wrapper>
    );
};

export default DialogInput;