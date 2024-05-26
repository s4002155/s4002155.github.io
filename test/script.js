// https://www.winterwind.com/tutorials/css/30

window.addEventListener('scroll', function() {
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
        let x = (num - 1.5) * 25 * -1.5 -5; // 오른쪽에서 왼쪽으로 움직이도록 x 값을 설정
        let scaleTwo = 1.1 - (num - 1) * 0.5;
        document.getElementById('two').style.transform = 'translate3d(' + x + '%,0px,0px) scale(' + scaleTwo + ',' + scaleTwo + ')';
    } else {
        document.getElementById('one').style.opacity = 0;
        document.getElementById('two').style.opacity = 1;
        document.getElementById('two').style.transform = 'translate3d(0%,0px,0px) scale(1,1)';
        
    }
});
