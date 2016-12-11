import React from 'react'
import midiWrite from 'midi-writer-js'

class MidiTest extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        
        var track = new midiWrite.Track();
        track.addEvent(new midiWrite.ProgramChangeEvent({instrument : 1}));
        
        var note = new midiWrite.NoteEvent({pitch:['C4', 'D4', 'E4'], duration: '4'});
        track.addEvent(note);
        
        console.log(track);
        
        return(
        <div>
        <h1>From Midi Test</h1>
        </div>
        )
    }
}

module.exports = MidiTest;