
//var whichButton = [];

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

function addToVariable(button) {
    const currentPage = window.location.pathname;

    let buttonData = {button: button };

    let whichButton = JSON.parse(localStorage.getItem('whichButton')) || [];
    whichButton.push(buttonData);

    // Store the updated array back to localStorage
    localStorage.setItem('whichButton', JSON.stringify(whichButton));

    console.log(whichButton);
}

//
function displayWhichButton() {
    const container = document.getElementById('output-container'); // Make sure there's an element with this ID in the HTML
    container.innerHTML = ''; // Clear previous content

    // Create a list to display the buttons
    //const list = document.createElement('ul');
    let whichButton = JSON.parse(localStorage.getItem('whichButton')) || [];

    const list = document.createElement('ul');
    
    whichButton.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Page: ${item.page}, Button: ${item.button}`;
        list.appendChild(listItem);
    });

    container.appendChild(list); // Append the list to the container

    //
    console.log(whichButton)
}


const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        addToVariable(button.dataset.button); // Pass the button data to addToVariable
        redirectToNextPage(); // Proceed to the next page
    });
});

// If you want to display the buttons after a specific event
document.getElementById('displayButton').addEventListener('click', () => {
    displayWhichButton(); // This will output the current state of `whichButton`
});
