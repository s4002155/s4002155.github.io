document.addEventListener('DOMContentLoaded', function() {
    const scrollTargets = document.querySelectorAll('.scroll');
 
 
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.body.classList.add('no-scroll');
                setTimeout(() => {
                    document.body.classList.remove('no-scroll');
                }, 5000); // 5초 동안 스크롤 멈춤
            }
        });
    }, {
        root: null,
        threshold: [0, 1]
    });
 
 
    scrollTargets.forEach(target => {
        scrollObserver.observe(target);
    });
 
 
    const stopTarget = document.getElementById('stop');
 
 
    const stopObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.body.classList.add('no-scroll');
                setTimeout(() => {
                    document.body.classList.remove('no-scroll');
                }, 3000); // 3초 동안 스크롤 멈춤
            }
        });
    }, {
        root: null,
        threshold: [0, 1]
    });
 
 
    stopObserver.observe(stopTarget);
 });
 
 
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
   
 }
 
 
 
 
 const againBtn = document.querySelector('#again');
 againBtn.addEventListener('click', gotoCharacter);
 
 
 function gotoCharacter() {
    const targetElement = document.getElementById('character-page');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 
 
 const chooseBtn = document.querySelector('#choose');
 chooseBtn.addEventListener('click', gotoPrepare);
 
 
 function gotoPrepare() {
    const targetElement = document.getElementById('food-prepare');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
 }
 
 
 
 
 const again2Btn = document.querySelector('#again2');
 again2Btn.addEventListener('click', gotoCharacter);
 
 
 function gotoCharacter() {
    const targetElement = document.getElementById('character-page');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' });
 }
 
 
 const choose2Btn = document.querySelector('#choose2');
 choose2Btn.addEventListener('click', gotoInvitation);
 
 
 function gotoInvitation() {
    const targetElement = document.getElementById('invitation');
    targetElement.scrollIntoView({ behavior: 'auto', block: 'end' });
 }
 
 
 
 
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
 