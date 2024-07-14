function extractAlphabets(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}


function foomsa(sentence){
    const doc = nlp(sentence);
    
    const posTags = doc.terms().out('tags');
    const terms = doc.terms().out('array');
    
    let result = '';
    
    terms.forEach((word, index) => {
        let className = posTags[index][extractAlphabets(word.toLowerCase())][0].substring(0, 3).toLowerCase();
        result += `<span class="${className}" onclick=tostOn(this,'foomsa')>${word}</span> `;
    });

    return result
}


function update(index) {
    var inputText = document.querySelectorAll("input")[index].value;
    document.querySelectorAll(".box-title")[index].innerHTML = foomsa(inputText);
}

