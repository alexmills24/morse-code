const morseAlphabet = { a: '.-', b: '-...', c: '-.- .', d: '-..', e: '.', f: '..- .', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..', " ": "/" };

const enteredText = document.getElementById('entered-text');
const translatedText = document.getElementById('translated-english');

convertText = () => {
  let makeLowerCase = enteredText.value;
  makeLowerCase = makeLowerCase.toLowerCase();
  makeLowerCase = makeLowerCase.split("");
  for (index = 0; index < makeLowerCase.length; index++) {
    makeLowerCase[index] = morseAlphabet[makeLowerCase[index]]
  }
  makeLowerCase = makeLowerCase.join(" ")
  translatedText.innerHTML = makeLowerCase;
};

const enteredMorse = document.getElementById('entered-morse');
const translatedMorse = document.getElementById('translated-morse');

const convertMorse = message => {
  let morseArray = []
  let translated = ""
  morseArray = enteredMorse.value.toLowerCase().split(" ")
  morseArray.forEach((letter) => {
    for (translation in morseAlphabet) {
      if (letter === morseAlphabet[translation]) {
        translated += translation
      }
    }
    translatedMorse.innerHTML = translated
  });

};