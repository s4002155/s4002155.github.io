// I decided to create the code for the 'music album player', the 6th option among the contexts specified in Assignment2 for Browser-based Interactive Experiments. The existing website design was a 'video art player' and did not have appropriate visual elements for music albums. That's why I decided to create the objects needed for the music album using Adobe Illustrator and use them as visual elements for the media player. I designed it with inspiration from LP players because I thought it would be a good way to visually express that music is playing if there were moving elements like a video art player when playing music.

// To achieve this, I decided to configure the screen and write code by dividing it into three parts, including the music album cover, the design for each music, and the design when playing the music. I also decided to write code using the scroll event as the main function to effectively split these three parts and place them on the screen.

// But I lacked code knowledge about scroll events. So, in order to utilize the scroll event, I wrote code by referring to external code. First of all, the first external code referenced is 'How to fade elements in and out when scrolling'. When moving from the music album cover of the music album player to the music-specific design, I wanted to use the fade-in/out method to create the same effect as moving from one screen to another. At this time, the music album cover part will be the first part of the overall composition and will be the home screen, and the design for each music will be the second part, which is the playlist part where you select the music to play. Here's the source code for the external code I referenced:
// https://www.winterwind.com/tutorials/css/30

function scrollEventHandler() {
    let num = window.scrollY / window.innerHeight;
    
    document.getElementById('filler').style.display = 'none';

    if (num <= 1) {
        let opacityOne = 1 - num;
        document.getElementById('one').style.opacity = opacityOne;
        document.getElementById('two').style.opacity = 0;
        let x = (1 - num) * 2;
        document.getElementById('one').style.transform = 'translate3d(0px,' + x + '%,0px) scale(1,1)';
    } else if (num > 1 && num <= 2) {
        let opacityTwo = num - 0.4;
        let opacityOne = 0;
        document.getElementById('one').style.opacity = opacityOne;
        document.getElementById('two').style.opacity = opacityTwo;
        let x = (num - 1.5) * 25 * -1.5 - 4; // 오른쪽에서 왼쪽으로 움직이도록 x 값을 설정
        let scaleTwo = 1.1 - (num - 1) * 0.45;
        document.getElementById('two').style.transform = 'translate3d(' + x + '%,0px,0px) scale(' + scaleTwo + ',' + scaleTwo + ')';
    } else {
        document.getElementById('one').style.opacity = 0;
        document.getElementById('two').style.opacity = 1;
        document.getElementById('two').style.transform = 'translate3d(0%,0px,0px) scale(1,1)';   
    }

    // By applying this code, I wrote a code that changes the transparency of the 'three' element and displays the element when it reaches the bottom of the page. The 'three' element is the playlist part of the music, and is an element that creates a grid for each music album so that user can select the music to play. This is to display it when scrolling moves to the bottom, that is, moves to the playlist section. I wrote code to calculate the bottom position of the screen the user is looking at using window.innerHeight + window.scrollY(sum of the current scrolled distance from the top of the viewport) and use it with document.body.offsetHeight(end of page) to check whether the user has reached the end of the page. This allows to adjust the transparency of the 'three' element, showing the three element when user reach the end of the page, hiding it otherwise.

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById('three').style.opacity = 1;
    } else {
        document.getElementById('three').style.opacity = 0;
    }
}

// This code clears the scroll event to move to the page that plays music from the playlist. I configured it so that when you click on the music LP selected in the playlist, you will be taken to a page where you can play the music. To make this happen, I decided to add a click event listener to the 'three' element to tidy up the screen so I could navigate to a page where I could play music. Through the click event listener, I set the transparency of the 'one' and 'two' elements to 0 to hide them, scrolled the page to the top, and removed the scroll event listener from the window object so that the scrollEventHandler function is no longer called. I also adjusted the height of the page by hiding the 'header' element and setting the page height to 'auto' after 0.5 seconds to prevent the page from scrolling any further. So when the user clicks on the 'three' element, I perform a series of actions that hide the 'one' and 'two' elements, scroll the page to the top, remove the scroll event handler, hide the header element, and adjust the page height. Through this, by initializing the screen objects, I configured the screen layout for music playback.

