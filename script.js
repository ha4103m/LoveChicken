// 画面移動の関数
function redirectToNextPage() {
    const currentPage = window.location.pathname;

    let nextPage = "";

    if (currentPage.includes("selectA.html")) {
        nextPage = "selectB.html";
    } else if (currentPage.includes("selectB.html")) {
        nextPage = "selectC.html";
    } else if (currentPage.includes("selectC.html")) {
        nextPage = "start-fortune.html"; 
    }

    window.location.href = nextPage;

}

// 料理配列に値を入れる関数
function addToVariable(button) {
    const currentPage = window.location.pathname;
    const pageName = currentPage.substring(currentPage.lastIndexOf('/') + 1);
    let buttonData = {page: pageName, button: button };

    // selectA.htmlの場合は、料理配列を初期化する
    if (currentPage.includes("selectA.html")) {
        localStorage.removeItem('whichButton');
    }

    // 料理配列に値を入れ
    let whichButton = JSON.parse(localStorage.getItem('whichButton')) || [];
    whichButton.push(buttonData);

    localStorage.setItem('whichButton', JSON.stringify(whichButton));
}

// class="btn"のボタンが押された場合
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        addToVariable(button.dataset.button); // Pass the button data to addToVariable
        redirectToNextPage(); // Proceed to the next page
    });
});