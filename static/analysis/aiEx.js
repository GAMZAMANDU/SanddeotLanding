let has = false;

window.addEventListener('scroll', function() {
    if (has) return;

    var scrollPosition = window.scrollY;

    if (scrollPosition > 260) {
        console.log('스크롤이 일정 이상 내려갔습니다.');
        has = true;

        let target = document.getElementById('ai-exp');
        let aiResElement = document.querySelector('.AI-res');
        let text = "새로운 소프트웨어 업데이트가 시스템 성능을 크게 향상시킬 것입니다";

        let index = 0;
        const intervalId = setInterval(() => {
            target.value += text[index];
            index++;
    
            if (index >= text.length) {
                clearInterval(intervalId);

                    setTimeout(() => {
                        aiResElement.style.display = 'block';
                        aiResElement.style.transform = 'scale(1)';
                    }, 50); 
            }
        }, 50 - (index * 2.5)); 
    }
});