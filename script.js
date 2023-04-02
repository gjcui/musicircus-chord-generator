/* Chord Generator Code for Musicircus

My name is Gavin and I have no idea how to code so this is gonna be ugly                     */




//Initial Canvas Components
const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);




//Chord Library
let currentChord = 'none';
let currentInstruction = 'none';

const allChords = ['Cmaj9', 'C9sus4', 'Cm11', 'D9_C', 'Dbmaj13_b5', 'Dmaj9', 'D9sus4', 'Dm11', 'Bbmaj9_D', 'Ebmaj9', 'Cm11_Eb', 'Cmaj9_E', 'Em11', 'Fmaj13', 'Fm11', 'F9sus4', 
'C11_F', 'Dmaj9_Gb', 'Gmaj13', 'Gm11', 'Cm11_G', 'G9sus4', 'Abmaj13', 'Am11', 'Amaj9', 'Dm13_A', 'Bb9sus4', 'Bbmaj9', 'Bbm11', 'Bb6_b5', 'Bm11', 'Gmaj13_B'];

const Cmaj9 = ['C9sus4', 'Cm11', 'D9_C', 'Dbmaj13_b5', 'Dm11', 'Fmaj13', 'Fm11', 'Cm11_G', 'Abmaj13', 'Amaj9', 'Am11', 'Dm13_A', 'Bb6_b5', 'Bb9sus4', 'Gmaj13_B'];
const C9sus4 = ['Dbmaj13_b5', 'Bbmaj9_D', 'Dm11', 'Fmaj13', 'Dm13_A', 'Am11', 'Bbmaj9'];
const Cm11 = ['Cmaj9', 'Dbmaj13_b5', 'Dm11', 'Ebmaj9', 'Cm11_Eb', 'Fmaj13', 'Fm11', 'F9sus4', 'C11_F', 'Cm11_G', 'Am11', 'Abmaj13', 'Bbm11'];
const D9_C = ['Cmaj9_E', 'Em11', 'Dmaj9_Gb', 'Gmaj13', 'Cm11_G', 'Dm13_A', 'Bb6_b5', 'Gmaj13_B'];
const Dbmaj13_b5 = ['Cmaj9', 'Cm11', 'C9sus4', 'Cmaj9_E', 'Em11', 'Fmaj13', 'Fm11', 'Cm11_G', 'G9sus4', 'Am11', 'Dm13_A', 'Bbm11', 'Bbm11'];
const Dmaj9 = ['Cm11', 'D9_C', 'D9sus4', 'Dm11', 'Bbmaj9_D', 'Cm11_Eb', 'Cmaj9_E', 'Em11', 'Fmaj13', 'F9sus4', 'C11_F', 'Dmaj9_Gb', 'Gmaj13', 'Gm11', 'Dm13_A', 'Amaj9', 'Bbmaj9', 'Bm11', 'Gmaj13_B'];
const D9sus4 = ['Cmaj9', 'Cmaj9_E', 'Em11', 'Ebmaj9', 'Fm11', 'F9sus4', 'Gmaj13', 'Gm11', 'Cm11_G', 'Abmaj13', 'Am11', 'Bm11', 'Gmaj13_B'];
const Dm11 = ['Cm11', 'C9sus4', 'Bbmaj9_D', 'Ebmaj9', 'Cm11_Eb', 'Cmaj9_E', 'Em11', 'Fmaj13', 'Fm11', 'Dmaj9_Gb', 'Gmaj13', 'Gm11', 'Cm11_G', 'G9sus4', 'Am11', 'Amaj9', 'Dm13_A', 'Bb9sus4', 'Bb6_b5', 'Bm11', 'Gmaj13_B'];
const Bbmaj9_D = ['C9sus4', 'Dmaj9', 'Dm11', 'Ebmaj9', 'Cm11_Eb', 'Em11', 'Fmaj13', 'Dmaj9_Gb', 'Gmaj13', 'Gm11', 'Am11', 'Dm13_A', 'Bbmaj9', 'Bbm11', 'Gmaj13_B'];
const Ebmaj9 = ['Cmaj9', 'C9sus4', 'Cm11', 'Dbmaj13_b5', 'D9sus4', 'Cm11_Eb', 'Cmaj9_E', 'Fm11', 'F9sus4', 'Gmaj13', 'Gm11', 'Cm11_G', 'Abmaj13', 'Am11', 'Dm13_A', 'Bb9sus4'];
const Cm11_Eb = ['Cm11', 'Cmaj9', 'Ebmaj9', 'Cmaj9_E', 'Fmaj13', 'Fm11', 'F9sus4', 'Gmaj13', 'Abmaj13'];
const Cmaj9_E = ['Cmaj9', 'D9sus4', 'Dm11', 'Ebmaj9', 'Fmaj13', 'Fm11', 'Gmaj13', 'Am11', 'Dm13_A', 'Bbmaj9', 'Gmaj13_B'];
const Em11 = ['Cmaj9', 'C9sus4', 'Cm11', 'Dmaj9', 'Dm11', 'Fmaj13', 'Fm11', 'F9sus4', 'Gmaj13', 'Gm11', 'Cm11_G', 'Am11', 'Amaj9', 'Bb9sus4', 'Bm11', 'Gmaj13_B'];
const Fmaj13 = ['Cmaj9', 'C9sus4', 'Cm11', 'Dbmaj13_b5', 'Dm11', 'Ebmaj9', 'Cmaj9_E', 'Fm11', 'F9sus4', 'Gmaj13', 'G9sus4', 'Am11', 'Amaj9', 'Dm13_A', 'Bb9sus4', 'Bb6_b5'];
const Fm11 = ['Cmaj9', 'Cm11', 'Dbmaj13_b5', 'D9sus4', 'Dm11', 'Ebmaj9', 'Cm11_Eb', 'Cmaj9_E', 'Gm11', 'G9sus4', 'Abmaj13', 'Am11', 'Dm13_A', 'Bb9sus4', 'Bbm11', 'Bb5_b5', 'Gmaj13_B'];
const F9sus4 = ['Cmaj9', 'Cm11', 'Em11', 'Dmaj9_Gb', 'Gmaj13', 'Gm11', 'Cm11_G', 'G9sus4', 'Abmaj13', 'Am11', 'Bbmaj9', 'Bbm11', 'Bb6_b5', 'Bm11', 'Gmaj13_B'];
const C11_F = ['Dmaj9', 'Dm11', 'Em11', 'Fmaj13', 'Dm13_A'];
const Dmaj9_Gb = ['C9sus4', 'D9_C', 'Dm11', 'Ebmaj9', 'Em11', 'Fmaj13', 'Gmaj13', 'Gm11', 'Cm11_G', 'Am11', 'Amaj9', 'Bbmaj9', 'Bm11', 'Gmaj13_B'];
const Gmaj13 = ['C9sus4', 'Dmaj9', 'Dm11', 'D9sus4', 'Ebmaj9', 'Cmaj9_E', 'Em11', 'F9sus4', 'Dmaj9_Gb', 'Gm11', 'Cm11_G', 'Am11', 'Amaj9', 'Bbmaj9', 'Bb9sus4', 'Bbm11', 'Gmaj13_B'];
const Gm11 = ['Cmaj9', 'Cm11', 'C9sus4', 'D9_C', 'Dmaj9', 'Dm11', 'D9sus4', 'Bbmaj9_D', 'Ebmaj9', 'Cm11_Eb', 'Cmaj9_E', 'Em11', 'F9sus4', 'Dmaj9_Gb', 'Gmaj13', 'Abmaj13', 'Amaj9', 'Dm13_A', 'Bbmaj9', 'Bbm11', 'Bm11'];
const Cm11_G = ['Cmaj9', 'Cm11', 'Dm11', 'Ebmaj9', 'Cmaj9_E', 'Fm11', 'Gmaj13', 'Gm11', 'Am11', 'Dm13_A', 'Bbmaj9', 'Gmaj13_B'];
const G9sus4 = ['Cmaj9', 'C9sus4', 'Cm11', 'Dmaj9', 'Dm11', 'Ebmaj9', 'Cmaj9_E', 'Em11', 'Fmaj13', 'Fm11', 'Am11', 'Amaj9', 'Dm13_A', 'Bbmaj9', 'Bb9sus4', 'Bm11', 'Gmaj13_B'];
const Abmaj13 = ['Cmaj9', 'Cm11', 'Dbmaj13_b5', 'Dm11', 'Ebmaj9', 'Cm11_Eb', 'Cmaj9_E', 'Fmaj13', 'Fm11', 'Cm11_G', 'G9sus4', 'Am11', 'Bb9sus4'];
const Am11 = ['Cmaj9', 'C9sus4', 'Cm11', 'D9_C', 'Dbmaj13_b5', 'D9sus4', 'Dm11', 'Ebmaj9', 'Cmaj9_E', 'Em11', 'Fmaj13', 'Fm11', 'F9sus4', 'Gmaj13', 'Cm11_G', 'Abmaj13', 'Dm13_A', 'Bb9sus4', 'Bbm11', 'Bb6_b5', 'Gmaj13_B'];
const Amaj9 = ['Cmaj9', 'C9sus4', 'Dmaj9', 'Dm11', 'Em11', 'Fmaj13', 'Dmaj9_Gb', 'Gmaj13', 'Gm11', 'G9sus4', 'Dm13_A', 'Bb9sus4', 'Gmaj13_B'];
const Dm13_A = ['Cmaj9', 'C9sus4', 'Dmaj9', 'Dm11', 'Bbmaj9_D', 'Em11', 'Fmaj13', 'Fm11', 'Dmaj9_Gb', 'Gmaj13', 'Am11', 'Amaj9', 'Bb9sus4', 'Bm11', 'Gmaj13_B'];
const Bb9sus4 = ['Cmaj9', 'C9sus4', 'Cm11', 'D9_C', 'Dm11', 'Ebmaj9', 'Cm11_Eb', 'Cmaj9_E', 'Fmaj13', 'Fm11', 'Gm11', 'G9sus4', 'Cm11_G', 'Am11', 'Gmaj13_B'];
const Bbmaj9 = ['Gmaj9', 'C9sus4', 'Cm11', 'D9_C', 'Dmaj9', 'Dm11', 'Bbmaj9_D', 'Ebmaj9', 'Em11', 'Fmaj13', 'Fm11', 'F9sus4', 'Gmaj13', 'Gm11', 'Am11', 'Bbm11', 'Bb6_b5', 'Gmaj13_B'];
const Bbm11 = ['C9sus4', 'Cm11', 'Dm11', 'Ebmaj9', 'Fm11', 'Gm11', 'Cm11_G'];
const Bb6_b5 = ['C9sus4', 'Dm11', 'Dm13_A', 'Ebmaj9', 'Gm11', 'Abmaj13', 'Am11'];
const Bm11 = ['Cmaj9', 'Cm11', 'C9sus4', 'Dmaj9', 'Dm11', 'Cmaj9_E', 'Em11', 'Fmaj13', 'Gmaj13', 'Cm11_G', 'G9sus4', 'Am11', 'Bb6_b5'];
const Gmaj13_B = ['C9sus4', 'Cm11', 'Dmaj9', 'D9sus4', 'Ebmaj9', 'Cm11_Eb', 'Cmaj9_E', 'Em11', 'F9sus4', 'Dmaj9_Gb', 'Gmaj13', 'Gm11', 'Cm11_G', 'Bbmaj9', 'Bb6_b5'];




