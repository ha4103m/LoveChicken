
// 結果の値をoutput-containerに表示する（テスト用）
function displayStoredResult() {
    const resultNumber = JSON.parse(sessionStorage.getItem('resultNumber'));

    const container = document.getElementById('output-container');
    container.innerHTML = '';

    const resultElement = document.createElement('p');
    resultElement.textContent = resultNumber;  
    container.appendChild(resultElement);
}

// 【占いスタート】ボタンが押されたときの関数
function goToNextPage() {
    const resultNumber = sessionStorage.getItem('resultNumber'); //結果の値を取得
    const fileName = numberToWord(resultNumber) + ".html"; //数値である結果の値を文字列に変換し.htmlを付ける

    redirectToFile(fileName); 
}

// ページ移動の関数
function redirectToFile(fileName) {
    window.location.href = 'results/' + fileName;
}

// 数値である結果の値を文字列に変換する関数
function numberToWord(number) {
    const numbersToWords = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two"
    ];
    return numbersToWords[number] || "invalid";
}