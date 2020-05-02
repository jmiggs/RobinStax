import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default function CustomTooltip({payload,}) {
  if (payload.length === 0 || payload[0].payload.label === 'IGNORE') return null;


  return (
    <div className="tooltip-info">
    {payload[0].payload.label}
    <br/>
    {payload[0].payload.date}

    </div>
  )

}


//  for testing
// export default function CustomTooltip(payload) {
//   console.log(payload)
//   return 'hello';
// }