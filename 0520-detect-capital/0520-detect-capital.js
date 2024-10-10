/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let upper = word.toUpperCase();
    let lower = word.toLowerCase();
    let once = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    if (word.length === 1) {
        return true
    }
    else if (word === upper || word === lower || word === once) {
        return true;
    }

    else {
        return false
    }
};
