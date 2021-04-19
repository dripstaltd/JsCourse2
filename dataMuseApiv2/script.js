'using strict';

/*
- api extensions need spaces replace with a '+'


*/
///////////////////////////////////////////////////////////////
//> Document Selectors                            //
///////////////////////////////////////////////////////////////
const form = document.querySelector('.rhyme-form');
const inputElement = form.querySelector('#input-pwd');
const resultBlock = document.querySelector('.result-row');
const btn = document.getElementById('rhyme-form-btn');
const btnReset = form.querySelector('#resetInput');

let wordStr;
///////////////////////////////////////////////////////////////
//> DataMuse API / Words endpoint                            //
///////////////////////////////////////////////////////////////
// // Means like
// const ml = `ml=`;
// // Sounds Like
// const sl = `sl=`;
// // Spelled like
// const sp = `sp=`;
// // Related word
// const rel = `rel_`;
// // Left context
// const lc = `lc=`;
// // Ends with
// const startsWith = `*${letter}`;
// // Starts with
// const endsWith = `${letter}*`;

let resultStr = [];
///////////////////////////////////////////////////////////////
//-| DataMuse API Extensions                                  //
///////////////////////////////////////////////////////////////
// const similarTo = `${ml}${wordStr}`;
// const relatedToStartsWith = `${ml}${sp}${endsWith}`;
// const relatedToEndsWith = `${ml}${word}&${sp}${startsWith}`;
// const soundsLike = `${sl}${word}`;
// const similarSpelling = `${sp}${word}`;
// // const rhymesWith = `${rel}rhy=${wordStr}`;
// const relatedRhymes = `${ml}${word}&${rel}rhy=${word}`;
// const adjectiveSearch = `${rel}jjb=${word}`;
// const oftenFollowStartWith = `${lc}${word}&${sp}${letter}*`;
// const triggered = `${rel}trg=${word}`;
const rhymeResults = [];
const myWord = 'jam';
///////////////////////////////////////////////////////////////
//-| Trying Async Await                                      //
///////////////////////////////////////////////////////////////
const renderError = function (msg) {
  resultBlock.insertAdjacentText('beforeend', msg);
};

const renderData = function (rhyme) {
  for ({ word, score, numSyllables } of rhyme) {
    rhymeResults.push(word);
    const html = `<p class="result-row">${word}</p>`;
    resultBlock.insertAdjacentHTML('afterbegin', html);
  }
};

const getWordData2 = async function (word) {
  try {
    const resRhyme = await fetch(`https://api.datamuse.com/words?sl=${word}`);
    if (!resRhyme.ok || inputRhyme === Number)
      throw new Error('Problem getting rhyme data...');
    const dataRhyme = await resRhyme.json();
    const dataRhymeFormated = await dataRhyme.slice(-6);
    renderData(dataRhymeFormated);
  } catch (err) {
    console.error(`${err} 😬`);
    renderError(`Something went wrong ☺️ ${err.message}`);
  }
};

// -| BUTTON EVENT HANDLER  ;
btn.addEventListener('click', function (e) {
  e.preventDefault();
  inputElement.focus();
  const inputRhyme = inputElement.value;
  getWordData2(inputRhyme);
});

// btnReset.addEventListener('click', function (e) {
//   e.preventDefault();
//   inputElement.focus();
//   resultBlock.innerHTML = ' ';
// });
