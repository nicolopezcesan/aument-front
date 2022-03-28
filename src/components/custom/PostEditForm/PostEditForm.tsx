
import React, { ChangeEvent, MouseEventHandler } from 'react'
import { IPost } from '../../../services/PostService';
import './styles.css';

interface IProps {
  onChange: Function
  data: IPost,
  submit: MouseEventHandler<HTMLInputElement>
}

const PostEditForm = (props: IProps) => {
  const { onChange, data, submit } = props;
  const formProps = { onChange: (e: any) => updateFields(e) };

  const updateFields = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const object: IPost = { ...data };
    if (name === 'tagLabel') object.tag.label = value;
    if (name === 'tagColor') object.tag.color = value;
    // @ts-ignore
    else object[name] = value;
    onChange(object)
  }

  return (
    <div>
      <div>
        <h4>EDIT POST</h4>
      </div>

      <div className='form-field'>
        <label>Title</label>
        <textarea name="title" id="post-title" value={data['title']} rows={5} cols={3} {...formProps} maxLength={130} />
        <div className='title-validation-message'>
          <label>130 character maximum</label>
          <label>{`${data.title.length}/130`}</label>
        </div>
      </div>

      <div className='form-field'>
        <select name='tagLabel' {...formProps}>
          <option value="none" selected disabled hidden>Tag</option>
          <option value="Javascript">Javascript</option>
          <option value="Web Design">Web Design</option>
          <option value="JQuery">JQuery</option>
        </select>
      </div>

      <div className='form-field'>
        <input className='input-tag-color' type="color" id="tag-color" name="tagColor" value={data.tag.color} {...formProps} />
        <label >Tag Color</label>
      </div>

      <div className='form-field'>
        <label>Date</label>
        <input type="text" name="date" id="post-date" {...formProps} />
      </div>

      <div className='form-field'>
      <input type="button" value="Save" onClick={submit} />
      </div>
    </div>
  )
}

export default PostEditForm;