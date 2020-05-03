// import Main from './main';
import { connect } from 'react-redux';
import { ThunkFetch5D, 
  ThunkFetch1D, 
  ThunkFetch1M, 
  ThunkFetch3M, 
  ThunkFetch1Y, 
  ThunkFetch5Y } from '../../actions/asset_actions'
import Graph from './graph'

// test data of the graph
// const testdata = [
//   {
//     name: 'Page A', average: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', average: null, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', average: null, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', average: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', average: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', average: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', average: 3490, pv: 4300, amt: 2100,
//   },
// ];

// need to fix this FX

const dataFiller = (array, currTab) => {

  if (!array) return null;

  switch (currTab) {
    case '1D':
    case '1M':
    case '5D':
      return(
        array.map( (dataPoint, idx) => {
          if (!dataPoint.average) {
            let newAvg = array[idx -1].average
            return { price: newAvg, date: dataPoint.date, label: dataPoint.label}
          } else {
            return { price: dataPoint.average, date: dataPoint.date, label: dataPoint.label }
          };
        })
      );
      case '3M':
      case '1Y':
      case '5Y':
        return(
          array.map( (dataPoint, idx) => {
            if (!dataPoint.close) {
              let newAvg = array[idx -1].close
              return { price: newAvg, date: dataPoint.date, label: dataPoint.label}
            } else {
              return { price: dataPoint.close, date: dataPoint.date, label: dataPoint.label }
            };
          })
        );
    default:
      break;
  }

}


const mapStateToProps = (state, symbol) => {


  
  return({
  currentUser: state.entities.users[state.session.id],
  renderType: 'Asset',
  data: dataFiller(state.data[symbol.symbol], !state.data.currTab ? '5D' : state.data.currTab )
  }
  )
};

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({
  fetch5D: (sym, tab) => dispatch(ThunkFetch5D(sym, tab)),
  fetch1D: (sym, tab) => dispatch(ThunkFetch1D(sym, tab)),
  fetch1M: (sym, tab) => dispatch(ThunkFetch1M(sym, tab)),
  fetch3M: (sym, tab) => dispatch(ThunkFetch3M(sym, tab)),
  fetch1Y: (sym, tab) => dispatch(ThunkFetch1Y(sym, tab)),
  fetch5Y: (sym, tab) => dispatch(ThunkFetch5Y(sym, tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);