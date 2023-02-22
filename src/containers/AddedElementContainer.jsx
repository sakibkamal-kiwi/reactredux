import { connect } from 'react-redux'
import AddedElement from '../components/AddedElement'

const mapStateToProps = state =>({
  data:state.cardItems
})


const mapDispatchToProops = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProops)(AddedElement)