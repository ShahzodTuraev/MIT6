// B-Task: Shunday function tuzing, u 1ta parametr ega bolsin, 
// hamda osha stringda qatnashgan raqamlarni sonini return qilsin. 
// Masalan: getDigits("ag1aw5g6") return qilsin 3

const getDigits = (txt)=>{
    let count = 0
    for(let i = 0; i < txt.length; i++){
        if(Number.isInteger(+txt[i]))count++;
    }
    return count;
}
console.log(getDigits('fhkjhhk6h765khk'));