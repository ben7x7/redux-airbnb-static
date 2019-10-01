import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flat from '../containers/flat';

import { setFlats } from '../actions';

class FlatList extends Component {

  componentWillMount() {
// TODO: dispatch an action to load flats!
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat, index) => <Flat flat={flat} key={flat.name} tabIndex={index} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
