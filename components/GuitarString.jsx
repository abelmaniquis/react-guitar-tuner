import React from 'react';
import Sound from 'react-sound';

class GuitarString extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
         playing:this.props.isPlaying  
        };
        this.playNote = this.playNote.bind(this);
    }
    playNote(e){
     e.preventDefault();
     this.setState({
         playing:true
     });
    }
    render(){
        
        var playStatus = Sound.status.STOPPED;
        
        if(this.state.playing === true){
            playStatus = Sound.status.PLAYING;
        }
        
        return(
            <div>
            <form onSubmit={this.playNote}>
                <button id={this.props.note} className="string"/>
            </form>
            <Sound className={this.props.note}
            url={`https://www.electricherald.com/tuner/${this.props.note}.mp3`}
            playStatus={playStatus}
            />
            </div>
        );
    }
}

module.exports = GuitarString;