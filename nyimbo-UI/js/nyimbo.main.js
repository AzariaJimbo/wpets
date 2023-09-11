$(function() {
    // variables
    var filterBtn = $('.filter')
    // music filter 
    filterBtn.click((e) => {
        filterBtn.removeClass('active')
        $(e.target).addClass('active')
    })

    // initialize audio
    var audio = $('audio')
    audio.audioPlayer();
    
    // pause currently playing audio
    document.addEventListener('play', (e) => {
        var audios = document.getElementsByTagName('audio')
        for (var i=0; i < audios.length; i++) {
            if (audios[i] != e.target) {
                audios[i].pause()
            }
        }

    }, true)  


    var like_count = 0;
    $('.like-btn').click((e) => {
        var like;

        if (like_count == 0) {
            like = 1;
            like_count = 1;
            $(e.target).addClass('liked')
        } else {
            like = -1;
            like_count = 0;
            $(e.target).removeClass('liked')
        }

        console.log(like)
        $.ajax({
            method: "POST",
            url: "musicActions",
            data: {like},
            success: function (data) {
                console.log(data)
            }
        })
    })   
});

// search-btn control
var searchBtn = document.querySelector('.search-btn');
var searchBar = document.querySelector('.search-bar');
var searchBox = document.querySelector('.search-Box');
var searchForm = document.querySelector('.search-form');
var searchIcon = document.querySelector('.fas');

searchBtn.addEventListener('click', function () {
    searchBar.classList.toggle('active')

    if (searchBar.classList.contains('active')){
        searchForm.classList.add('show')
        searchIcon.classList.add('fa-times')
        searchIcon.classList.remove('fa-search')
    }
    else
    {
        searchForm.classList.remove('show')
        searchIcon.classList.remove('fa-times')
        searchIcon.classList.add('fa-search')
    }
})

// header color change
var header = document.querySelector(".header")
window.onscroll = function () {
    var top = window.scrollY;
    if (top > 95) {
        header.classList.add("active-header")
    }
    else {
        header.classList.remove('active-header')
    }
}

// hero text
var typed_text = new Typed('.typed_text', {
    strings: ['Find your favourite <br>music'],
    typeSpeed: 100,
    backSpeed: 20,
    fadeOut: false,
    loop: true
});