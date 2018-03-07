import React from 'react';
import ReactDOM from 'react-dom';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      content: null
    }
  }
  handleChange = (content) => {
    console.log(content)
  }

  handleHTMLChange = (html) => {
    console.log(html)
  }
  render () {
    const editorProps = {
      height: 500,
      initialContent: this.state.content,
      onChange: this.handleChange,
      onHTMLChange: this.handleHTMLChange
    }
    return (
      <div className="demo">
        <BraftEditor {...editorProps}/>
      </div>
    )
  }
}