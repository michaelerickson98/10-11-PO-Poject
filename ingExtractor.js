function ingExtractor(string){
    let words = string.split(' ')
    let ingWords = []
    for(let word of words) {
        if(word.length>4 && word.substring(word.length-3)==='ing') ingWords.push(word)
    }
    return ingWords
}
