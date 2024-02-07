/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식

// sperad syntax     ...arr
// rest parameter
// let calcAllMoney = (...args) => {
//     //   args
//     let total = 0;

//     // for문
//     // for(let i = 0; i < args.length; i++){
//     //     total += args[i];
//     // }

//     // for 오브
//     // for(let value of args ) total += value

//     // foreach
//     // args.forEach(item => total += item);

//     // reduce
//     // args.reduce((acc, cur) => acc + cur ,0);

//     return args.reduce((acc,cur) => acc + cur, 0);
// };

let calcAllMoney = (...args) => args.reduce((acc, cur) => acc + cur, 0);

console.log(calcAllMoney(10, 30, 40, 50));

const createUser = (name, age) => ({name: "인경민", age: 41});

createUser("이경민", 41);
// 일반함수
// this :  나를 호출한 대상을 this 로 찾음

// 화살표 함수
// this : 가지고 있지 않음. 내 상위 영역에서 찾음


//객체의 메서드를 정의할떼 concise method 사용
// 메서드 안에서 함수를 정의할때 arrowFunction 효율적임


const user = {
    total: 0,
    name: '박가희',
    age : 9,
    address: '서울시 중랑구 면목동',
    grades: [80, 40, 115],
    totalGrades(){
        this.grades.forEach((item) => {
            this.total += item;
        })
        return this.total;
        // console.log(this);

        // function sayHi(){
        //     console.log(this);
        // }
        // sayHi()
    }
}

// 자바스크립트의 함수는 양면의 얼굴을 띄고있다. (일반함수 / 생성자 함수)

function c(){

}
c()
new c()

const button = () => {

}

const a = button(); // undefined

// const b = new button();












console.clear();


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric, powerCount) => (numeric ** powerCount);

let pow = (numeric , powerCount) => {
    let result = 1;
    for(let i = 0; i < powerCount; i++) result *= numeric;
    return result;
}
console.log(pow(2,53));

// let powExpression = (numeric, powerCount) => {
//     return Array(powerCount).fill(null).reduce((acc) => {
//         return acc * numeric;
//     },1);
// }

let powExpression = (numeric , powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numeric , 1);

console.log(powExpression(2,53));

// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {
//     let result = '';
//     for(let i = 0; i < repeatCount; i++){
//         result += text;
//     }
//     return result;
// };
let repeat = (text, repeatCount) => Array(repeatCount).fill(text).reduce(acc => acc + text) 


console.log(repeat('hello',3));

