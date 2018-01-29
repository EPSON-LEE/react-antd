import { Tag, Input, Tooltip, Icon, Cascader  } from 'antd'
import React from 'react'

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou'
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing'
  }],
}];

export default class EditableTagGroup extends React.Component {
  
  state = {
    inputVisible: false,
    inputValue: '',
    content: []
  };

  // 删除tabel栏
  handleClose = (removedTag) => {
    const tags = this.state.content.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ content: tags});
  }

  // she
  showCascader = () => {
    this.setState({ inputVisible: true });
  }

  onChange = (value) => {
    let newChoice = value[0] + '-' + value[1]
    this.state.content.push(newChoice)
    this.setState({
      // 将选好的内容存进content中
      content: this.state.content,
      // 显示控制
      inputVisible: false
    });
    console.log(this.state.content)
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

  render() {
    const { content, inputVisible } = this.state;
    return (
      <div>
        {
          // 使用tooltip显示选择内容
          content.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} closable={index !== -1} afterClose={() => this.handleClose(tag)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? <Tooltip title={tag} key={index}>{tagElem}</Tooltip> : tagElem;
          })}
          {
            inputVisible && (
              <Cascader
               options={options}
              //  选择完成后的回调
               onChange={this.onChange}
               placeholder="Please select" />
            )
          }
         {!inputVisible && (<Tag
            onClick={this.showCascader}
            style={{ background: '#fff', borderStyle: 'dashed' }}
          >
            <Icon type="plus" /> New Tag
          </Tag>
         )}
      </div>
    );
  }
}