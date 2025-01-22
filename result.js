
// List of combinations (a1, b1, c1, etc.)
const combinations = [
    {a: 'a1', b: 'b1', c: 'c1', result: 'the first'},
    {a: 'a1', b: 'b1', c: 'c2', result: 'the second'},
    {a: 'a1', b: 'b1', c: 'c3', result: 'the third'},
    {a: 'a1', b: 'b1', c: 'c4', result: 'the fourth'},
    {a: 'a1', b: 'b2', c: 'c1', result: 'first'},
    {a: 'a1', b: 'b2', c: 'c2', result: 'second'},
    {a: 'a1', b: 'b2', c: 'c3', result: 'third'},
    {a: 'a1', b: 'b2', c: 'c4', result: 'fourth'}
];

// Function to get the result based on the whichButton array
function getResultFromWhichButton() {
    let whichButton = JSON.parse(localStorage.getItem('whichButton')) || [];

    // If there are enough selections (3 button presses), calculate the result
    if (whichButton.length >= 3) {
        // Extract the values for a, b, c based on the buttons clicked
        const aValue = whichButton.find(item => item.page.includes("selectA.html"))?.button;
        const bValue = whichButton.find(item => item.page.includes("selectB.html"))?.button;
        const cValue = whichButton.find(item => item.page.includes("selectC.html"))?.button;

        // Find the combination from the list
        const result = combinations.find(comb => comb.a === aValue && comb.b === bValue && comb.c === cValue);

        // If a result is found, display the fourth variable
        if (result) {
            console.log(result.result);  // Output the fourth variable
            return result.result; // Return the result
        } else {
            console.log("No matching combination found.");
            return null;
        }
    } else {
        console.log("Not enough button selections to determine a result.");
        return null;
    }
}
