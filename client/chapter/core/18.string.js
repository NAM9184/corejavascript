/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength;


// 특정 인덱스의 글자 추출
let extractCharacter = message[3];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// message[3] = 'a';


// 부분 문자열 추출
let slice = message.slice(1);
let subString = message.substring[2,5];
// let subStr = message.subStr;


// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
function checkbrowser(){
    const agent = window.navigator.userAgent.toLocaleLowerCase();
    let borweserName;
    switch(true){
        case agent.indexOf('edge') >  -1 : borweserName = 'MS Edge'; break;
        case agent.indexOf('chrome') >  -1 : borweserName = 'chrome'; break;
        case agent.indexOf('firefox') >  -1 : borweserName = 'firefox'; break;
        case agent.indexOf('opera') >  -1 : borweserName = 'opera'; break;
        case agent.indexOf('Safari') >  -1 : borweserName = 'Safari'; break;
    }
    
    borweserName === 'chrome' ? alert('크롬입니다.') : alert('크롬이 아닙니다.');


    return borweserName;
    
}

let lastIndexOf;


let includes = message.includes('Less') ;
let startsWith =  message.startsWith('Less');
let endsWith = message.endsWith('more');


let str = '      a   b     c           d    '

// 공백 잘라내기
let trimLeft = str.trimLeft();
let trimRight = str.trimRight();
let trim = str.trim();


let reg = str.replace(/\s*/g,'')


// 텍스트 반복
let repeat = message.repeat(3);


// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;