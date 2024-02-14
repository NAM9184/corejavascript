//querySelector
// 인풋과 버튼에 접근하기 위해서 
const idFeild = document.querySelector('#idFeild');
const submit = document.querySelector('.btn');


const user = {
    id : 'hello',
    pw : 'hiandhi',
}



// eventListener
function handleCheckId(){
    if( this.value == user.id ){
        
        this.classList.remove('is-active')
    } else {
        console.log('error!');
        this.classList.add('is-active')
    }
}


//preventDefault
function hadnleSubmit(e){
    // 이벤트함수는 객체를 반환한다 그설명은 찾아봐 좀
    e.preventDefault();
    
    console.log('제출');
    
}
// 정규표현식을 이용하여 이메일을 검토하도록 지정한다.
idFeild.addEventListener('input', handleCheckId);
submit.addEventListener('click', hadnleSubmit);
// classList




// 1. email 정규표현식을 사용한 validation
// 2. pw 정규표현식을 사용한 validation
// 3. 상태변수관리
// 4. 로그인 버튼을 클릭시 조건처리