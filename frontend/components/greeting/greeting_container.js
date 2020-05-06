import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { ThunkFetchAll, ThunkFetch5D, updateInitStatus } from '../../actions/asset_actions'
import {postAll, fetchAll} from '../../util/iex_util'
import Greeting from './greeting';


const mSTP = (state) => ({
  currentUser: state.session.id,
  data: state.data,
  initStat: state.data.initStat
});


const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  postAll: (data) => postAll(data),
  fetch5D: (sym) => dispatch(ThunkFetch5D(sym)),
  fetchAll: () => fetchAll(),
  updateInitStatus: () => dispatch(updateInitStatus())
});

export default connect(mSTP, mDTP)(Greeting);
