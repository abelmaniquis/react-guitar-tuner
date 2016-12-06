import React from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound'

class Tones extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            tones: ["https://www.electricherald.com/tuner/1-E.mp3",
                    "https://www.electricherald.com/tuner/2-B.mp3",
                    "https://www.electricherald.com/tuner/3-G.mp3",
                    "https://www.electricherald.com/tuner/4-D.mp3",
                    "https://www.electricherald.com/tuner/5-A.mp3",
                    "https://www.electricherald.com/tuner/6-E.mp3"
            ]
        }
        
    }
    render() {
        return (
            <div className="audiocontainer">
            <Sound
                url= "https://www.electricherald.com/tuner/1-E.mp3"
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
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
