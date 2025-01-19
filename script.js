// Function to redirect to the next page
//function redirectToNextPage() {
//    window.location.href = "selectA.html"; // Change this to the correct next page URL
//}

// Set a timeout for 5 seconds to automatically redirect
setTimeout(redirectToNextPage, 5000);

// Redirect when the user clicks anywhere on the body
document.body.addEventListener("click", redirectToNextPage);
