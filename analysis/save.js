function splitText(sentence){
    const doc = nlp(sentence);
    const terms = doc.terms().out('array');

    return terms;
}

function InsertText(targetID,array){
    const target = document.getElementById(targetID);

    target.innerHTML = '';
    array.forEach(element => {
        target.innerHTML += `<span class="save-word" onclick="saveWord(this)"
        data-word=${element.replace(/[^a-zA-Z]/g, '').toLowerCase()}>${element}</span> `;
    });
}

InsertText('save-text',splitText('Knowledge speaks, but wisdom listens.'));


let saveWordList = [];

function saveWord(element){
    const name = element.dataset.word;

    if (!saveWordList.includes(name)) {
        saveWordList.push(name);
        document.querySelector('.tags').innerHTML += `<li onclick="deleteWord(this)">${name}</li>`
    }
    console.log(saveWordList);
}

function deleteWord(element){
    const target = element.textContent;
    saveWordList.splice(saveWordList.indexOf(target), 1);
    element.remove();
}