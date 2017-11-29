import { connect } from 'react-redux'
import testRedux from './testRedux'
import { openModal, shutModal, changeStateA} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    modalState: state.modalStatus,
    testState: state.testState
  }
}

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