import { getNode } from "../../lib";


/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */


const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log(first.className); // getter
// first.className = 'fff' // setter
// first.calssName = '' // 전체삭제
 
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('hello');
first.classList.remove('hello');


// console.log( first.classList.contain('hello'))



/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장
first.style.cssText =  `
    display: flex;
    margin: 10;
    border: 1px dotted red;
`

first.style.background = 'orange'; // setter




/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`


const css = (node,prop,value) => !value ? getCss(node,prop) : setCss(node,prop,value)

/* 
class  
 */


function addClass(node , value){
  if(typeof node == 'string') node = getNode(node);
  if(typeof node !== 'string') throw new TypeError('아니다 이 악마야')
  if(node.classList.contains(value)){
    return alert('이놈은 가지고 있더라')
  }
  node.classList.add(value);
}

function removeClass(node , value){
  if(typeof node == 'string') node = getNode(node);
  if(typeof node !== 'string') throw new TypeError('아니다 이 악마야')
  if(!value){
    node.className = '';
    return;
  }
  
  if(node.contains(value)){
    node.classList.remove(value);
    alert('가지고 있더라고요 헤헤');
  }
}


function toggleClass(node,value){

}

function removeAllClass(node, value){
  node = getNode(node);
  return node.removeAttribute(value);

}

addClass('.first', 'hello');
// addClass('.first', 'second');