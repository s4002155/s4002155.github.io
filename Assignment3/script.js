// The biggest feature of my webpage is the use of scrolling and navigation.
// The story progresses through vertical scrolling, and the direction of the story can be changed through the navigation.
// The code for this is:

// As I was operating vertical scrolling and navigation on one page, I thought that the scroll function would work even though I had to move to the navigation, which could lead to things going differently than intended.
// To solve this, we registered a DOMContentLoaded event listener to temporarily stop scrolling.
// Creates a `IntersectionObserver` object `scrollObserver` to observe elements with the `.scroll` class, and when an element enters the screen (when `entry.isIntersecting` is true), I add the `no-scroll` class to `document.body`, which prevents scrolling.
// After 5 seconds, I removed the `no-scroll` class (via `setTimeout`) to enable scrolling again, allowing the story to progress again.
// 5 seconds is a set time to prevent accidentally scrolling more than necessary while scrolling.
document.addEventListener('DOMContentLoaded', function() {
    const scrollTargets = document.querySelectorAll('.scroll');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.body.classList.add('no-scroll');
                setTimeout(() => {
                    document.body.classList.remove('no-scroll');
                }, 5000);
            }
        });
    }, {
        root: null,
        threshold: [0, 1]
    });
 
    scrollTargets.forEach(target => {
        scrollObserver.observe(target);
    });
 
 
// 
    const stopTarget = document.getElementById('stop');
    const stopObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.body.classList.add('no-scroll');
                setTimeout(() => {
                    document.body.classList.remove('no-scroll');
                }, 3000);
            }
        });
    }, {
        root: null,
        threshold: [0, 1]
    });
 
    stopObserver.observe(stopTarget);
 });
 
 
//  This is a navigate code that allows you to move to the character description page for each character when you select a character.
 const koalaImg = document.getElementById('koala-img');
 koalaImg.addEventListener('click', function() {
    navigateTo('Koala.png', 'koala-page');
 });

 const platyImg = document.getElementById('platy-img');
 platyImg.addEventListener('click', function() {
    navigateTo('Platypus.png', 'platy-page');
 });
 
 function navigateTo(image, pageId) {
    const targetElement = document.getElementById(pageId);
    targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
    // If you look at the code to come, you can see that `block:' is different, and this is determined based on the optimized position of the part that appears on the screen for each image.
   
 }
 
 
