document.addEventListener('DOMContentLoaded', (event) => {
    const findGrid = document.getElementById("grid"); // "grid"로 수정

    if (findGrid) {
        for (let i = 0; i < 312; i++) {
            findGrid.innerHTML += `<div class="gird-box"></div>`;
        }
    } else {
        console.error('타겟 엘리먼트가 존재하지 않습니다.');
    }
});