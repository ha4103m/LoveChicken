// selectA.htmlに戻る画面移動の関数
function redirectToNextPage() {
    window.location.href = '../selectA.html';
}

// 【もう一度やってみよう】ボタンが押された
const button = document.querySelector('.back');
if (button) {
    button.addEventListener('click', redirectToNextPage);
}