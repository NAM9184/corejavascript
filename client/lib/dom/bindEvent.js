import { getNode } from "./getNode.js"
function handler(){
    console.log('클릭 이벤트 발생');
}

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event , handler[, phase])

function bindeEvent(node, type, handler){
    if(typeof node == 'string') node = getNode(node);

    node.addEventListener(type, handler);

    return () => node.removeEventListener(type, handler);
    // 클로저 클로저 클로저 클로저 클로저 클로저
}

