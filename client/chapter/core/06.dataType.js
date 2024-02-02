/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);
// 2. 값이 할당되지 않은 상태
let undef = undefined;
console.log(typeof undef);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let duble = "hello";
let single = "hello";
let backtick = `hello`;
console.log(typeof duble);
// 4. 정수, 부동 소수점 숫자(길이 제약)
let integer = 1123;
let floatingPointNumber = 10.331;

console.log(typeof integer);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigNumber = 123n;
console.log(typeof bigNumber);

// 6. 참(true, yes) 또는 거짓(false, no)
const isClicked = false;
const isActived = true;

console.log(typeof isActived);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = { name: "nam" };
console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
const unique = Symbol("uuid");

console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// Expected output: "Gabby"

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
const user = {
  name: "tiger",
  age: "27",
  sayHi: function () {
    console.log("hello");
  },
  sayHi2: () => {
    console.log("hello2");
  },
  sayHi3() {
    console.log("hello3");
  },
};

console.log(user.name);

// Array

const arr = [1, "a", { name: "tiger" }, 4, () => {}];
console.log(arr);

// function

function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);

// this

