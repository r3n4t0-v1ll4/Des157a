( function(){
    'use strict';
    console.log('reading JS');

    const form = document.querySelector('#madlib-form');
    const madlib = document.querySelector('#madlib');

    form.addEventListener( 'submit', function(event){
        event.preventDefault();
        const firstName = document.querySelector('#firstName').value;
        const verbing1 = document.querySelector('#verb-ing1').value;
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const adj3 = document.querySelector('#adj3').value;
        const verbing2 = document.querySelector('#verb-ing2').value;
        const obj1 = document.querySelector('#obj1').value;
        const place1 = document.querySelector('#place1').value;
        const adj4 = document.querySelector('#adj4').value;
        const food = document.querySelector('#food').value;
        const adj5 = document.querySelector('#adj5').value;

        let myText;

        if(firstName == ' '){
            myText = 'Please provide your name!';
            document.querySelector('#firstName').focus();
        } 
        else if (verbing1 == ' '){
            myText = 'Please provide a verb ending in -ing';
            document.querySelector('#verb-ing1').focus();
        } 
        else if (adj1 == ' '){
            myText = 'Please provide an adjective';
            document.querySelector('#adj1').focus();
        } 
        else if (adj2 == ' '){
            myText = 'Please provide a second adjective';
            document.querySelector('#adj2').focus();
        }
        else if (adj3 == ' '){
            myText = 'Please provide a third adjective';
            document.querySelector('#adj3').focus();
        }
        else if (verbing2 == ' '){
            myText = 'Please provide another verb ending in -ing';
            document.querySelector('#verb-ing2').focus();
        }
        else if (obj1 == ' '){
            myText = 'Please provide an object';
            document.querySelector('#obj1').focus();
        }
        else if (place1 == ' '){
            myText = 'Please provide a place name';
            document.querySelector('#place1').focus();
        }
        else if (adj4 == ' '){
            myText = 'Please provide a fourth adjective';
            document.querySelector('#adj4').focus();
        }
        else if (food == ' '){
            myText = 'Please provide a dish name';
            document.querySelector('#food').focus();
        }
        else if (adj5 == ' '){
            myText = 'Please provide a fifth adjective';
            document.querySelector('#adj5').focus();
        }
        else {
            myText = `After ${verbing1}, ${firstName} decided to travel alone to Guatemala. As soon as they arrived they were amazed by the ${adj1} landscape and ${adj2} streets. On their first morning, they woke up ${adj3} and decided to explore the local market. While ${verbing2}, they accidentally bought a ${obj1} from a friendly vendor. Later that day, they joined a bus headed toward ${place1}. The ride was exciting as well as ${adj4}. By sunset, they were sitting somewhere beautiful, eating ${food} and realizing traveling alone had turned out to be a(n) ${adj5} experience!`;
            document.querySelector('#firstName').value = " ";
            document.querySelector('#verb-ing1').value = " ";
            document.querySelector('#adj1').value = " ";
            document.querySelector('#adj2').value = " ";
            document.querySelector('#adj3').value = " ";
            document.querySelector('#verb-ing2').value = " ";
            document.querySelector('#obj1').value = " ";
            document.querySelector('#place1').value = " ";
            document.querySelector('#adj4').value = " ";
            document.querySelector('#food').value = " ";
            document.querySelector('#adj5').value = " ";
        }

        madlib.innerHTML = myText;

        document.querySelector('#overlay').className = "showing"
    } );

    document.addEventListener('keydown', function(event){
        if (event.key === "Escape"){
            document.querySelector('#overlay').className = "hidden"
        }
    });
} )();