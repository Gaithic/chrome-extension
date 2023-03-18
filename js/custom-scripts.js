const colorPicker = document.querySelector('#color_picker');
const screenRecorder = document.querySelector('#screen_recorder');
const snippingTool = document.querySelector('#snipping_tool');
const clearCahche = document.querySelector('#cache_clear');
const blockAds = document.querySelector('#block_ads');
const allGadgets = document.getElementById('all-gadgets');
const container = document.createElement('div');
container.id = "container";
allGadgets.appendChild(container);
let createStartButton = document.createElement('button');
// createStartButton.innerHTML = "Start";
// createStartButton.id = "start"
// let createPauseButton  = document.createElement('button')
// createPauseButton.innerHTML = "Puase";
// createPauseButton.id = "pause";
// let createStopButton  = document.createElement('button')
// createStopButton.id = "stop";
// createStopButton.innerHTML = "Stop";
container.appendChild(createStartButton);
colorPicker.addEventListener('click', () => {

    // document.getElementById('all-gadgets').style.display = "block";
    // document.getElementById('all-gadgets').append(container);
    // const penElement = document.createElement("p");
    // penElement.innerHtml = "https://cdn-icons-png.flaticon.com/512/1860/1860115.png";
    // document.getElementById('all-gadgets').appendChild(penElement);
});

//start stop and record screen recording
screenRecorder.addEventListener('click', () => {
    alert("hello"); 
});

//cut, crop and copy the broswer(snipping tool functionality)
snippingTool.addEventListener('click', () => {
    alert("hello"); 
});

//clear chrome  browser cache
clearCahche.addEventListener('click', () => {
    alert("hello"); 
});

//block youtube ads
blockAds.addEventListener('click', () => {
    alert("hello"); 
});