//Random Number Generator (Inclusive)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Starting Chord Chooser
function chooseStartingChord(){
    let startingChord = allChords[getRandomIntInclusive(0, allChords.length - 1)];
    return startingChord;
}

//Choose Chord Function
function chooseChord(arrayName) {
    let chordChosen = (eval(arrayName)[getRandomIntInclusive(0, (eval(arrayName).length - 1))]);
    return chordChosen;
}

//Store Chosen Chord Function
function storeChord(){
    currentChord = chooseChord(currentChord);
}

//Draw Text for Chords Function
function drawText(text) {
    let storedText = text;
    storedText = storedText.replace('_', '/');
    storedText = storedText.replace('Gb', 'F#');
    storedText = storedText.replace('/b5', '(b5)');

    console.log(storedText);

    ctx.font = "400px arial";
    ctx.fillStyle = "white";
    ctx.textAlign = 'center';
    ctx.fillText(storedText, (width/2), (height/3));
}

//Draw Chosen Chord Function
function drawChord() {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, width, (2*(height/3)) - 50);

    storeChord();
    drawText(currentChord);
}

//Starting Conditions
currentChord = chooseStartingChord();
drawText(currentChord);
console.log(currentChord);




//Chord Timing Variable and Function
let upperTimeLim = 6000
let lowerTimeLim = 12000

