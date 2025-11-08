
// product section
let products = [
    {
        name: "Janan Sport",
        price: 450,
        image: "images/products.png"
    },
    {
        name: "Janan Black",
        price: 500,
        image: "images/products.png"
    },
    {
        name: "Janan Black",
        price: 500,
        image: "images/products.png"
    },
    {
        name: "Janan Black",
        price: 500,
        image: "images/products.png"
    },
    {
        name: "Janan Black",
        price: 500,
        image: "images/products.png"
    },
    {
        name: "Janan Blue",
        price: 550,
        image: "images/products.png"
    }
];

// Cards container ko target karo
let cardsContainer = document.getElementById("cards");

// Array ko loop karo
products.forEach((product) => {
    // har product ke liye card banao
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <p>${product.name}</p>
    <p>Price: ${product.price}</p>
  `;

    // container me add karo
    cardsContainer.appendChild(card);
});




// customer favorite

let favProducts = [
    {
        name: "Janan Sports",
        price: 450,
        reviews: "3,200 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Black",
        price: 500,
        reviews: "4,100 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Classic",
        price: 550,
        reviews: "2,800 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Premium",
        price: 600,
        reviews: "3,500 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Intense",
        price: 650,
        reviews: "3,900 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Light",
        price: 480,
        reviews: "2,600 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Oud",
        price: 700,
        reviews: "5,000 Reviews",
        image: "images/products.png"
    }
];

let favContainer = document.getElementById("fav-cards");

favProducts.forEach((product) => {
    let card = document.createElement("div");
    card.className = "fav-card";

    card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <span>${product.reviews}</span>
      <h3>${product.name}</h3>
    </div>
    <p class="price">Price: ${product.price}</p>
    <button class="fav-shop-btn-p">LEARN MORE</button>
    <p>+Quick Add</p>
  `;

    favContainer.appendChild(card);
});


// just launched

let launchedProducts = [
    {
        name: "Janan Sports",
        price: 450,
        reviews: "3,200 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Black",
        price: 500,
        reviews: "4,100 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Blue",
        price: 550,
        reviews: "2,800 Reviews",
        image: "images/products.png"
    },
    {
        name: "Janan Premium",
        price: 600,
        reviews: "3,900 Reviews",
        image: "images/products.png"
    }
];

let launchedContainer = document.getElementById("launcheds");

launchedProducts.forEach((product) => {
    let launched = document.createElement("div");
    launched.className = "launched";

    launched.innerHTML = `
    <p>NEW</p>
    <img src="${product.image}" alt="${product.name}">
    <div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <span>${product.reviews}</span>
      <h3>${product.name}</h3>
    </div>
    <p class="price">Price: ${product.price}</p>
    <button class="lau-btn">Subscribe & Save</button>
    <p>+Quick Add</p>
  `;

    launchedContainer.appendChild(launched);
});

// testimonial section

let testimonialSection = [
    {
        title: "Top Notch",
        review: "I bought it 6 fragrances and Alhamdulillah the result is very good and everyone asked where I got it from so I sent everyone to this page Thank you very much",
        name : "Mubeen",
    },
    {
        title: "Excellent",
        review: "These fragrances are absolutely amazing! The scent lasts all day and I’ve received so many compliments. Definitely worth every penny — highly recommended!",
        name : "Mohsin",
    },
    {
        title: "Awesome",
        review: "I ordered a few perfumes and honestly, I’m impressed with the quality and packaging. The delivery was fast and the fragrances smell premium. Will buy again for sure!",
        name : "Mateen",
    }
]


let testimonialsec = document.getElementById("tes-cards");

testimonialSection.forEach((testimonial) => {
    let tesCard = document.createElement("div");
    tesCard.className = "tes-cards";
    tesCard.innerHTML = `
    <div class="tes-card">
        <!-- <div class="tes-header"> -->
        <div class="tes-stars">
          <h3 class="tes-head">${testimonial.title}</h3>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <!-- </div> -->
        <div class="test-body">
          <p>${testimonial.review}</p>
        </div>
        <div class="tes-footer">
          <img src="images/products.png" alt="">
          <p>${testimonial.name}</p>
        </div>
      </div>
      
  `;

    testimonialsec.appendChild(tesCard);
});



