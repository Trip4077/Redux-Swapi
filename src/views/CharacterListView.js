import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (!this.props.fetching) {
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
  return {
    fetching: state.fetching,
    characters: state.characters
  }
}

export default connect(mapStateToProps
  /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
  }
)(CharacterListView);
