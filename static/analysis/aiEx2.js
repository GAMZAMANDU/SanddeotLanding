let has1 = false;

window.addEventListener('scroll', function() {
    if (has1) return;

    var scrollPosition = window.scrollY;

    if (scrollPosition > 300) {
        has1 = true;

        let target = document.getElementById('ai-exp2');
        let aiResElement = document.querySelector('.AI-res2');
        let text = `새로운 소프트웨어 ...는 시스템의 *[행동]을 크게 향상시킬 것이다. ?[performance가 어떻게 해석해야 자연스러워?]`;

        let index = 0;
        const intervalId = setInterval(() => {
            target.value += text[index];
            index++;
    
            if (index >= text.length) {
                clearInterval(intervalId);

                    setTimeout(() => {
                        aiResElement.style.display = 'block';
                        aiResElement.style.transform = 'scale(1)';
                    }, 70); 
            }
        }, 50 - (index * 3)); 
    }
});