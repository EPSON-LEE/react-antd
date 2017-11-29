import { connect } from 'react-redux'
import testRedux from './testRedux'
import { openModal, shutModal, changeStateA, changeStateB} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    modalStatus: state.modalStatus,
    test: state.testState
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
    },
    changeStateB: (text) => {
      dispatch(changeStateB(text))
    }
  }
}

const insertRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(testRedux)

export default insertRedux