//  This is the code for a button that allows you to reselect the selected character or play as that character.
// Each button will take you back to the character selection page to choose again, or take you to the beginning of the story for each character.
 const againBtn = document.querySelector('#again');
 againBtn.addEventListener('click', gotoCharacter);
 
 function gotoCharacter() {
    const targetElement = document.getElementById('character-page');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }

 const again2Btn = document.querySelector('#again2');
 again2Btn.addEventListener('click', gotoCharacter);
 
 
 function gotoCharacter() {
    const targetElement = document.getElementById('character-page');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 

document.addEventListener('DOMContentLoaded', function() {
    const chooseButton = document.querySelector('#choose');
    if (chooseButton) {
        chooseButton.addEventListener('click', gotoPrepare);
    }

    const return1Images = document.querySelectorAll('.return-img1');
    return1Images.forEach(image => {
        image.addEventListener('click', gotoPrepare);
    });

    function gotoPrepare() {
        const targetElement = document.getElementById('food-prepare');
        targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
    }
});
 
 document.addEventListener('DOMContentLoaded', function() {
    const choose2Button = document.querySelector('#choose2');
    if (choose2Button) {
        choose2Button.addEventListener('click', gotoInvitation);
    }

    const return4Images = document.querySelectorAll('.return-img4');
    return4Images.forEach(image => {
        image.addEventListener('click', gotoInvitation);
    });

    function gotoInvitation() {
        const targetElement = document.getElementById('invitation');
        targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
     }
});
 

//  From now on, this is the code for the option button that can change the direction of the story in earnest.
// To make it easier to distinguish, I wrote the koala and platypus parts separately and wrote down the comments for which options it is.
 // Koala part
 // option 1: Eucalyptus
 const eucalypBtn = document.querySelector('#Eucalyptus');
 eucalypBtn.addEventListener('click', gotoEucalyptus);
 
 
 function gotoEucalyptus() {
    const targetElement = document.getElementById('koala-food');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 // option 1a: Sorry
 const sorryBtn = document.querySelector('#sorry');
 sorryBtn.addEventListener('click', gotoApologize);
 
 
 function gotoApologize() {
    const targetElement = document.getElementById('apologiz');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 // option 1b: Angry
 const angryBtn = document.querySelector('#angry');
 angryBtn.addEventListener('click', gotoArgue);
 
 
 function gotoArgue() {
    const targetElement = document.getElementById('argue');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 
     // The return button to redo the selection was created in the same way.
     const return2Images = document.querySelectorAll('.return-img2');
     return2Images.forEach(image => {
         image.addEventListener('click', gobacktoKreact1);
     });
 
     function gobacktoKreact1() {
         const targetElement = document.getElementById('koala-react1');
         targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
     }
 
 // option 2: Platypus food
 const platyFoodBtn = document.querySelector('#platy-food');
 platyFoodBtn.addEventListener('click', gotoPlatyFood);
 
 
 function gotoPlatyFood() {
    const targetElement = document.getElementById('crayfish');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 // option 2a: Frankly
 const franklyBtn = document.querySelector('#frankly');
 franklyBtn.addEventListener('click', gotoActually);
 
 
 function gotoActually() {
    const targetElement = document.getElementById('actually');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 // option 2b: Say nothing
 const sayBtn = document.querySelector('#say');
 sayBtn.addEventListener('click', gotoNothing);
 
 
 function gotoNothing() {
    const targetElement = document.getElementById('nothing');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 
      const return3Images = document.querySelectorAll('.return-img3');
      return3Images.forEach(image => {
          image.addEventListener('click', gobacktoKreact2);
      });
  
      function gobacktoKreact2() {
          const targetElement = document.getElementById('koala-react2');
          targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
      }
 
 
 // Platypus part
 // option 1: Yes
 const yesBtn = document.querySelector('#yes');
 yesBtn.addEventListener('click', gotoYes);
 
 
 function gotoYes() {
    const targetElement = document.getElementById('wow');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }

 // option 1a: Excuse
 const excuseBtn = document.querySelector('#excuse');
 excuseBtn.addEventListener('click', gotoExcuse);
 
 
 function gotoExcuse() {
    const targetElement = document.getElementById('explain');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 // option 1b: Revenge
 const revengeBtn = document.querySelector('#revenge');
 revengeBtn.addEventListener('click', gotoRevenge);
 
 
 function gotoRevenge() {
    const targetElement = document.getElementById('what');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 
      const return5Images = document.querySelectorAll('.return-img5');
      return5Images.forEach(image => {
          image.addEventListener('click', gobacktoPreact1);
      });
  
      function gobacktoPreact1() {
          const targetElement = document.getElementById('Platy-react1');
          targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
      }
 
 // option 2: No
 const noBtn = document.querySelector('#no');
 noBtn.addEventListener('click', gotoNo);
 
 
 function gotoNo() {
    const targetElement = document.getElementById('no-thanks');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 // option 2a: Blame
 const blameBtn = document.querySelector('#blame');
 blameBtn.addEventListener('click', gotoBlame);
 
 
 function gotoBlame() {
    const targetElement = document.getElementById('taste-terrible');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
 }
 // option 2b: Alternative
 const alternativeBtn = document.querySelector('#alternative');
 alternativeBtn.addEventListener('click', gotoAternative);
 
 
 function gotoAternative() {
    const targetElement = document.getElementById('hang-out');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }

       const return6Images = document.querySelectorAll('.return-img6');
       return6Images.forEach(image => {
           image.addEventListener('click', gobacktoPreact2);
       });
   
       function gobacktoPreact2() {
           const targetElement = document.getElementById('Platy-react2');
           targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
       }



// In order to progress the story, I added code that automatically clicks buttons randomly in case the user is unable to select an option due to confusion.
// First, it observes each button in the buttons array and checks if a timer (`timers[groupName]`) for that group is already running.
// If not, it sets a timer (`setTimeout`) to call handleClick after 15 seconds.
// At this time, 15 seconds is a leisurely set time considering the situation in which the user directly selects the option and does not interfere with the user's choice.
// After executing handleClick, it resets the timer (`timers[groupName] = null`).
// And when a button leaves the viewport (`entry.isIntersecting` is `false`), clear any existing timer associated with that group (`clearTimeout`).
// This will run your code when the user clicks a button to go to the next page, avoiding the problem of them going back again.
       document.addEventListener('DOMContentLoaded', function() {
        const observerOptions = {
            root: null,
            threshold: 1.0
        };
    
        function handleClick(buttons) {
            const randomIndex = Math.floor(Math.random() * buttons.length);
            buttons[randomIndex].click();
        }
    
        let timers = {};
        function createObserver(buttons, groupName) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!timers[groupName]) {
                            timers[groupName] = setTimeout(() => {
                                handleClick(buttons);
                                timers[groupName] = null;
                            }, 15000);
                        }
                    } else {
                        if (timers[groupName]) {
                            clearTimeout(timers[groupName]);
                            timers[groupName] = null;
                        }
                    }
                });
            }, observerOptions);
    
            buttons.forEach(button => observer.observe(button));
        }

        const group1Buttons = document.querySelectorAll('#Eucalyptus, #platy-food');
        createObserver(group1Buttons, 'group1');

        const group2Buttons = document.querySelectorAll('#sorry, #angry');
        createObserver(group1Buttons, 'group2');
    
        const group3Buttons = document.querySelectorAll('#frankly, #say');
        createObserver(group1Buttons, 'group3');

        const group4Buttons = document.querySelectorAll('#yes, #no');
        createObserver(group1Buttons, 'group4');

        const group5Buttons = document.querySelectorAll('#excuse, #revenge');
        createObserver(group1Buttons, 'group5');

        const group6Buttons = document.querySelectorAll('#blame, #alternative');
        createObserver(group1Buttons, 'group6');

        const group7Buttons = document.querySelectorAll('#blame, #alternative');
        createObserver(group1Buttons, 'group7');
    });
    

// Ending message
// To display the ending, an ending message and a function to prevent scrolling have been added.
// Although it is hidden through the '.hidden' class, it gradually appears by adjusting the opacity on the ending screen.
// Additionally, to prevent scrolling at the ending, scrolling was controlled in a similar way to the above.
document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.hidden');
    const observerOptions1 = {
        root: null,
        threshold: 0.1
    };

    const observer1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('10% 이상 보임', entry.target);
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions1);

    hiddenElements.forEach(element => observer1.observe(element));

    const observerOptions2 = {
        root: null,
        threshold: 0.9 
    };

    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        });
    }, observerOptions2);

    hiddenElements.forEach(element => observer2.observe(element));
});

