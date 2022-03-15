import React from 'react'
import {useState} from 'react';
import {Upload} from 'antd';
import {Form} from 'antd';
import {Button} from 'antd';

type FormData = {
  image?: any
}

export default function Hello() {

  const [formData, setFormData] = useState<FormData>()

  function onFinish(values: FormData) {
    setFormData(values)
  }

  return <>
    <Form<FormData> onFinish={onFinish}>
      <Form.Item label={'Upload'} name={'image'}>
        <Upload beforeUpload={() => false} listType='picture'>
          <Button>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Button htmlType={'submit'}>Submit</Button>
    </Form>
    <hr/>
    <pre>{JSON.stringify(formData, null, 4)}</pre>
  </>
};
