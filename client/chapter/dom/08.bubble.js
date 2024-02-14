/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p  = getNode('p');

section.addEventListener('click',(e) => {
    // 화살표 함수상태이기 때문에 그냥 this는 window다
    // 그렇기 때문에 e.target으로 첫번째 마주하는 마우스대상을 e.target으로 지정해보았다.
    console.log(this === e.currentarget);
    // console.log('%c section', 'color: orange');
})
// section.addEventListener('click',() => {
//     console.log('%c article', 'color: dodgerblue');
// })
// section.addEventListener('click',() => {
//     console.log('%c p', 'color: hotpink');
// })


/* 캡처링 ----------------------------------------------------------------- */