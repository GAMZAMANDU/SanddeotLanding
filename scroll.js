// 5초 후에 특정 Y 좌표로 스크롤 이동하는 함수
function scrollToY(yPos) {
    setTimeout(function() {
        window.scrollTo({
        top: yPos,
        behavior: 'smooth'
    });
    }, 10000);
}

scrollToY(968);