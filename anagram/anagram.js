const anagramChecker = (string1, string2) => {

    const stripMeBabyOneMoreTime = (takeME) => {
        const nowStripped = takeME.replace(/[.,\s/#!$%\^&\*;:{}£@=\-_`~()]/g, "").toLowerCase();

        return nowStripped;
    }

    strippedString1 = stripMeBabyOneMoreTime(string1);
    sortedString1 = [...strippedString1].sort().join('')

    strippedString2 = stripMeBabyOneMoreTime(string2);
    sortedString2 = [...strippedString2].sort().join('')


    if (sortedString1.length != sortedString2.length) {
        msg = "failed at string length";
        return [false, msg];
    }
    if (sortedString1 === sortedString2) {
        msg = `You lucky sod, you've only gone and found yourself an anagram with >>  ${string1} and ${string2} `;
        return [true, msg];
    } else {
        msg = "no anagrams where found or harmed in this process";
        return [false, msg];
    }

    //take in 2 strings
    //strip them of everything except letters and then set them to lower case
    //sort letters in alphabetical order
    //compare string lengths if they are not the same return false or move on 
    //compare the strings, if the same then return true else return false

}



function myFunction() {

    let string1 = document.getElementById('string_1').value;

    let string2 = document.getElementById('string_2').value;



    const [result, msg] = anagramChecker(string1, string2);
    document.getElementById('results').innerHTML = `result = ${result} > ${msg}`;



}


// console.log(anagramChecker('This is, the End', 'heisted hints....,.,.,./@£'));

// console.log(anagramChecker('hello , This.* world', 'DOLL, hoeeWeler'));

// console.log(anagramChecker('hello , This.* world', 'tickle me ballss'));

// // DOLL, hoWler
// // ,./hello world
// // console.log("hello , This.* world".replace(/[.,\s/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase());