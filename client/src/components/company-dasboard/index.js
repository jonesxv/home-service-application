import { connect } from 'react-redux';
import CompanyDashboard from './CompanyDashboard';
import { getCompany } from '../../actions/companies';

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
    }
  }
}

export default connect(mapStateToProps, matpDispatchToProps)(CompanyDashboard);