import {clearContents, copy, getNode, getRandom, insertLast, isNumericString ,showAlert} from './lib/index.js';
import jujeobData from './data/data.js';
import { shake } from './lib/animation/index.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleJujeob(e){

  e.preventDefault();

  const name = nameField.value;
  const list = jujeobData(name);
  const pick = jujeobData(name)[getRandom(list.length)]
  
  
  if(!name || name.replace(/\s*/g,'') === ''){
    showAlert('.alert-error','이름을 입력해주세요');
    shake.restart();
    return;
  }

  if(!isNumericString(name)){
    showAlert('.alert-error','제대로된 이름을 입력해주세요.');
    shake.restart();
    return;
  }
  

  clearContents(result);
  insertLast(result,pick);
  

}

function handlecopy(){
  const text = this.textContent;
  copy(text).then(()=>{
    showAlert('.alert-success', '클립보드 복사 완료!!');
  })
}


submit.addEventListener('click', handleJujeob);
result.addEventListener('click', handlecopy);

