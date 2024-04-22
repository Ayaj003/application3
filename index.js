document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById('menuDropdown');
    const navItems = document.getElementById('nav-items');
    const carouselInner = document.querySelector('.carousel-inner');
    const cardContainer = document.querySelector('.card-container');
    const socialMediaContainer = document.getElementById('socialMedia');
    const policyContainer = document.querySelector('.policies small');

    const menuItems = [
        { name: "Women", href: "#" },
        { name: "Men", href: "#" },
        { name: "Kids", href: "#" },
        { name: "Sale", href: "#" },
        { name: "My Account", href: "#" }
    ];

    const mobileImages = [
        { src: "./src/slide2m.jpg", alt: "New Collection" },
        { src: "./src/slide1m.jpg", alt: "" },
        { src: "./src/slide3m.jpg", alt: "" },
        { src: "./src/slide4m.jpg", alt: "" }
    ];

    const desktopImages = [
        { src: "./src/slide1d.webp", alt: "Desktop Image 1" },
        { src: "./src/slide2d.jpg", alt: "Desktop Image 2" },
        { src: "./src/slide3d.jpg", alt: "Desktop Image 3" }
    ];

    const products = [
        { imgSrc: "./src/Shorts.webp", label: "SHORTS" },
        { imgSrc: "./src/tops.jpg", label: "TOPS" },
        { imgSrc: "./src/dress.jpg", label: "DRESSES" },
        { imgSrc: "./src/skirt.jpg", label: "SKIRTS" }
    ];    
    
    const socialMediaLinks = [
        { platform: "Facebook", class: "fa-facebook" },
        { platform: "YouTube", class: "fa-youtube" },
        { platform: "Pinterest", class: "fa-pinterest" },
        { platform: "Instagram", class: "fa-instagram" }
    ];

    const policyLinks = [
        { label: "Cookie preferences", href: "#" },
        { label: "Privacy policy", href: "#" },
        { label: "Cookies policy", href: "#" }
    ];  

    function populateMenu(container, className) {
        menuItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('nav-item');
            const link = document.createElement('a');
            className.split(' ').forEach(cls => link.classList.add(cls));
            link.href = item.href;
            link.textContent = item.name;
            listItem.appendChild(link);
            container.appendChild(listItem);
        });
    }

    function updateCarouselImages() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 768) {
            images = desktopImages;
        } else {
            images = mobileImages;
        }
        carouselInner.innerHTML = '';
        images.forEach(img => {
          const item = document.createElement('div');
          item.className = 'carousel-item';
          item.innerHTML = `<img src="${img.src}" class="d-block w-100" alt="${img.alt}">`;
          carouselInner.appendChild(item);
        });
        if (carouselInner.firstChild) {
            carouselInner.firstChild.classList.add('active');
        }
    }
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'text-center';
        const image = document.createElement('img');
        image.className = 'card product-image';
        image.src = product.imgSrc;
        const text = document.createElement('div');
        text.textContent = product.label;
        card.appendChild(image);
        card.appendChild(text);
        cardContainer.appendChild(card);
    });

    socialMediaLinks.forEach(social => {
        const link = document.createElement('a');
        link.href = "#";
        link.className = `fa ${social.class}`;
        socialMediaContainer.appendChild(link);
    });

    policyLinks.forEach(policy => {
        const link = document.createElement('a');
        link.className = 'text-decoration-none';
        link.href = policy.href;
        link.textContent = policy.label;
        policyContainer.appendChild(link);
        policyContainer.appendChild(document.createElement('br'));
    });

    updateCarouselImages();
    window.addEventListener('resize', updateCarouselImages);
    populateMenu(dropdown, 'dropdown-item');
    populateMenu(navItems, 'nav-link text-light');
});
