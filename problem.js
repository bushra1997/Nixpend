const characterOccurrence =(str) => {
    var result = [...str].reduce((char, numOfOcc) => { char[numOfOcc] = char[numOfOcc] ? char[numOfOcc] + 1 : 1; return char }, {}); 
    return Object.entries(result).sort((a,b) => b[1]-a[1])
}
