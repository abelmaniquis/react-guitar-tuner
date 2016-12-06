import React from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound';
import Tones from './Tones.jsx';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            e1:"https://www.electricherald.com/tuner/1-E.mp3",
            b2:"https://www.electricherald.com/tuner/2-B.mp3",
            g3:"https://www.electricherald.com/tuner/3-G.mp3",
            d4:"https://www.electricherald.com/tuner/4-D.mp3",
            a5:"https://www.electricherald.com/tuner/5-A.mp3",
            e6:"https://www.electricherald.com/tuner/6-E.mp3"
        }
    }
    
    render(){
        return(
        <div>
            <h1>Hello tuner!</h1>
            <Sound 
            url = {this.state.g3}
            playStatus={Sound.status.PLAYING}
            />
            
            <Sound 
            url = {this.state.e1}
            playStatus={Sound.status.PLAYING}
            />
        </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))