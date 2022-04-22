import React, { Component } from "react";
import songIcon from "../../assets/images/logo192.png";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="ui segment container">
        <div className="ui divided items">
          {this.props.songs &&
            this.props.songs.length > 0 &&
            this.props.songs.map((item) => (
              <div className="item" key={item.id}>
                <div className="image mini ui" style={{ width: "60px" }}>
                  <img
                    src={songIcon}
                    alt={item.title}
                    className="ui avatar image"
                  />
                </div>
                <div className="content">
                  <a href="#" className="header">
                    {item.title}
                  </a>
                  <span className="ui icon button right floated red small">
                    <i className="icon trash alternate"></i>
                  </span>
                  <span className="ui icon button right floated green small">
                    <i className="icon eye"></i>
                  </span>
                  <div className="extra">Duration: {item.duration}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  songs: state.songReducer.songs,
});

export default connect(mapStateToProps)(SongList);
