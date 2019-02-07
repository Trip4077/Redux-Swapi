import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h1>Loading</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log('MSTP: ', state)
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
}

export default connect(mapStateToProps
  /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getChars
  }
)(CharacterListView);
