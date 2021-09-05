let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChanllengeing: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-best-programmer-joke"
}

// 1.) write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go")
//console.log(programming)
// 2.) Change the difficulty to the value of 7
let chnge = programming["difficulty"]=7
//console.log(chnge)

// 3.) Using the delete keyword, write the command to remove the jokes key from the programmng object
delete programming.jokes;
//console.log(programming)
// 4.) write the command to add a new key called isFun and a value of true to the programming object
programming.isFun=true

// 5.) using a loop, iterate through the languages array and console.log all of the languages
for(let pro in programming){
console.log(pro.toString())
}


//console.log(programming.languages[programming.languages.length-1])

// 6.) using a loop, console.log all of the keys in the programming object
for(let keys in programming){
    //console.log(keys)
}
// 7.) Using a loop, console.log all of the values in the programming object
for (let values in programming){
   // console.log(programming[values])
}