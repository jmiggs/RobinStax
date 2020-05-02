import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
// import Main from './main';
import Asset from './asset'
import { ThunkFetchQuote } from '../../actions/asset_actions'

// test data of the graph
const testdata = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];


const mapStateToProps = (state, symbol) => {

  return({
  currentUser: state.entities.users[state.session.id],
  renderType: 'Asset',
  data: state.data[symbol.symbol]
  }
  )
};

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({
  fetchStock: (sym) => dispatch(ThunkFetchQuote(sym))
});

export default connect(mapStateToProps, mapDispatchToProps)(Asset);