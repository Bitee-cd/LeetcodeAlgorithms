//this uses a regex expression for the needle argument
//and searches for it in the haystack string 
//then returns the index of the match
//if there is no match it returns -1

var strStr = function(haystack, needle) { 
    const regex = new RegExp(`${needle}`)
    const str = haystack
    const match = regex.exec(str)
    
    if(!match) return -1
        
    return match.index

};