/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');
// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

// const remove = bindeEvent('.first','click', handler);

// getNode('.deletebutton').addEventListener('click', remove);

// 실행을 하지 않는다 즉 () 를 포함하여 작성하지 않는다 실행한 결과값이 먼저 담기기 때문에....

// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener



const ground = getNode('.ground');
const ball = getNode('#ball');


function handleBall({offsetX:x , offsetY:y }){
    // const {offsetX: x, offsetY: y} = e;

    console.log(x, y);
    ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px, ${y - (ball.offsetHeight / 2)}px)`
}


ground.addEventListener('click', handleBall)


// throttle , debounce

//  이벤트를 내가 원하는 시점에 1번만 실행 | 원하는 시간에 맞춰 실행



// 어려울 수 있음

function debounce(callback, limit){
    let timeout;
    return function(){
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            callback()
        }, limit);
    }
    // setTimeout은 타이머넘버, 아이디값이 반환된다.
}

function handle(){
    console.log('event');
}


ground.addEventListener('mousemove' , debounce(()=>{
    console.log('event!');
},1000))

// debounce(()=>{
//     console.log('실행!');
// },1000)



// callback , closure, IIFE , call , apply


function throttle(callback, limit = 100){

    let waiting = false;
    return function(e){
        if(!waiting){
            callback.apply(this,e);
            waiting = true;
            
            setTimeout(() => {
                waiting = false;
            }, limit);
        }
    }

}

ground.addEventListener('mousemove',throttle(handle, 2000));



























































