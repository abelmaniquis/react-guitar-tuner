import React from 'react'
import Sound from 'react-sound'

class GuitarString extends React.Component{
    constructor(props){
        super(props)
        this.state={
         playing:this.props.isPlaying  
        }
        
        this.playNote = this.playNote.bind(this)
    }
    playNote(e){
     e.preventDefault
     this.setState({
         playing:true
     })
    }
    render(){
        
        var playStatus = Sound.status.STOPPED
        
        if(this.state.playing === true){
            playStatus = Sound.status.PLAYING
        }
        
        var play = Sound.status.PLAYING
        var stop = Sound.status.STOPPED
        var pause = Sound.status.PAUSED
        return(
            <div>
            <form onSubmit={this.playNote}>
                <button>{this.props.note}</button>
            </form>
            
            <Sound className={this.props.note}
            url={`https://www.electricherald.com/tuner/${this.props.note}.mp3`}
            playStatus={playStatus}
            
            onLoading={console.log("Loading Loading Loading!")}
            onPlaying={console.log("playing playing playing!")}
            />
            
            
            </div>
        )
    }
}

module.exports = GuitarString