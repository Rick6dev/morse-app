import React, { useEffect, useState } from 'react';
import './App.css'
import miImagen from './assets/codMorse.jpg';
import Ligth from './components/Ligth/Ligth';
import Ligth1 from './components/Ligth2/Ligth1';
const dictMorse = {
  'A': '.-', 'B': '-...', 'C': '-.-.', '@': '----', 'D': '-..', 'E': '.', 
  'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 
  'L': '.-..', 'M': '--', 'N': '-.', 'Ñ': '--.--', 'O': '---', 'P': '.--.', 
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 
  'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', 
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', 
  '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', 
  ',': '--..--', '?': '..--..', '"': '.-..-.', '/': '-..-.', ' ': ' '
};

const dotSound = new Audio('/dot.mp3');
const dashSound = new Audio('/dash.mp3');

const convertToMorse = (msg) => {
  let msgToMorse = '';
  for (let i = 0; i < msg.length; i++) {
    

    console.log(msg.length)
    msgToMorse += dictMorse[msg[i]] || ''; // Agrega un valor vacío si no encuentra el carácter
  }
  return msgToMorse;
};

const playMorseSoundAndLight = (morseCode, setLightOn,setLightOn2) => {
  const playNext = (index) => {
    if (index >= morseCode.length) return; // Termina si se han procesado todos los caracteres

    const char = morseCode[index];

    if (char === '.') {
      setLightOn(true); // Enciende la luz
      setTimeout(() => {
        setLightOn(false); // Apaga la luz
        setTimeout(() => playNext(index + 1), 200); // Espera antes de procesar el siguiente carácter
      }, 200); // Duración del punto
    } else if (char === '-') {
      setLightOn2(true); // Enciende la luz
      setTimeout(() => {
        setLightOn2(false); // Apaga la luz
        setTimeout(() => playNext(index + 1), 600); // Espera antes de procesar el siguiente carácter
      }, 600); // Duración de la raya
    } else {
      // Si es un espacio o carácter no reconocido, simplemente pasa al siguiente
      setTimeout(() => playNext(index + 1), 200); // Espera entre caracteres
    }
  };

  playNext(0); // Comienza la reproducción desde el primer carácter
};

const MorseConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [lightOn, setLightOn] = useState(false);
  const [lightOn2,setLightOn2]=useState(false);
  const [proccess,setProcess]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedMsg = input.replace(/CH/g, '@').toUpperCase();
    const morseCode = convertToMorse(modifiedMsg);
    setProcess(true)
    setOutput(morseCode);
    playMorseSoundAndLight(morseCode, setLightOn,setLightOn2); // Reproduce el sonido y controla la luz
  };



  return (
    <div>

      <div className="container">
      <form onSubmit={handleSubmit} className='container-form'>
      <h1>Convertidor a Código Morse</h1>

        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ingrese su mensaje" 
        />
        <button type="submit">Convertir</button>

        <div className='container-msg'>

        {proccess?
        
        <div>
        <h2>Mensaje en Código Morse:</h2>
        <p>{output}</p>

        </div>
        
        
        :  <div>
        <h2></h2>
        <p></p>

        </div>}
        </div>
    
      </form>
      <div className="container-image">
          <img src={miImagen} alt=""  className='image'/>
      </div>

      </div>
  
 
      <div className="containerBombillos">
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>
      <Ligth lightOn={lightOn}></Ligth>


    

     
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>
        <Ligth1 lightOn2={lightOn2}></Ligth1>  
          
        <Ligth1 lightOn2={lightOn2}></Ligth1>

      </div>

      </div>
  );
};

export default MorseConverter;
