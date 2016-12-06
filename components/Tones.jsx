import React from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound'

class Tones extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            playing:"Sound.status.PLAYING"
        }
        
    }
    render() {
        return (
            <div className="audiocontainer">
            <Sound
                url = "https://www.electricherald.com/tuner/1-E.mp3"
                playStatus={"Sound.status.Playing"}
                playFromPosition={300}
                onLoading={console.log("LOADING LOADING LOADING!")}
                onPlaying={console.log("PLAYING PLAYING PLAYING!")}
                onFinishedPlaying={console.log("finished playing")}
            />
        </div>
        )
    }
}

module.exports = Tones

/*
notes:

https://www.electricherald.com/tuner/1-E.mp3
https://www.electricherald.com/tuner/2-B.mp3
https://www.electricherald.com/tuner/3-G.mp3
https://www.electricherald.com/tuner/4-D.mp3
https://www.electricherald.com/tuner/5-A.mp3
https://www.electricherald.com/tuner/6-E.mp3
*/
