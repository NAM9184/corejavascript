function earth(){
    let water = true;


    let apple = {
        founder: 'steve Jobs',
        ceo : 'Tim Cook',
        porduct : ['iphone']
    }

    return function(value){
        water = value;
    }
}


const UFO = earth();


UFO(0);


// ======================================================================
const First = document.querySelector('.first');

const handleClick = (()=>{
    let istCliked = false;

    return () => {

        if(!istCliked){

            document.body.style.background = 'orange';

        } else{

            document.body.style.background = 'white';
        }
    
        istCliked = !istCliked;

    }
})();


First.addEventListener('click', handleClick)



function useState(initValue){
    let value = initValue;

    function read(){
        return value
    }

    function write(newValue){
        value = newValue;
    }

    return[read, write];
}




const [state, setState] = useState(111);

