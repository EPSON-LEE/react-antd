import React from 'react'
import { bindActionCreators } from 'redux'
import { Table, Icon, Divider } from 'antd';
import PropTypes from 'prop-types';
import { Button } from 'antd'
import { connect } from 'react-redux'
import { getList } from '../../redux/actions'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }];

  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];

class Index extends React.Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    this.props.getList()
  }

  render() {
    // this.props.dispatch(getList)
    return (
      <div>
      <span className="pop-up-control">拉</span>
        <Button type="dashed">
        打开
        </Button>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

// 将state中的内容注入到props中
function mapStateToProps(state) {
  return {
    list: state.getList
  }
}

// 将指定action中的内容注入到props中 注入指定的action creator
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)