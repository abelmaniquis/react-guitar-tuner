import React from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound';
import GuitarString from './GuitarString.jsx';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            playing:false,
            notes:[ "https://www.electricherald.com/tuner/1-E.mp3",
                    "https://www.electricherald.com/tuner/2-B.mp3",
                    "https://www.electricherald.com/tuner/3-G.mp3",
                    "https://www.electricherald.com/tuner/4-D.mp3",
                    "https://www.electricherald.com/tuner/5-A.mp3",
                    "https://www.electricherald.com/tuner/6-E.mp3"
                    ]
        }
    }
    
    render(){
        return(
        <div>
        <h1 className="title">Guitar Tuner</h1>
            <div className= "fretboard">
            <ul>
                <li><GuitarString note={"1-E"} isPlaying={false} /></li>
                <li><GuitarString note={"2-B"} isPlaying={false}/></li>
                <li><GuitarString note={"3-G"} isPlaying={false}/></li>
                <li><GuitarString note={"4-D"} isPlaying={false}/></li>
                <li><GuitarString note={"5-A"} isPlaying={false}/></li>
                <li><GuitarString note={"6-E"} isPlaying={false}/></li>
            </ul>
            </div>
        </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))