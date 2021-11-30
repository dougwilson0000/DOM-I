const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const links = document.querySelectorAll('nav a');
links.forEach(function(link) {
  link.classList.add('italic');
})
const footerLink = document.querySelector('footer a');
footerLink.classList.add('bold');

const nav1 = document.querySelector('nav a:nth-child(1)');
nav1.textContent = siteContent['nav']['nav-item-1'];

const nav2 = document.querySelector('nav a:nth-child(2)');
nav2.textContent = siteContent['nav']['nav-item-2'];

const nav3 = document.querySelector('nav a:nth-child(3)');
nav3.textContent = siteContent['nav']['nav-item-3'];

const nav4 = document.querySelector('nav a:nth-child(4)');
nav4.textContent = siteContent['nav']['nav-item-4'];

const nav5 = document.querySelector('nav a:nth-child(5)');
nav5.textContent = siteContent['nav']['nav-item-5'];

const nav6 = document.querySelector('nav a:nth-child(6)');
nav6.textContent = siteContent['nav']['nav-item-6'];

const logoImg = document.querySelector('#logo-img');
logoImg.src = './mocks/img/logo.png';

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImage = document.querySelector('.cta img');
ctaImage.src = './mocks/img/cta.png';

const mainContentH4 = document.querySelector('.top-content .text-content h4');
mainContentH4.textContent = siteContent['main-content']['features-h4'];

const mainContentP = document.querySelector('.top-content .text-content p');
mainContentP.textContent = siteContent['main-content']['features-content'];

const mainContentAboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
mainContentAboutH4.textContent = siteContent['main-content']['about-h4'];

const mainContentAboutContent = document.querySelector('.top-content .text-content:nth-child(2) p');
mainContentAboutContent.textContent = siteContent['main-content']['about-content'];

const mainContentImg = document.querySelector('#middle-img');
mainContentImg.src = './mocks/img/accent.png';

const bottomContentH4One = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
bottomContentH4One.textContent = siteContent['main-content']['services-h4'];

const bottomContentPOne = document.querySelector('.bottom-content .text-content:nth-child(1) p');
bottomContentPOne.textContent = siteContent['main-content']['services-content'];

const bottomContentH4Two = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
bottomContentH4Two.textContent = siteContent['main-content']['product-h4'];

const bottomContentPTwo = document.querySelector('.bottom-content .text-content:nth-child(2) p');
bottomContentPTwo.textContent = siteContent['main-content']['product-content'];

const bottomContentH4Three = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
bottomContentH4Three.textContent = siteContent['main-content']['vision-h4'];

const bottomContentPThree = document.querySelector('.bottom-content .text-content:nth-child(3) p');
bottomContentPThree.textContent = siteContent['main-content']['vision-content'];