'using strict';

/*
- api extensions need spaces replace with a '+'


*/
///////////////////////////////////////////////////////////////
//> Document Selectors                            //
///////////////////////////////////////////////////////////////
const form = document.querySelector('.rhyme-form');
const inputElement = form.querySelector('#input-pwd');
const resultBlock = document.querySelector('.result-container');
const btn = document.getElementById('RhymeformBtn');

let word = 'plastic';
let letter;
let wordStr;
///////////////////////////////////////////////////////////////
//> DataMuse API / Words endpoint                            //
///////////////////////////////////////////////////////////////
// Means like
const ml = `ml=`;
// Sounds Like
const sl = `sl=`;
// Spelled like
const sp = `sp=`;
// Related word
const rel = `rel_`;
// Left context
const lc = `lc=`;
// Ends with
const startsWith = `*${letter}`;
// Starts with
const endsWith = `${letter}*`;

let resultStr = [];
///////////////////////////////////////////////////////////////
//-| DataMuse API Extensions                                  //
///////////////////////////////////////////////////////////////
const similarTo = `${ml}${wordStr}`;
const relatedToStartsWith = `${ml}${sp}${endsWith}`;
const relatedToEndsWith = `${ml}${word}&${sp}${startsWith}`;
const soundsLike = `${sl}${word}`;
const similarSpelling = `${sp}${word}`;
// const rhymesWith = `${rel}rhy=${wordStr}`;
const relatedRhymes = `${ml}${word}&${rel}rhy=${word}`;
const adjectiveSearch = `${rel}jjb=${word}`;
const oftenFollowStartWith = `${lc}${word}&${sp}${letter}*`;
const triggered = `${rel}trg=${word}`;
///////////////////////////////////////////////////////////////
//-| Functions                                               //
///////////////////////////////////////////////////////////////
//> Render rhymeList Function -
// const renderRhymeList = async function (data) {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>`;
// };

///////////////////////////////////////////////////////////////
const soundsLikeSearch = async function (rhymeKey) {
  const urlStr = `${rel}rhy=${rhymeKey}`;
  // Reverse geoCoding
  const responseDataMuse = await fetch(
    `https://api.datamuse.com/words?${urlStr}`
  );
  const data = await responseDataMuse.json();
  console.log(data);
  data.forEach(rhyme => {
    resultStr.push(rhyme.word);
  });
  console.log(resultStr.slice(-10));

  const displayRhymes = function () {
    // use this to read data
    resultBlock.innerHTML = ' ';

    resultBlock.textContent = resultStr.slice(-10);

    resultStr.forEach(function (wrd, i) {
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${wrd}">${
        i + 1
      } ${wrd}</div>
      </div>
      `;
      resultBlock.insertAdjacentHTML('afterbegin', html);
    });
  };
  displayRhymes();
  // Render data
  // renderRhymeList(data[0]);
};

btn.addEventListener('click', function (e) {
  e.preventDefault();
  a = inputElement.value;
  inputElement.focus();
  soundsLikeSearch(a);
});
