import { useEffect, useRef, useState } from 'react'
import './App.css'
const audioClipsArray = [
  {
    keyCode: 81,
    displayText: 'Heater 1',
    text: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    color: '#FFADAD',
  },

  {
    keyCode: 87,
    displayText: 'Heater2',
    text: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    color: '#ffd6a5',
  },
  {
    keyCode: 69,
    displayText: 'Heater 3',
    text: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    color: '#fdffb6',
  },
  {
    keyCode: 65,
    displayText: 'Heater 4',
    text: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    color: '#caffbf',
  },
  {
    keyCode: 83,
    displayText: 'Heater 6',
    text: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    color: '#9bf6ff',
  },
  {
    keyCode: 68,
    displayText: 'Disco',
    text: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    color: '#a0c4ff',
  },
  {
    keyCode: 90,
    displayText: 'Kick and Hat',
    text: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    color: '#bdb2ff',
  },
  {
    keyCode: 88,
    displayText: 'Kick',
    text: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    color: '#ffc6ff',
  },
  {
    keyCode: 67,
    displayText: 'Snare',
    text: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    color: '#fffffc',
  },
]
function App() {
  const [display, setDisplay] = useState('')
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === e.key.toUpperCase()) {
        playAudio(e?.key)
      } else {
        playAudio(e?.key.toUpperCase())
      }
    })
  }, [])
  const playAudio = (padName, displayName) => {
    const audio = document.getElementById(padName)
    audio?.play()
    setDisplay(displayName)
  }
  return (
    <>
      <div id="drum-machine">
        <div id="display">
          <h1>{display}</h1>
        </div>
        <div className="container">
          {audioClipsArray.map((audio) => {
            return (
              <button
                style={{ backgroundColor: audio.color }}
                key={audio.keyCode}
                id={audio.keyCode}
                className="drum-pad"
                onClick={() => {
                  playAudio(audio.text, audio.displayText)
                }}
              >
                <audio className="clip" id={audio.text} src={audio.src} />
                {audio.text}
              </button>
            )
          })}
        </div>
        <h4>Made by Aayush Gupta❤ </h4>
      </div>
    </>
  )
}

export default App