function timeChord() {
    drawChord();

    upperTimeLim -= (getRandomIntInclusive(70, 90));
    console.log('max chord time at ' + (upperTimeLim/1000) + ' seconds');

    lowerTimeLim -= (getRandomIntInclusive(55, 75));
    console.log('min chord time at ' + (lowerTimeLim/1000) + ' seconds');

    setTimeout(timeChord, (getRandomIntInclusive(upperTimeLim, lowerTimeLim)));
}




//Instructions Set
const playInstructions = ['Triplet melody', 'Ragtime stride piano', 'Octaves melody', 'Pedal point', 'Play below C4', 'Play above C4', 'Straight 8th feel', 'Only left hand', 'Only right hand', 'Only use index finger', 'Only use middle finger', 'Close eyes', 'Cross hands', 'Sing and play melody', '16th note melody', 'Turn head left', 'Turn head right', 'Loop up at sky', 'Beatbox while playing', 'Only play on off beats'];

//Choose Instruction Set Function
function chooseSet() {
    let setChosen = playInstructions[getRandomIntInclusive(0, playInstructions.length - 1)];
    return setChosen;
}

//Draw Text for Instructions Function
function drawInstruction(text) {
    let storedInstruction = text;
    console.log(storedInstruction);

    ctx.font = "200px arial";
    ctx.fillStyle = "white";
    ctx.textAlign = 'center';
    ctx.fillText(storedInstruction, (width/2), (2*(height/3)) + 100);
}

//Store Chosen Instruction Set Function
function storeSet(){
    currentInstruction = chooseSet();
}

//Draw Chosen Instruction Function
function drawSet() {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, (2*(height/3) - 50), width, height);

    storeSet();
    drawInstruction(currentInstruction);
}

//Instruction Timing Variable and Function
let upperTimeLimSet = 15000
let lowerTimeLimSet = 18000

function timeSet() {
    drawSet();

    upperTimeLimSet -= (getRandomIntInclusive(80, 100));
    console.log('max instruction time at ' + (upperTimeLimSet/1000) + ' seconds');

    lowerTimeLimSet -= (getRandomIntInclusive(85, 105));
    console.log('min instruction time at ' + (lowerTimeLimSet/1000) + ' seconds');

    setTimeout(timeSet, (getRandomIntInclusive(upperTimeLimSet, lowerTimeLimSet)));
}



//Set Delay Function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//execution
async function instSet () {
    await sleep(120000);
    console.log("Waited 120s for instruction set execution");

    timeSet();
}

instSet();
timeChord();