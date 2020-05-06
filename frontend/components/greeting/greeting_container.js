import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { ThunkFetchAll, ThunkFetch5D } from '../../actions/asset_actions'
import {postAll, fetchAll} from '../../util/iex_util'
import Greeting from './greeting';

const mSTP = (state) => ({
  currentUser: state.session.id,
  data: state.data
});


const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  postAll: (data) => postAll(data),
  fetch5D: (sym) => dispatch(ThunkFetch5D(sym)),
  fetchAll: () => fetchAll(),
});

export default connect(mSTP, mDTP)(Greeting);
