function splitText(sentence){
    const doc = nlp(sentence);
    const terms = doc.terms().out('array');

    return terms;
}

function InsertText(targetID,array){
    const target = document.getElementById(targetID);

    target.innerHTML = '';
    array.forEach(element => {
        target.innerHTML += `<span class="save-word" name=${element.replace(/[^a-zA-Z]/g, '')}>${element}</span> `;
    });
}

InsertText('save-text',splitText('Knowledge speaks, but wisdom listens.'));