function enableScrollingAndScrollTo(elementId) {
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";

  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// Scroll button click
document.getElementById("scrollButton").addEventListener("click", () => {
  enableScrollingAndScrollTo("services");
});

// Navbar links click
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute("href").substring(1); // Extract target section id
    enableScrollingAndScrollTo(targetId);
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

window.onload = function () {
  // Data structure that organizes products by company
  const data = [
    {
      companyName: "Pandopo Catering",
      products: [
        {
          title: "Healty Lunch",
          imagesrc: "images/Healty-luch.png",
          description: "Delicious healthy lunch options.",
          link: "https://www.tokopedia.com/ricafe/paket-healthy-lunch-makan-siang-sehat-dan-halal",
        },
        {
          title: "Choco Brownies",
          imagesrc: "images/Choco-Brownies.png",
          description: "Rich and fudgy chocolate brownies.",
          link: "https://www.tokopedia.com/ricafe/special-brownies-fudgy-pandopo-catering-baby-brownies-093b5",
        },
        {
          title: "Biji Ketapang",
          imagesrc: "images/biji-ketapang.png",
          description: "Rich and fudgy chocolate brownies.",
          link: "https://www.tokopedia.com/ricafe/biji-ketapang-cookies-by-pandopo-catering",
        },
        {
          title: "Putri Ayu",
          imagesrc: "images/putri-ayu.png",
          description: "Rich and fudgy chocolate brownies.",
          link: "https://www.tokopedia.com/ricafe/kue-tradisional-jajanan-pasar-putri-ayu-kue-subuh-pandopo-catering",
        },
        {
          title: "Pastel",
          imagesrc: "images/Pastel.jpg",
          description: "Crispy and savory pastel pastries.",
          link: "https://www.tokopedia.com/ricafe/special-pastel-goreng-pandopo-catering-30-pcs",
        },
      ],
    },
    {
      companyName: "Salted Milea",
      products: [
        {
          title: "Kerupuk Telur Asin",
          imagesrc: "images/Kerupuk-salted-milea.png",
          description: "Crispy salted crackers.",
          link: "https://www.tokopedia.com/ricafe/kerupuk-telur-asin-salted-egg-milea",
        },
        {
          title: "Telur Asin",
          imagesrc: "images/Telur-asin.png",
          description: "Savory salted eggs.",
          link: "https://www.tokopedia.com/ricafe/telur-asin-sm-salted-egg-milea-matang-siap-makan-3-butir-all-size-e084d",
        },
      ],
    },
    {
      companyName: "Coffee Alphabet",
      products: [
        {
          title: "Kopi Cai",
          imagesrc: "images/kopi-cai.png",
          description: "Smooth and rich coffee blend.",
          link: "https://www.tokopedia.com/ricafe/kopi-cai-signature-minuman-kemasan-siap-minum-250-500-ml-200ml-signature-22637",
        },
      ],
    },
  ];

  const mainContainer = document.querySelector(".main-container");

  data.forEach((company) => {
    // Create a section for each company
    const companySection = document.createElement("div");
    companySection.classList.add("company");

    // Add company title
    const companyTitle = document.createElement("h2");
    companyTitle.classList.add("company-title");
    companyTitle.innerHTML = company.companyName;

    // Append the company title to the section
    companySection.appendChild(companyTitle);

    // Create a row to hold the product cards
    const productRow = document.createElement("div");
    productRow.classList.add("row");

    // Loop through each product of the company and generate the product cards
    company.products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("col-md-3", "product-card");

      const productImage = document.createElement("img");
      productImage.src = product.imagesrc;
      productImage.alt = product.title;
      productImage.classList.add("product-image");

      const productTitle = document.createElement("h3");
      productTitle.innerHTML = product.title;

      const productDescription = document.createElement("p");
      productDescription.classList.add("product-description");
      productDescription.innerHTML = product.description;

      const checkoutLink = document.createElement("a");
      checkoutLink.href = product.link;
      checkoutLink.innerHTML = "Buy Now";
      checkoutLink.classList.add("checkout");
      checkoutLink.target = "_blank";

      // Append product information to the card
      productCard.appendChild(productImage);
      productCard.appendChild(productTitle);
      productCard.appendChild(productDescription);
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
