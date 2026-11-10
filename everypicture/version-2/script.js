( function(){
    "use strict";
    console.log('reading JS');

    const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
    const slide = document.querySelector('#myimage')

    let currentImage = 0;

    document.querySelector('#next').addEventListener('click', nextPhoto);
    document.querySelector('#previous').addEventListener('click', prevPhoto);

    document.querySelector('.open').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';

        document.querySelector('header h1').textContent = "If Temples Could Talk"; 
    });

    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'hidden';

        document.querySelector('header h1').textContent = "Fever Dreams"; 
    });

    document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
            document.querySelector('#overlay').className = 'hidden';
            document.querySelector('header h1').textContent = "Fever Dreams"; 
        }
    });

    function nextPhoto(){
        currentImage++;
        if(currentImage > images.length-1){
            currentImage = 0;
        }
        slide.src = `images/${images[currentImage]}`;
    }

    function prevPhoto(){
        currentImage--;
        if(currentImage < 0){
            currentImage = images.length-1;
        }
        slide.src = `images/${images[currentImage]}`;
    }

    const narrativeSteps = [
        "This land belonged to the Ancient group of Maya who spoke Ch'olan, here they adored Xibalba, the god of the underworld.",
        "Many of the stone walls here were used for rituals or storytelling, much history lies atop this soil.",
        "This area was also borrowed at some point to film the movie Star Wars Episode IV, used to depict a foreign planet."
    ];

    
    const templeArea = document.querySelector('#temple-area');
    let narrativeBox = document.querySelector('#narrative-box');

    if (!narrativeBox) {
        narrativeBox = document.createElement('div');
        narrativeBox.id = 'narrative-box';
        document.querySelector('#overlay article').appendChild(narrativeBox);
    }

    let currentNarrative = 0;

    let narrativeTriggered = false;

    templeArea.addEventListener('mouseenter', function() {
        if (!narrativeTriggered) {
            narrativeTriggered = true;
            narrativeBox.textContent = narrativeSteps[currentNarrative];
            narrativeBox.style.display = 'block';

            currentNarrative++;

            if (currentNarrative >= narrativeSteps.length) {
                currentNarrative = 0;
            }
        }
    });

    templeArea.addEventListener('mouseleave', function() {
        narrativeTriggered = false;
        narrativeBox.style.display = 'none';
    });
})();