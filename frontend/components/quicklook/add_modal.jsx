import React from 'react';

export default class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClass: 'modal-hide',
      wls: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let wlsMap = {};


    this.props.wls.map(wl => {
      wlsMap[wl.id] = {name: wl.name, toAdd: false}
    })

    this.setState({
      wls: wlsMap
    })
  }

  

  handleChange(e) {

    let wlKey = e.currentTarget.name
    let wl = this.state.wls[wlKey]
    delete this.state.wls.wlKey
    let newWls = this.state.wls

    if (!wl.toAdd) {
      wl.toAdd = true;
      newWls[wlKey] = wl

      this.setState({
        wls: newWls
      })
      console.log(this.state)
    } else {
      wl.toAdd = false;
      newWls[wlKey] = wl;

      this.setState({
        wls: newWls
      })
      console.log(this.state)
    }
  }

  hideModal() {
    if (this.state.modalClass === 'modal-show') {
      this.setState({
        modalClass: 'modal-hide'
      })
    }
  }

  showModal() {
    if (this.state.modalClass === 'modal-hide') {
      this.setState({
        modalClass: 'modal-show'
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hit modal submit')

    this.props.processModalForm(this.state.wls, this.props.sym);
  }

  render() {
    if (!this.state.wls) return null;
    let wls = this.state.wls;

    return(
      <div className={this.state.modalClass}>
        <div className="add-modal-content">
          Add {this.props.sym} to Your Lists
          <form className="wl-modal-form" onSubmit={this.handleSubmit}>
            {Object.keys(wls).map( id =>
              <div className="modal-label-container" key={id}>
                <label className="modal-labels">
                  <input
                    name={id}
                    type="checkbox"
                    checked={wls[id].toAdd}
                    onChange={(e)=>this.handleChange(e)}
                  />
                  {wls[id].name}
                </label>
              </div>
            )}
            <button onClick={()=>this.hideModal()}> Cancel</button>
            <button type="submit" onClick={(e) => this.handleSubmit(e)}> Submit </button>
          </form>
          <div>
          </div>
        </div>
      </div>
    )
  }
}