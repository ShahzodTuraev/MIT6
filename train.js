// C-Task: 
// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har 
// ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
// MASALAN checkSimilarity("laepp", "apple") true return qiladi.




const checkSimilarity = (l1, l2) =>{
    if(l1.length === l2.length){
    let ar1 = l1.split('');
    let ar2 = l2.split('');
    
    for(let i = 0; i < ar2.length; i++){
        if(ar1.indexOf(ar2[i]) >= 0)(ar1.splice(ar1.indexOf(ar2[i]), 1));
    }
    return ar1.length === 0 ? true : false
    
    }else{return 'please, enter the strings with the same length'}

}
console.log(checkSimilarity('hello', 'elhlo'));







































// const checkSimilarity = (w1, w2)=> {
//     if(w1.length == w2.length){
//        return w1.split('').every(ele=>w2.split('').includes(ele))&&
//         w2.split('').every(ele=>w1.split('').includes(ele))? true : false 
//     }
// }

// console.log(checkSimilarity("laepp", "apple"));

// const checkSimilarity = (w1, w2)=> {
//     for(let i = 0; i< w1.length; i++){
//         if(w2.split('').includes(w1[i])){
//             w2.split('').slice(indexOf(w1[i]))
//         } 
//     }
//     console.log(w2);
// };

// checkSimilarity("laepp", "apple")

const we = 'hello'
//  we.split('').splice(1, 1)
//  console.log(we.split('').splice(2, 1));
// console.log(we.split('').slice(2, 1));