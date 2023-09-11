

// audio variables
var playBtn = document.querySelector('.track-playIcon')
var audio = document.querySelector('.track-audio')
var progressbar = document.querySelector('.progressbar')
var progressbarContainer = document.querySelector('.progressbar-container')
var volumeBtn = document.querySelector('.volume-btn')
var volumeIcon = document.querySelector('.volume-icon')

//closest('.musicPlay-content')        

// playSong function
function playSong () {
    playBtn.classList.remove('fa-play-circle')
    playBtn.classList.add('fa-pause-circle')
    audio.play()
}

// pauseSong function
function pauseSong () {
    playBtn.classList.add('fa-play-circle')
    playBtn.classList.remove('fa-pause-circle')
    audio.pause()
}

// muteSong function 
function muteSong () {
    volumeIcon.classList.add('fa-volume-mute')
    volumeIcon.classList.remove('fa-volume-up')
    audio.muted = true
}

// unmuteSong function  
function unmuteSong () {
    volumeIcon.classList.add('fa-volume-up')
    volumeIcon.classList.remove('fa-volume-mute')
    audio.muted = false
}

audio.addEventListener('ended', function () {
    // progress width back to zero
    progressbar.style.width = '0%'
    // play icon added back and pause icon removed
    playBtn.classList.remove('fa-pause-circle')
    playBtn.classList.add('fa-play-circle')
    // reset play count
    playCount = 0;
})

// play | pause
var playCount = 0;
playBtn.addEventListener('click', function () {
    if (playCount == 0) {
        playSong ()
        playCount = 1;
    }
    else {
        pauseSong ()
        playCount = 0;
    }
})

// mute | unmute
var muteCount = 0;
volumeBtn.addEventListener('click', function () {
    if (muteCount == 0) {
        muteSong ()
        muteCount = 1;
    }
    else {
        unmuteSong ()
        muteCount = 0;
    }
})

// time variables
var timeNow = document.querySelector('.current-playTime')
var totalPlayTime = document.querySelector('.total-playTime')
// set total duration
totalPlayTime.innerHTML = audioCurrentTime(audio.duration)

// progressbar 
function progressWidth () {
    var progress_Width = (audio.currentTime / audio.duration) * 100
    return progress_Width
}

audio.addEventListener('timeupdate', function (e) {
    progressbar.style.width = `${progressWidth()}%`

    // set current time
    timeNow.innerHTML = audioCurrentTime(audio.currentTime)
})

// progressbarContainer
progressbarContainer.addEventListener('click', function (e) {
    var width = this.clientWidth
    var clickedX = e.offsetX
    var playtime = audio.duration

    audio.currentTime = (clickedX / width) * playtime
})

// add volume
var volumeContainer = document.querySelector('.volumebar-container')
var volumebar = document.querySelector('.volumebar')

var vol = 1
volumeContainer.addEventListener('click', function (e) {
    var width = this.clientWidth
    var clickedX = e.offsetX

    var vol = (clickedX / width)
    audio.volume = vol
    console.log(vol)
    volumebar.style.width = `${vol*100}%`
})


function audioCurrentTime (sec) {
    var timeInSeconds = parseInt(sec, 10)
    var time = 'failed to load'

    var hours = Math.floor(timeInSeconds / 3600)
    var minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60)
    var seconds = timeInSeconds - (hours * 3600) - (minutes * 60)

    if (hours   < 10) {hours   = '0' + hours}
    if (minutes < 10) {minutes = '0' + minutes}
    if (seconds < 10) {seconds = '0' + seconds}
    
    if (hours != 0) {
        time = hours + ':' + minutes + ':' + seconds
    }
    else {
        time = minutes + ':' + seconds
    }

    return time
}