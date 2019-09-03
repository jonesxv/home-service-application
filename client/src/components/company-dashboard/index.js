import { connect } from 'react-redux';
import CompanyDashboard from './CompanyDashboard';
import { getCompany, createService } from '../../actions/dashboard';

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}

const matpDispatchToProps = dispatch => {
  return {
    getCompany: id => {
      return dispatch(
        getCompany(id)
      )
    },
    createService: id => {
      return dispatch(
        createService(id)
      )
    }
  }
}

export default connect(mapStateToProps, matpDispatchToProps)(CompanyDashboard);