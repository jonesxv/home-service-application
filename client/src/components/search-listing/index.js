import { connect } from 'react-redux';
import SearchListing from './SearchListing';
import { getServices } from '../../actions/services';

function mapStateToProps(state) {
  console.log('ssssss', state.services)
  return {
    services: state.services
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getServices: () => {
      return dispatch(getServices())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListing);