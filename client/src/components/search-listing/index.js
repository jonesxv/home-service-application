import { connect } from 'react-redux';
import SearchListing from './SearchListing';
import { getServices, searchServices } from '../../actions/services';

function mapStateToProps(state) {
  return {
    users: state.users,
    services: state.services
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getServices: () => {
      return dispatch(getServices())
    },
    searchServices: (compID, catID) => {
      return dispatch(searchServices(compID, catID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListing);