import React from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound';
import GuitarString from './GuitarString.jsx';

class App extends React.Component{
    
    render(){
        return(
        <div>
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