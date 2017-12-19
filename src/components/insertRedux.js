import { connect } from 'react-redux'
import testRedux from './testRedux'
import { openModal, shutModal, changeStateA} from '../redux/actions'

// 把状态（state）传到组件中
const mapStateToProps = (state) => {
  return {
    modalState: state.modalStatus,
    testState: state.testState
  }
}

// 把行为(action)传到组件中
const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () =>{
      dispatch(openModal())
    },
    shutModal: () => {
      dispatch(shutModal())
    },
    changeStateA: (text) =>{
      dispatch(changeStateA(text))
    }
  }
}

const insertRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(testRedux)

export default insertRedux