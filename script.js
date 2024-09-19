const button = document.getElementById("scrollButton");

button.addEventListener("click", () => {
  // Enable scrolling
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";

  // Scroll to section 2
  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = link.getAttribute("href").substring(1); // Extract the target ID from href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Enable scrolling
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";

      // Scroll to the target section
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const ButtonHub = document.querySelector(".contact-us");
const modalitem = document.querySelector("#modal-content");

ButtonHub.onclick = (e) => {
  modalitem.style.display = "flex";
  e.preventDefault();
};
//close modal button
document.querySelector(".button-close").onclick = function (e) {
  modalitem.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal-close").onclick = function (e) {
  modalitem.style.display = "none";
  e.preventDefault();
};

window.addEventListener("load", function () {
  window.scrollTo(0, 0); // Move the scroll position to the top of the page
});

window.onload = function() {
  // Data structure that organizes products by company
  const data = [
      {
          companyName: "Pandopo Catering",
          products: [
              {
                  title: "Healty Lunch",
                  imagesrc: "images/Healty-luch.png",
                  description: "Delicious healthy lunch options.",
                  price: 50000,
                  link: "#"
              },
              {
                  title: "Choco Brownies",
                  imagesrc: "images/Choco-Brownies.png",
                  description: "Rich and fudgy chocolate brownies.",
                  price: 30000,
                  link: "#"
              },
              {
                title: "Choco Brownies",
                imagesrc: "images/Choco-Brownies.png",
                description: "Rich and fudgy chocolate brownies.",
                price: 30000,
                link: "#"
            },
            {
              title: "Choco Brownies",
              imagesrc: "images/Choco-Brownies.png",
              description: "Rich and fudgy chocolate brownies.",
              price: 30000,
              link: "#"
          },
          {
            title: "Choco Brownies",
            imagesrc: "images/Choco-Brownies.png",
            description: "Rich and fudgy chocolate brownies.",
            price: 30000,
            link: "#"
        },
              {
                  title: "Pastel",
                  imagesrc: "images/Pastel.jpg",
                  description: "Crispy and savory pastel pastries.",
                  price: 20000,
                  link: "#"
              }
          ]
      },
      {
          companyName: "Salted Milea",
          products: [
              {
                  title: "Kerupuk",
                  imagesrc: "images/Kerupuk-salted-milea.png",
                  description: "Crispy salted crackers.",
                  price: 15000,
                  link: "#"
              },
              {
                  title: "Telur Asin",
                  imagesrc: "images/Telur-asin.png",
                  description: "Savory salted eggs.",
                  price: 25000,
                  link: "#"
              }
          ]
      },
      {
          companyName: "Coffee Alphabet",
          products: [
              {
                  title: "Kopi Cai",
                  imagesrc: "images/kopi-cai.png",
                  description: "Smooth and rich coffee blend.",
                  price: 45000,
                  link: "#"
              }
          ]
      }
  ];

  const mainContainer = document.querySelector('.main-container');

  data.forEach(company => {
      // Create a section for each company
      const companySection = document.createElement('div');
      companySection.classList.add('company');

      // Add company title
      const companyTitle = document.createElement('h2');
      companyTitle.classList.add('company-title');
      companyTitle.innerHTML = company.companyName;

      // Append the company title to the section
      companySection.appendChild(companyTitle);

      // Create a row to hold the product cards
      const productRow = document.createElement('div');
      productRow.classList.add('row');

      // Loop through each product of the company and generate the product cards
      company.products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('col-md-2', 'product-card');

          const productImage = document.createElement('img');
          productImage.src = product.imagesrc;
          productImage.alt = product.title;
          productImage.classList.add('product-image');

          const productTitle = document.createElement('h3');
          productTitle.innerHTML = product.title;

          const productDescription = document.createElement('p');
          productDescription.classList.add('product-description');
          productDescription.innerHTML = product.descript ion;

          const productPrice = document.createElement('p');
          productPrice.classList.add('product-price');
          productPrice.innerHTML = 'Rp ' + product.price.toLocaleString();

          const checkoutLink = document.createElement('a');
          checkoutLink.href = product.link;
          checkoutLink.innerHTML = 'Buy Now';
          checkoutLink.classList.add('checkout');
          checkoutLink.target = '_blank';

          // Append product information to the card
          productCard.appendChild(productImage);
          productCard.appendChild(productTitle);
          productCard.appendChild(productDescription);
          productCard.appendChild(productPrice);
          productCard.appendChild(checkoutLink);

          // Append the product card to the row
          productRow.appendChild(productCard);
      });

      // Append the product row to the company section
      companySection.appendChild(productRow);

      // Append the company section to the main container
      mainContainer.appendChild(companySection);
  });
};

ScrollReveal({
  reset: false,
  distance: "200px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".text-content", { origin: "left" });
ScrollReveal().reveal(".gambarhome", { origin: "left" });
ScrollReveal().reveal(".services", { origin: "left" });
ScrollReveal().reveal(".blog-content", { origin: "right" });
