let songIndex = 0;
let audioElement = new Audio('justinsongs/baby.mp3');
// console.log("song selected");
let masterPlay = document.getElementById('masterPlay');
// console.log(masterplay);
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Baby", filePath: "justinsongs/baby.mp3", coverPath: "justincovers/baby.jpg"},
    {songName: "Boy Friend", filePath: "justinsongs/boyfriend.mp3", coverPath: "justincovers/boyfriend.jpg"},
    {songName: "Company", filePath: "justinsongs/company.mp3", coverPath: "justincovers/company.jpg"},
    {songName: "Intention", filePath: "justinsongs/intention.mp3", coverPath: "justincovers/intention.jpg"},
    {songName: "Let Me Love You", filePath: "justinsongs/letmeloveyou.mp3", coverPath: "justincovers/letmeloveyou.jpg"},
    {songName: "One Time", filePath: "justinsongs/onetime.mp3", coverPath: "justincovers/onetime.jpg"},
    {songName: "Sorry", filePath: "justinsongs/sorry.mp3", coverPath: "justincovers/sorry.jpg"},
    {songName: "Stay", filePath: "justinsongs/stay.mp3", coverPath: "justincovers/stay.jpg"},
    {songName: "What Do You Mean", filePath: "justinsongs/whatdoyoumean.mp3", coverPath: "justincovers/whatdoyoumean.jpg"},
    {songName: "Where Are You Now", filePath: "justinsongs/whereareyounow.mp3", coverPath: "justincovers/whereareyounow.jpg"},
];

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    // console.log(element.getElementsByTagName('img')[0].src);
    // console.log(getElementsByClassName("songName")[0].innerText);
});
 

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log("ok");
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    // console.log("next");    
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    // audioElement.src = `justinsongs/${songIndex+1}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    console.log(audioElement.src);
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

});

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    // audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});