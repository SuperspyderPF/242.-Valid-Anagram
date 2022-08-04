// one line solution 

var isAnagram = function(s, t) {
    return (s.split("").sort().join("") === t.split("").sort().join("")) ? true : false;
};


/// my explained solution 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// we need to check if s and t are same length, and then we will sort the strings, if both strings are the same return true otherwise return false
var isAnagram = function(s, t) {
    
    // find length of both strings and check if they are the same
    
    let l1 = s.length;
    let l2 = t.length;
    
    //sort both strings and check if they are the same
    
    let s1 = s.split('').sort().join('');
    let s2 = t.split('').sort().join('');
    
    
    
    if(s1 === s2){
        // return true or false 
        return true;
    } else{
        return false;
    }
    
};

//time O(n)
//space O(n)