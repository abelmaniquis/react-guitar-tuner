import React from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound';
import GuitarString from './GuitarString.jsx';
import midiWrite from 'midi-writer-js';
import axios from 'axios';
import Anime from 'react-anime';

// guitar pary API key: 5ba2138e7dbcbd3b514b5f6860f3a252e105580f

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            <div>
            <ul className= "fretBoard">
                <li><GuitarString  note={'6-E'} isPlaying={false} /></li>
                <li><GuitarString  note={'5-A'} isPlaying={false}/></li>
                <li><GuitarString  note={'4-D'} isPlaying={false}/></li>
                <li><GuitarString  note={'3-G'} isPlaying={false}/></li>
                <li><GuitarString  note={'2-B'} isPlaying={false}/></li>
                <li><GuitarString  note={'1-E'} isPlaying={false}/></li>
            </ul>
            </div>
            
            
        </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))