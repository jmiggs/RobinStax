import React from 'react';

class Notifs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeClass: 'notif-container'
    }

    this.hideNotif = this.hideNotif.bind(this)
  }

  hideNotif() {
    // this.setState({
    //   activeClass: 'notif-container-hide'
    // })
    this.props.clearNotif()
  }

  

  render() {
    if (!Object.values(this.props.notifs)[0]) return null;
    debugger
    return (
      <div className={this.state.activeClass}>
        <div className="notif-text">
          {this.props.notifs.notif[0]}
        </div>
        <div>
          <button onClick={()=> this.hideNotif()}> close </button>
        </div>
      </div>
    )
  }
}


export default Notifs;