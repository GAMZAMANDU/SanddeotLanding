document.addEventListener('DOMContentLoaded', (event) => {
    const findGrid = document.getElementById("grid"); // "grid"로 수정

    if (findGrid) {
        for (let i = 0; i < 288; i++) {
            findGrid.innerHTML += `<div class="gird-box"></div>`;
        }
    } else {
        console.error('타겟 엘리먼트가 존재하지 않습니다.');
    }
});

anime({
    targets: '#grid .grid-box',
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [24, 12], from: 'center'}),
    autoplay: true
});

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

