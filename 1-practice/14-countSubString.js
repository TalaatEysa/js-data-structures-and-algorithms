// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

//Not Optimized Solution ❌❌
function countSubstring(longStr, shortStr) {
    let count = 0;
    for (let i = 0; i <= longStr.length - shortStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) break;
            if (j === shortStr.length - 1) count++;
        }
    }
    return count;
}

console.log(countSubstring('sopranos thanos', 'os'));

//Using KMP Algorithm

//ABBAC
//00010
function matchTable(pattern) {
    let lps = Array.from({ length: pattern.length }).fill(0);
    let suffixEnd = 1;
    let prefixEnd = 0;
    while (suffixEnd < pattern.length) {
        if (pattern[suffixEnd] === pattern[prefixEnd]) {
            prefixEnd++;
            lps[suffixEnd] = prefixEnd;
            suffixEnd++;
        } else if (prefixEnd !== 0) {
            prefixEnd = lps[prefixEnd - 1];
        } else {
            lps[suffixEnd] = 0;
            suffixEnd++;
        }
    }
    return lps;
}

function kmpSearch(text, pattern) {
    let lpsTable = matchTable(pattern);
    let patternIndex = 0;
    let textIndex = 0;
    let count = 0;

    while (textIndex < text.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            textIndex++;
            patternIndex++;

            if (patternIndex === pattern.length) {
                count++;
                patternIndex = lpsTable[patternIndex - 1];
            }
        } else {
            if (patternIndex !== 0) {
                patternIndex = lpsTable[patternIndex - 1];
            } else {
                textIndex++;
            }
        }
    }
    return count;
}

console.log(kmpSearch('hello heap', 'hea'));
