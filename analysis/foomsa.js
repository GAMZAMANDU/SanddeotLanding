function extractAlphabets(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}


function foomsa(sentence){
    const doc = nlp(sentence);
    
    const terms = doc.terms().out('array');
    const posTags = doc.terms().out('tags');
    
    let result = '';
    
    terms.forEach((word, index) => {
        let className = posTags[index][extractAlphabets(word.toLowerCase())][0].substring(0, 3).toLowerCase();
        result += `<span class="${className}" onclick=tostOn(this,'foomsa')>${word}</span> `;
    });

    return result
}


function update(index,propose) {
    var inputText = document.querySelectorAll("input")[index].value;

    const target = document.querySelectorAll(".box-title")[index];
    if(propose == 'foomsa'){
    target.innerHTML = foomsa(inputText);
    }else if(propose == 'save'){
    InsertText(target.id,splitText(inputText));
    }

}