window.addEventListener('scroll', scrollEventHandler);

document.getElementById('three').addEventListener('click', function() {
    document.getElementById('one').style.opacity = 0;
    document.getElementById('two').style.opacity = 0;

    window.scrollTo(0, 0);
    window.removeEventListener('scroll', scrollEventHandler);

    document.getElementById('header').style.display = 'none';

    setTimeout(function() {
        document.body.style.height = 'auto';
    }, 500);

});


//---------------------------------------------------------------------------------------------------------------------------------------
// Music playlist horizontal scrolling code

// Before playing music in earnest, I decided to create a playlist section where users can check the tracklist of music albums and select music to play. Taking design issues into consideration, the method I chose is to check music LPs by scrolling horizontally. To implement horizontal scrolling, I referenced external code. Here is the code I referenced:
// https://codepen.io/toddwebdev/pen/yExKoj

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});


// After solving the functional problem through horizontal scrolling, I also considered the design problem. In order to clearly indicate the music the user wants to play, I decided to limit the number of music LPs displayed on the screen in the playlist slider to three and enlarge the central image so that the user can implicitly check if it is the music they want to play. To implement this, it can be executed through the image size adjustment function and scroll event listener. A description of each function is as follows:

// image size adjustment function
// To find the center image, I first used the Element.getBoundingClientRect() method, which returns a DOMRect object that provides information about the size of the element and its position relative to the viewport. Through this, I retrieved the position and size information of the 'slider' element and then calculated the center coordinates of the slider. Then, to find the image closest to the center of the slider, I calculated the distance between the center coordinates of the slider and the center coordinates of each image, found the image with the smallest distance, and set it as the center image. Also, iterate over all images with class '.item' to compare the difference between the center X coordinate of each image and the center set to the current image. Through this code, I wrote code to find the image in the center of the slider and center that image, giving the effect that the center image changes every time the user scrolls the slider.

const items = document.querySelectorAll('.item');

const resizeItems = () => {
  const sliderRect = slider.getBoundingClientRect();
  const centerX = sliderRect.left + sliderRect.width / 2;
  let minDiff = Infinity;
  let centerItem = null;

  items.forEach(item => {
    const { left, width } = item.getBoundingClientRect();
    const itemCenterX = left + width / 2;
    const diff = Math.abs(centerX - itemCenterX);

    if (diff < minDiff) {
      minDiff = diff;
      centerItem = item;
    }
    item.classList.remove('center-item');
  });

  if (centerItem) {
    centerItem.classList.add('center-item');
  }
};

// scroll event listener
// Second, I attempted to use a scroll event listener to handle the event that occurs each time the user scrolls the slider. This code will resize the image every time the slider scrolls, check the center image, and enlarge the center image.

// In addition, it felt like there was a lack of content as there were only 4 songs. To solve this, I wrote code to move the slider's scroll position back to the left when it reaches the right end, so that it appears as if there are infinite music LPs. This allows the user to scroll back to the beginning even after scrolling to the end.

slider.addEventListener('scroll', () => {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
    slider.scrollLeft = 0;
  }
});

slider.addEventListener('scroll', resizeItems);

// As an initialization step, call the resizeItems() function when the page loads.

resizeItems();

// Code like this ensures that users always see a consistent display every time they load the page or scroll the slider.

//-------------------------------------------------------------------------------------------------------------------------------------
// Code for music playback screen layout

// This is full-fledged code for playing music. As it uses the LP design, various animations were used to make it look like an LP player when music is playing. To implement this, a specific action was implemented to occur every time an image was clicked, and an attempt was made to provide visual effects by playing audio and changing the image. This part can be broadly divided into three parts. It can be divided into the click event part that is added to each image, the part that changes the text and image to match the audio through the index, and the audio progress bar part. A detailed explanation of each partial code is as follows:

