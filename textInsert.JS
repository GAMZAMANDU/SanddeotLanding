let text = "지식에 투자하는 것은 언제나 최고의 이자를 지불한다 - 벤자민 프랭클린";

const target = document.getElementById("box-in-msg");

let index = 0;
const intervalId = setInterval(() => {
    target.textContent += text[index];
    index++;
    if (index >= text.length) {
        clearInterval(intervalId); // 모든 문자가 추가되면 인터벌 중지
    }
}, 50-(index*2));

