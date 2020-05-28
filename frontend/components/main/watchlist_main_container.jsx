import Main from './main';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }, ownProps ) => ({
  currentUser: users[session.id],
  renderType: 'portfolio',
  wlIndicator: true,

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);