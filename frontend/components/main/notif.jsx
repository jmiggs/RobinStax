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
 
    return (
      <div className={this.state.activeClass}>
        <div className="notif-text">
          {this.props.notifs.notif[0]}
        </div>
        <div>
          <button className="notif-close" onClick={()=> this.hideNotif()}> X </button>
        </div>
      </div>
    )
  }
}


export default Notifs;