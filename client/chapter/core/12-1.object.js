/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
    position: 'fixed',
    zIndex : 10000,
    top : '50%',
    left : '50%',
    width: '60vw',
    ['max-width'] : 800,
    height: '40vh',
    ['min-height'] : 280,
    transform : 'translate(-50%,-50%)'
};




// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
    uuid: crypto.randomUUID(),
    name: 'tiger',
    email: 'seonbeom2@gmail.com',
    isSignIn : false,
    permission: 'paid' //paid | free
};
console.log(authUser.uuid)
console.log(authUser.name)
console.log(authUser.email)
console.log(authUser.isSignIn)
console.log(authUser.permission)

console.log(authUser["uuid"])
console.log(authUser["name"])
console.log(authUser["email"])
console.log(authUser["isSignIn"])
console.log(authUser["permission"])

for(let key in authUser){
    if(Object.prototype.hasOwnProperty.call(authUser,key)){
        console.log(key);
    }
}

console.clear();

const keyList = Object.keys(authUser);
console.log(keyList);


function entries(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            result.push([obj,key], [key]);
        }
    }
    return result;
}

console.log(entries(authUser));

const valueList = Object.values(authUser);
console.log(valueList);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// 프로퍼티 제거(remove 비워두기) or 삭제(delete 업애버리기)
function isObject(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'
}
function removeProperty(obj,key){

  
    if(!isObject(obj)) return 
    
    obj[key] = null;
  }
  
  
  
  removeProperty([1,2,3],'uuid') // authUser.uuid = null;
  
function deleteProperty(obj, key){
    if(isObject(obj)) return;
    delete obj[key]
}

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone){
    return {
        name,
        age,
        [calculateProperty]: phone
    }
}

createUser('tiger', 30, '0100000')

// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
    name,
    email,
    authorization,
    isLogin
}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 순서는 바꿀 수 없음, 변수 이름은 바꿀 수 있다.
const [a1,_, ...rest] = [10,100,1000,10000]
console.log(rest);

// [[key,value],[key, value]] of Object.entries(authUser){
//     console.log(key,value);
// }


// const first = document.querySelector('.first');
// const second = document.querySelector('.second');

// ->
// const [first, second] = document.querySelectorAll('span');






/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
    박지성: 800,
    김보미: 800,
    이경민: 800,
    전희선: 800
}

const {김보미 : 김, 전희선 : 전, 박지성 : 박, 이경민 : 이, 도가현 : 도 = 20} = salaries;

function createUserList(options){
    const {name : n, age, address, phone, nickname = 'tiger'} = options;
    const name = '선범';
    return {
        name : n,
        age,
        address,
        phone
    }
}

createUserList(
    {
        name: 'tiger',
        age : 35,
        address: "서울시 중랑구 면목동",
        phone : '010-2222-2222'
    }
)