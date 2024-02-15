import { getNode } from "../dom/getNode.js"



export const memo = (() =>{
    const cache = {
        // ket : value
    }
    return (key , callback) => {
        if(callback) return cache[key];

        if(cache[key]){
            console.log(`${key} 안에는 이미 캐시된 값이 존해합니다.`);
            return cache[key];
        }
        cache[key] = callback();
    } 
})()
// ifIe 패턴으로 작성하였을때 인자와 인수를 memo함수에 직접적으로 포함하게 한다면 쓰는 의미가 없기때문에 
// memo('cube',()=> getNode('#cube')) // setter

// memo('cube'); // div#cube getter
