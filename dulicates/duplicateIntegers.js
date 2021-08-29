// const duplicateIntegers = (arr) => {
//     let duplicates = [];
//     let counter = 0;

//     duplicates = arr.filter((item, index) => {

//         return arr.indexOf(item) === index;

//     });
//     console.log(duplicates);

// }

// function duplicateIntegers(arr) {
//     let result = [...new Set(arr)];
//     console.log(result);
// }

const findDuplicates = (nums) => {
    nums.sort(); // alters original array
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === nums[i + 1]) {
            counter++
        }
    }
    nums = new Set(nums);
    nums = [...nums];
    nums.push("total found " + counter);
    console.log(nums)
    return nums
}


findDuplicates([1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6, 7, 8]);
// duplicateIntegers([1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8]);





