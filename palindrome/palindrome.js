const isItAPalindrome = (word) => {
    let reverseIt = [...word].reverse().join('');
    return word === reverseIt ? console.log("true") : console.log("false");
}

isItAPalindrome("racecar")