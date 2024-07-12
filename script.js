document.addEventListener('DOMContentLoaded', (event) => {
    const findGrid = document.getElementById("grid"); // "grid"로 수정

    if (findGrid) {
        for (let i = 0; i < 288; i++) {
            findGrid.innerHTML += `<div class="gird-box" id="grid-box-num${i}"></div>`;
        }
    } else {
        console.error('타겟 엘리먼트가 존재하지 않습니다.');
    }
});
//TODO: 바꾸기 


const box = document.querySelector('#main-section > div');

box.addEventListener('mousemove', function(e) {
    const rect = box.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const angleX = deltaY / centerY * 20; 
    const angleY = -deltaX / centerX * 20; 

    // 변환 효과 적용
    box.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) rotateZ(0deg)`;
});

box.addEventListener('mouseleave', function() {
    box.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
});

