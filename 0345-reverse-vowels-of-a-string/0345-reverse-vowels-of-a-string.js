/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr=s.split("");
    const vowels=['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    let left=0;
    let right=arr.length-1;

    while(left<right){
        while(left<right && !vowels.includes(arr[left])){
            left++;
        }
        while(left<right && !vowels.includes(arr[right])){
            right--;
        }

        [arr[left],arr[right]]=  [arr[right],arr[left]];
        left++;
        right--;
    }

    return arr.join("");
    
};