const images = ['Water LP.png', 'Hes LP.png', 'Dry LP.png', 'Leapt.png', 'Water LP.png']; // 새 이미지 파일 경로
const audioFiles = ['p-hase_Water-Feature.mp3', 'p-hase_Hes.mp3', 'p-hase_Dry-Down-feat-Ben-Snaath.mp3', 'p-hase_Leapt.mp3', 'p-hase_Water-Feature.mp3']
const texts = ['Water Feature', 'Hes', 'Dry Down feat Ben Snaath', 'Leapt', 'Water Feature'];

let audio = new Audio(audioFiles[0]);

// This is a code that slightly modified the ProgressBar code of the existing media player to fit my code.

function updateProgressBar(audio) {
  const progressBar = document.querySelector("#progress-bar");
  const progressBarFill = document.querySelector("#progress-bar-fill");
  const audioControls = document.querySelector(".audio-controls");

  // I often used style.display = "block" in this part because I wanted all content related to music playback, including the ProgressBar, to be hidden and appear together when the music playback page is displayed.
  
  progressBar.style.display = "block";
  audioControls.style.display = "block";

  audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBarFill.style.width = progress + "%";
  });
}

//I wrote a function to change the title and image so that the music title and music LP can change together depending on the music. I wrote code to receive each 'index' and change the text and image of that index.

function changeTextAndImg(index) {
  const titleElement = document.querySelector(".song-title");
  titleElement.textContent = texts[index];

  const centerItem = document.querySelector('.new-image');
  if (centerItem) {
    centerItem.src = images[index];
  }
}

// This is the code part that is responsible for the biggest function of the music playback part. Since it contains many functions, I will explain it by adding comments to each code. First of all, this code part adds a click event to each LP in the 'three' element, which was the playlist part, so that the song for that LP can be played.

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    
    // I set style.display = 'none' to hide the slider when an LP is clicked so that only the new image added for the clicked LP is visible.
    
    slider.style.display = 'none';

    // I then wrote code to create a new image corresponding to the clicked LP and display it on the screen. Through 'newImage.src = images[index];' , implemented to retrieve the image path corresponding to the index from the images array and display the image corresponding to the clicked image. I also added an animation so that a transition effect appears after 10 milliseconds, allowing to move naturally to the music playback screen. (Transition effects are written in CSS.)
    
    const newImageContainer = document.createElement('div');
    newImageContainer.classList.add('new-image-container');

    const newImage = document.createElement('img');
    newImage.src = images[index];
    newImage.classList.add('new-image');
    newImageContainer.appendChild(newImage);

    document.body.appendChild(newImageContainer);

    setTimeout(() => {
      newImageContainer.classList.add('animate');
    }, 10); 


    // In a similar way, an image representing the tonearm part of an LP player was added.
    
    setTimeout(() => {
      const newImage2 = document.createElement('img');
      newImage2.src = 'bar.png';
      newImage2.classList.add('new-image7');
      document.body.appendChild(newImage2);

      setTimeout(() => {
        newImage2.classList.add('animate');
      }, 10);
      
      // A rotation animation was set to represent music playing when the LP player's tone arm is placed in a designated position. At this time, in order to match the timing with the tone arm animation, it was set to run after 5 seconds.
      
      setTimeout(() => {
        newImage.style.animation = "spin 10s linear infinite"; 
      }, 5000); 

      // Likewise, I wrote code to change the text and image according to the index by setting the time and calling the changeTextAndImg(index) function.
      
      setTimeout(() => {
        changeTextAndImg(index);
      }, 5000);

      // Call the updateProgressBar function to update the progress bar that displays the progress of the audio.
      
      updateProgressBar(audio);
    }, 2500);
  });
});

//---------------------------------------------------------------------------------------
// Navigation Section to the Music

// I set up navigation to go to the Music part through HTML, but it didn't work, so I added code to implement navigation through JavaScript.

// This code works when user click on the third list item 'Music' in the navigation. The navigation I wanted was to move to the point where '.new-image' was added by clicking on the LP image of the song I wanted to play when I clicked 'Music'. To implement this, I wrote code to force the first element of '.item' to be clicked and called when 'Music' is clicked. This creates the same effect as clicking the LP image on the playlist page and moving to the point where '.new-image' is added. Additionally, to prevent the image from loading again when 'Music' is clicked again, code was written so that the click event is processed only once through '{ once: true }' and is automatically removed thereafter.

