let text = "지식에 투자하는 것은 언제나 최고의 이자를 지불한다 - 벤자민 프랭클린";

const target = document.getElementById("box-in-msg");

let index = 0;

setTimeout(() => {
    const intervalId = setInterval(() => {
        target.textContent += text[index];
        index++;

        if (index >= text.length) {
            clearInterval(intervalId);
        }
    }, 50 - (index * 2.5)); 
}, 2000); 
