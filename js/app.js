let reviews = document.querySelectorAll('.review-wrapper');
let currentReviews = [0, 2];

let updateReviewSlider = (cards) => {
    cards.forEach((card_index) => {
        reviews[card_index].classList.add('active');
    })



    setInterval(() => {
        currentReviews.forEach((card_index, i) => {
            reviews[card_index].classList.remove('active');
            currentReviews[i] = card_index >= reviews.length - 1 ? 0 : card_index + 1;

        })
        setTimeout(() => {
            updateReviewSlider(currentReviews);
        }, 5000)
    }, 5000)
}

updateReviewSlider(currentReviews)

//button order food
// document.getElementById("mainBtn").addEventListener("click", redirectFunction);
            
// function redirectFunction(){
//     window.location.href = "menukulcha.html";
// }

// faqs


let faqs = [...document.querySelectorAll('.faq')];
faqs.map(faq => {
    let ques = faq.querySelector(".question-box");

    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})


//search
//Get the search button
let searchBtn = document.querySelector('.search-btn');

// Add an event listener to the search button
searchBtn.addEventListener('click', function() {
    // Get the search box
    let searchBox = document.querySelector('.search-box');

    // Get the value from the search box
    let searchText = searchBox.value;

    // Get the specific element
    let element = document.querySelector('.restaurants-container');

    // Use the built-in JavaScript function to find the text in the HTML of the element
    let elementText = element.innerHTML;

    // Find the index of the search text in the HTML of the element
    let searchPos = elementText.indexOf(searchText);

    if (searchPos !== -1) {
        // If the text is found, navigate to that position
        element.scrollIntoView();
    } else {
        // If the text is not found, display an alert
        alert('Text not found');
    }
});

// let searchBtn = document.querySelector('.search-btn');

// // Add an event listener to the search button
// searchBtn.addEventListener('click', function() {
//     // Get the search box
//     let searchBox = document.querySelector('.search-box');

//     // Get the value from the search box
//     let searchText = searchBox.value;

//     // Get all the restaurant names
//     let restaurantNames = document.querySelectorAll('.restaurant-name');

//     // Loop through all the restaurant names
//     for (let i = 0; i < restaurantNames.length; i++) {
//         // If the restaurant name includes the search text
//         if (restaurantNames[i].textContent.includes(searchText)) {
//             // Scroll to the restaurant
//             restaurantNames[i].scrollIntoView();
//             break;
//         }
//     }
// });






//dish slider

let dishSlider = document.querySelector('.dish-slide');

let rotationVal = 0;

setInterval(() => {
    rotationVal += 120;
    dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;

}, 3000)





let navToggler = document.querySelector('.nav-toggler');
let linksContainer = document.querySelector(".links-container");

navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('active');
    linksContainer.classList.toggle("active");
})




AOS.init();