const musicNavItem = document.querySelector('nav ul li:nth-child(3) a');
musicNavItem.addEventListener('click', function(event) {
    event.preventDefault();
    const firstItem = document.querySelector('.item');
    firstItem.click();
}, {
  once: true
});

// That is, this code is implemented so that when the third navigation link is clicked, the first item in the image file is clicked, and the click event listener for that navigation link is executed only once.

//---------------------------------------------------------------------------------------
// Code for the button to go to the previous song

const skipToStartButton = document.querySelector("#skip-to-start-button");
skipToStartButton.addEventListener("click", skipToPreviousAudio);

function skipToPreviousAudio() {

  // This code is for finding the index of the currently playing audio file. Find the index of the current audio file name in the audioFiles array via audioFiles.indexOf() and store the index of the currently playing audio file in 'currentIndex'.
  
  const currentIndex = audioFiles.indexOf(audio.src.split('/').pop());
  
  // Then, it calculates the index of the previous song so that when the button is clicked, the audio corresponding to the previous index of the currently playing audio will be played.
  
  const previousIndex = (currentIndex - 1 + audioFiles.length) % audioFiles.length;
  
  audio.src = audioFiles[previousIndex];
  audio.play();

  // Called the changeTextAndImg() function so that the music title and LP image can change according to the changed audio, so that can be changed to the text and image for the music.
  
  changeTextAndImg(previousIndex);
}

//---------------------------------------------------------------------------------------
// Code for button to rewind audio

// Press the button to rewind the audio playback to 20 seconds ago. If the current playback position is longer than 20 seconds, the audio playback position is moved back 20 seconds. If the current playback position is less than 20 seconds, the audio playback position is moved to the beginning. This allows users to easily rewind audio playback.

const rewindButton = document.querySelector("#rewind-button")
rewindButton.addEventListener("click", rewindAudio);

function rewindAudio() {
  if (audio.currentTime >= 20) {
    audio.currentTime -= 20;
  } else {
    audio.currentTime = 0;
  }
}

//---------------------------------------------------------------------------------------
// Code for buttons to play or pause audio

// Checks whether the audio is currently paused or has finished playing, and if the audio is paused or has finished playing, changes the icon and plays or pauses the audio when the button is clicked. This means that whenever the user clicks the play/pause button, it toggles the playback state of the audio and updates the button's icon to match the current state.

const playPauseButton = document.querySelector("#play-pause-button");
playPauseButton.addEventListener("click", toggleAudio);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function toggleAudio() {
  if (audio.paused || audio.ended) {
    playPauseImg.src = "https://img.icons8.com/?size=100&id=pSwquXkxwLD8&format=png&color=000000";
    audio.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/?size=100&id=TlSnjmNzYgKT&format=png&color=000000";
    audio.pause();
  }
}

//---------------------------------------------------------------------------------------
// Code for a button to fast forward audio

// Contrary to the Rewind button, clicking this button moves the audio playback position forward by 20 seconds.

const fastForwardButton = document.querySelector("#fast-forward-button");
fastForwardButton.addEventListener("click", fastForwardAudio);

function fastForwardAudio() {
  if (audio.currentTime + 20 <= audio.duration) {
    audio.currentTime += 20;
  } else {
    audio.currentTime = audio.duration;
  }
}

//---------------------------------------------------------------------------------------
// Code for button to play next song

// Contrary to the button that plays the previous song, clicking this button calculates the index of the audio file and plays the audio corresponding to the next index of the currently playing audio file.

const endButton = document.querySelector("#end-button");
endButton.addEventListener("click", skipToNextAudio);

function skipToNextAudio() {
  const currentIndex = audioFiles.indexOf(audio.src.split('/').pop());

  const nextIndex = (currentIndex + 1) % audioFiles.length;
  audio.src = audioFiles[nextIndex];
  audio.play();

  changeTextAndImg(nextIndex);
}
