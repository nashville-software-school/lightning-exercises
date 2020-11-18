// SOLUTIONS TO FOR...OF
for (const letter of welcomeMessage) {
    console.log(letter)
}

for (const coaster of rollerCoasters) {
    console.log(coaster);
}

for (const [key, value] of Object.entries(ride)) {
    console.log(`${key}: ${value}`)
}




// WAY MORE WORK TO GET INDEX
for (const [index, letter] of welcomeMessage.split("").entries()) {
    console.log(index, letter)
}


// Using a for...of is not ideal for object iteration // for...in is better
for (const letter of welcomeMessage.split("")){
    console.log(letter)
}




// USING A FOR...IN for an OBJECT
for (const property in ride){
    console.log(`${property}: ${ride[property]}`)
}

// SOLUTION TO FOREACH
// OOPS... you can't use forEach on strings or objects

rollerCoasters.forEach(coaster => console.log(coaster))

welcomeMessage.split("").forEach((letter, index) => console.log(`SPLIT LETTER ${index}: ${letter}`))

// ! BONUS
// INDEX WITH FOREACH
rollerCoasters.forEach((coaster, i) => console.log(`Index ${i}: ${coaster}`))

// LITTLE MORE WORK WITH FOR...OF
for (const [index, value] of rollerCoasters.entries()){
    console.log(`Index ${index}: ${value}`)
}

