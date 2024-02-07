/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
// typeof를 사용하여 []배열을 선택해보면 객체로 구분짓기 때문에
const isArray = data => Array.isArray(data)
// 위 코드처럼 Array.isArray를 사용의 입력된 데이터의 값이 배열일경우의 boolean형으로 판단하여 true를 내보내기 때문에
// 실제로 입력한 값이 '배열'인지 더욱 정확하게 구분이 가능하다




const people = [
    {
        id : 0,
        name : '박가희',
        age : 25,
        job : '명탐정코난 범인',
        imageSrc : 'FAkq31'
    },
    {
        id : 1,
        name : '김보미',
        age : 64,
        job : '짜요짜요 마케터',
        imageSrc : 'Gakz34'
    },
    {
        id : 2,
        name : '한태희',
        age : 13,
        job : '삐돌이',
        imageSrc : 'Fkzoq81'
    },
    {
        id : 3,
        name : '이원명',
        age : 81,
        job : '이도령',
        imageSrc : 'Tq9zli'
    },

] 


/* 요소 순환 ---------------------------- */

// forEach
let nameArray = [];

people.forEach((item, index) => {
    nameArray.push(item.name)
});
// people.forEach((item, index) => nameArray.push(item.name));


// console.log(nameArray);

// 이벤트가 많이 증가했을떄  이런 방식은 올바른가요? X  이벤트 위임 방식을 사용하는게 좋습니다.(event delegation) 꼭 찾아봐!

const list = document.querySelectorAll('span');

list.forEach((item , index) =>{
    item.addEventListener('click', function(){
        console.log(index);
    });
});


/* 원형 파괴 ----------------------------- */

const arr = [10, 100, 1000, 10000, 10_000];

// push
// pop
// unshift
// shift

// reverse
const reverse = arr.reverse();

// splice
// const splice = arr.splice(1,2,'javascript','css');


// sort
// const sort = arr.sort((a,b) => {
//     return b-a;
// });


const newArray = arr.toReversed();

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced


// map 은 forEach와 다르게 배열을 새롭게 생성해서 반환함!!!
// const jobArray = people.map((item, index) => item.job);

const card = people.map((item, index) => {
    return /*html*/`
        <div class="userCard">
            <div class="imageField">
                <img src="${item.imageSrc}" alt="${item.name}" >
            </div>
            <span>이름 : ${item.name}</span>
            <span>나이 : ${item.age}</span>
            <span>직업 : ${item.job}</span>
        </div>
    `
});

// card.forEach((item) => document.body.insertAdjacentHTML('beforeend', item));

const newAge = people.map(item => item + 1);

const 젊은이들 = people.filter((item) => {
    return item.age < 30;
})
// filter  는 배열을 반환한다.



const find = people.find(item => {
    return item.name === '박가희';
})
// find는 찾은대상 즉 객체가 반환된다.


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce


// const totalAge = people.reduce((acc,cur) => {
//     return acc + cur.age 
// },0);
const totalAge = people.reduce((acc,cur) => acc + cur.age ,0);


const tem = people.reduce((htmlCode , cur) => {
    return htmlCode + `<div>${cur.name} : ${cur.age}</div>`
}, '');

document.body.insertAdjacentHTML("beforeend", tem);


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '원명 가희 소정 설아 경민 진욱';

// split : 문자를 배열로
const strignToArray = str.split(' ');
console.log(strignToArray);



// join : 배열을 문자로
const arrayToString = strignToArray.join('/');
console.log(arrayToString);