import { connect, batch } from 'react-redux';
import { ThunkFetchBatch5D,
  ThunkFetchBatch1D,
  ThunkFetchBatch1M,
  ThunkFetchBatch3M,
  ThunkFetchBatch1Y,
  ThunkFetchBatch5Y } from '../../actions/asset_actions'
import Graph from './graph'



const dataFiller = (data, currTab) => {


  if (!data.portfolio) return null;

  switch (currTab) {
    case '1D':
    case '1M':
    case '5D':
        let parser = {};  
        Object.keys(data.portfolio).forEach( key =>
          parser[key] = data.portfolio[key].chart
        );

        let parsedArr = Object.values(parser);
        let batchAvg = [];
        let movingTotal = 0;

        for (let j = 0; j < parsedArr[0].length; j++) {
          let sum = 0;
          for ( let i = 0; i < parsedArr.length; i++){
            sum += parsedArr[i][j].close;
            if (i === parsedArr.length - 1) {
              if (j === 0) {
                batchAvg.push( {date: parsedArr[i][j].date, label: parsedArr[i][j].label, price: sum / parsedArr.length })
              } else {
                batchAvg.push( {date: parsedArr[i][j].date, label: parsedArr[i][j].label, price: movingTotal / batchAvg.length + 1 })
              }
            }
          }
          movingTotal += sum / parsedArr.length;
        }


        return batchAvg
    case '3M':
    case '1Y':
    case '5Y':
      return( 'hi'
        // array.map( (dataPoint, idx) => {
        //   if (!dataPoint.close) {
        //     let newAvg = array[idx -1].close
        //     return { price: newAvg, date: dataPoint.date, label: dataPoint.label}
        //   } else {
        //     return { price: dataPoint.close, date: dataPoint.date, label: dataPoint.label }
        //   };
        // })
      );
    default:
      break;
  }
}

const mapStateToProps = (state, symbol) => {

  return({
  currentUser: state.entities.users[state.session.id],
  renderType: 'Portfolio',
  data: dataFiller(state.entities.assets, !state.data.currTab ? '5D' : state.data.currTab ),
  assets: !state.entities.assets.portfolio? '' : Object.keys(state.entities.assets.portfolio)

  // data: //insert some data formatter heere
  }
  )
};

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({

  fetchBatch5D: (data, tab) => dispatch(ThunkFetchBatch5D(data, tab)),
  fetchBatch1D: (data, tab) => dispatch(ThunkFetchBatch1D(data, tab)),
  fetchBatch1M: (data, tab) => dispatch(ThunkFetchBatch1M(data, tab)),
  fetchBatch3M: (data, tab) => dispatch(ThunkFetchBatch3M(data, tab)),
  fetchBatch1Y: (data, tab) => dispatch(ThunkFetchBatch1Y(data, tab)),
  fetchBatch5Y: (data, tab) => dispatch(ThunkFetchBatch5Y(data, tab)),

});


export default connect(mapStateToProps, mapDispatchToProps)(Graph);