import React, {useState} from 'react';
import { Upload, message,Button } from 'antd';
import { Editor } from "@tinymce/tinymce-react";
import InputEmoji from 'react-input-emoji';
import { CloudUploadOutlined, FormOutlined } from '@ant-design/icons';
import './chatArea.css';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
        strokeColor: {
          '0%': 'lightgreen',
          '100%': 'green',
        },
        strokeWidth: 3,
        format: percent => `${parseFloat(percent.toFixed(2))}%`,
      },
  };


function NewMessage(){

    const [ text, setText ] = useState('')

    const handleOnEnter = (text) => {
        console.log('enter', text)
        setText(text)
      }

    const onChange = e => {
        console.log(e);
      };


    return(
        <div className='newMessageComponent'>
             <InputEmoji
                className='inputnemoji'
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Write your message"
             />
             {/* <Editor
                apiKey="no-api-key"
                init={{
                    plugins: "emoticons",
                    toolbar: "emoticons",
                    toolbar_location: "bottom",
                    menubar: false,
                }}
            /> */}
            {/* <Input placeholder="write your message" allowClear onChange={onChange} /> */}
            <div className='uploadButtons'>
                <Button className='addReplyButton' type="primary">
                    <FormOutlined className='replyImage' />
                    Add Reply</Button>
                <Upload {...props}>
                    <Button className='uploadmediaButton' icon={<CloudUploadOutlined />}>Upload Media</Button>
                </Upload>
            </div>
        </div>
    )
}

export default NewMessage