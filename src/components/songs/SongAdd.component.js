import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addSong} from '../../redux/songs/song-action'


class SongAdd extends Component {

    state={
        title: '',
        duration: 0
    }

    handleInputChanged = (event) =>{
        const {name, value} = event.target;
        this.setState({[name] : value});
        console.log(this.state);
    }

    onSongSubmit = (event) => {
        event.preventDefault();
        
        this.props.addSong({id: Math.random(), ...this.state})
    }


  render() {
    return (
      <div className='ui segment container'>
        <form className="ui form" onSubmit={this.onSongSubmit}>
            <div className="field">
                <input type="text" name='title' placeholder='Title' onChange={this.handleInputChanged}/>
            </div>
            <div className="field">
                <input type="text" name='duration' placeholder='Duration' onChange={this.handleInputChanged}/>
            </div>
            <button className="ui right floated primary button">Save</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) =>({})
const mapDispatchToProps = (dispatch) => ({addSong: (song) => dispatch(addSong(song))})

export default connect(mapStateToProps, mapDispatchToProps)(SongAdd)
