import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './styles.css'


class Player extends Component {
  render() {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          title='test'
          description='stream project'
          url='http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2FmyTest%2Fplaylist.m3u8'
          license='PLAY2-ettYE-98ReJ-M99N6-WaPhz-7RjKP'
          playing={false}
          muted={false}
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
    )
  }
}


export default Player
