// let res =""
// for(let i = 1;i <6; i++){
//     res +="* "
// }
// console.log(res)

// let res =""
// for(let i = 1;i <6; i++){
//     res +="* " + "\n"
// }
// console.log(res)

// let res =""
// for(let i = 1;i <26; i++){
//     res +="* " 
//     if(i % 5 ==0) res +="\n"
// }
// console.log(res)

// let res =""
// for(let i = 1;i <6; i++){
//     res +="* "
//     console.log(res)
// }

// let res =""
// for(let i = 1;i <=5; i++){
//     for(let j = 1;j<= 5;j++){

//         res +="* " 
//     }
//     res +="\n" 

// }
// console.log(res)

// let res =""
// for(let i = 1;i <=5; i++){
//     for(let j = 1;j<= 5;j++){

//         res += j+" " 
//     }
//     res +="\n" 

// }
// console.log(res)

// let res =""
// for(let i = 1;i <=5; i++){
//     for(let j = 1;j<= 5;j++){

//         res += i+" " 
//     }
//     res +="\n" 

// }
// console.log(res)

// let res = ""
// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= 5; j++) {
//         if (i % 2 == 0) res +=  "* "
//         else res += j + " "
//     }
//     res += "\n"

// }
// console.log(res)

// let res = ""
// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= 5; j++) {
//         if (i % 2 == 0) res += i+ " "
//         else res +=  "* "
//     }
//     res += "\n"

// }
// console.log(res)


// let res = ""
// let count=1
// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= 5; j++) {
//         if (count<10) res += "0" + count++ + " "
//         else res += count++ +" "
//     }
//     res += "\n"

// }
// console.log(res)

// let res =""
// for(let i = 1;i <6; i++){
//     res +="* " 
//     console.log(res)
// }

// let res =""
// for(let i = 5;i >=1; i--){
//     for(let j = 1; j<= i; j++){
//         res += "*"
//     }
//     res +="\n" 
//     console.log(res)
// }

// let res =""
// for(let i = 5;i >=1; i--){
//     res +="* " 
//     console.log(res)
// }

// let res =""
// for ( let i = 1 ; i <= 5; i++){
//     for(let j = 1; j<=5-i ; j++){
//         res += " "
//     }
//     for (let k =1; k<= i; k++){
//         res +="*"
//     }
//     res ="\n"
// }
// console.log(res)



// let res =""
// for (let i = 5; i>= 1; i--){
//     for(let j = 1; j<=5; j++){
//         res +=" "
//     }
//     for(let k =1; k<= i;k++){
//         res += "*" + " "
//     }
//     res+="\n"
// }
// console.log(res)



// let res =""
// for ( let i = 5 ; i >=1; i--){
//     for(let j = 1; j<=5-i ; j++){
//         res += " "
//     }
//     for (let k =1; k<= i; k++){
//         res +="*" + " "
//     }
//     res +="\n"
// }
// for ( let i = 2 ; i <= 5; i++){
//     for(let j = 1; j<=5-i ; j++){
//         res += " "
//     }
//     for (let k =1; k<= i; k++){
//         res +="*" + " "
//     }
//     res +="\n"
// }
// console.log(res)



let res =""
for ( let i = 1 ; i <= 5; i++){
    for(let j = 1; j<=5-i ; j++){
        res += " "
    }
    for (let k =1; k<= i; k++){
        res +="*" + " "
    }
    res +="\n"
}
for ( let i = 4 ; i >=1; i--){
    for(let j = 1; j<=5-i ; j++){
        res += " "
    }
    for (let k =1; k<= i; k++){
        res +="*" + " "
    }
    res +="\n"
}
console.log(res)

