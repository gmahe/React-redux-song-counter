import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="righ floated content">
            <button
              onClick={() => this.props.selectSong2(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return <div className="iu divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // Called each time the states are changed.
  console.log(state);
  return { songs: state.songs }; // Returns only the songs, not the selectedSong
};

export default connect(mapStateToProps, {
  // So the action selectSong() is now reachable from SongList component
  //  as an action and not a function.
  selectSong2: selectSong
})(SongList);
