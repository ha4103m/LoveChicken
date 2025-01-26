// selectA,slectB,selectCそれぞれで選択したものが、どの結果と連携してるかの配列（結果配列）
const combinations = [
    {a: 'a1', b: 'b1', c: 'c1', result: 11},
    {a: 'a1', b: 'b1', c: 'c2', result: 6},
    {a: 'a1', b: 'b1', c: 'c3', result: 15},
    {a: 'a1', b: 'b1', c: 'c4', result: 16},
    {a: 'a1', b: 'b2', c: 'c1', result: 27},
    {a: 'a1', b: 'b2', c: 'c2', result: 19},
    {a: 'a1', b: 'b2', c: 'c3', result: 25},
    {a: 'a1', b: 'b2', c: 'c4', result: 1},

    {a: 'a1', b: 'b3', c: 'c1', result: 20},
    {a: 'a1', b: 'b3', c: 'c2', result: 26},
    {a: 'a1', b: 'b3', c: 'c3', result: 2},
    {a: 'a1', b: 'b3', c: 'c4', result: 14},
    {a: 'a1', b: 'b4', c: 'c1', result: 21},
    {a: 'a1', b: 'b4', c: 'c2', result: 9},
    {a: 'a1', b: 'b4', c: 'c3', result: 32},
    {a: 'a1', b: 'b4', c: 'c4', result: 4},

    {a: 'a2', b: 'b1', c: 'c1', result: 24},
    {a: 'a2', b: 'b1', c: 'c2', result: 9},
    {a: 'a2', b: 'b1', c: 'c3', result: 18},
    {a: 'a2', b: 'b1', c: 'c4', result: 8},
    {a: 'a2', b: 'b2', c: 'c1', result: 32},
    {a: 'a2', b: 'b2', c: 'c2', result: 21},
    {a: 'a2', b: 'b2', c: 'c3', result: 5},
    {a: 'a2', b: 'b2', c: 'c4', result: 27},

    {a: 'a2', b: 'b3', c: 'c1', result: 7},
    {a: 'a2', b: 'b3', c: 'c2', result: 23},
    {a: 'a2', b: 'b3', c: 'c3', result: 22},
    {a: 'a2', b: 'b3', c: 'c4', result: 30},
    {a: 'a2', b: 'b4', c: 'c1', result: 17},
    {a: 'a2', b: 'b4', c: 'c2', result: 26},
    {a: 'a2', b: 'b4', c: 'c3', result: 11},
    {a: 'a2', b: 'b4', c: 'c4', result: 31}, 

    {a: 'a3', b: 'b1', c: 'c1', result: 23},
    {a: 'a3', b: 'b1', c: 'c2', result: 10},
    {a: 'a3', b: 'b1', c: 'c3', result: 14},
    {a: 'a3', b: 'b1', c: 'c4', result: 19},
    {a: 'a3', b: 'b2', c: 'c1', result: 16},
    {a: 'a3', b: 'b2', c: 'c2', result: 13},
    {a: 'a3', b: 'b2', c: 'c3', result: 3},
    {a: 'a3', b: 'b2', c: 'c4', result: 20},

    {a: 'a3', b: 'b3', c: 'c1', result: 22},
    {a: 'a3', b: 'b3', c: 'c2', result: 31},
    {a: 'a3', b: 'b3', c: 'c3', result: 28},
    {a: 'a3', b: 'b3', c: 'c4', result: 29},
    {a: 'a3', b: 'b4', c: 'c1', result: 2},
    {a: 'a3', b: 'b4', c: 'c2', result: 1},
    {a: 'a3', b: 'b4', c: 'c3', result: 12},
    {a: 'a3', b: 'b4', c: 'c4', result: 24}, 

    {a: 'a4', b: 'b1', c: 'c1', result: 3},
    {a: 'a4', b: 'b1', c: 'c2', result: 5},
    {a: 'a4', b: 'b1', c: 'c3', result: 8},
    {a: 'a4', b: 'b1', c: 'c4', result: 25},
    {a: 'a4', b: 'b2', c: 'c1', result: 4},
    {a: 'a4', b: 'b2', c: 'c2', result: 10},
    {a: 'a4', b: 'b2', c: 'c3', result: 6},
    {a: 'a4', b: 'b2', c: 'c4', result: 28},

    {a: 'a4', b: 'b3', c: 'c1', result: 30},
    {a: 'a4', b: 'b3', c: 'c2', result: 29},
    {a: 'a4', b: 'b3', c: 'c3', result: 13},
    {a: 'a4', b: 'b3', c: 'c4', result: 17},
    {a: 'a4', b: 'b4', c: 'c1', result: 12},
    {a: 'a4', b: 'b4', c: 'c2', result: 18},
    {a: 'a4', b: 'b4', c: 'c3', result: 15},
    {a: 'a4', b: 'b4', c: 'c4', result: 7}
];

const displayButton = document.getElementById('displayResult');
if (displayButton) {
    displayButton.addEventListener('click', getResultFromWhichButton);
}

// ３つの選択からどの結果になるかを判別する関数
function getResultFromWhichButton() {
    let whichButton = JSON.parse(sessionStorage.getItem('whichButton')) || [];

    // 料理配列が３つ以上の値が入っている場合
    if (whichButton.length >= 3) {
        const aValue = whichButton.find(item => item.page.includes("selectA.html"))?.button;
        const bValue = whichButton.find(item => item.page.includes("selectB.html"))?.button;
        const cValue = whichButton.find(item => item.page.includes("selectC.html"))?.button;

        // 料理配列の値から結果配列の最後の値を取得
        const result = combinations.find(comb => comb.a === aValue && comb.b === bValue && comb.c === cValue);
        // 結果の値が存在する場合
        if (result) {
            sessionStorage.setItem('resultNumber', result.result); // 結果の値をresultNumberとして保存
            displayStoredResult()
            return result.result;
        } else {
            alert("該当する結果の値が見つかりません。")
            return null;
        }
    } else {
        alert("料理配列が３つ未満の値しか入っていません。")
        return null;
    }
}
