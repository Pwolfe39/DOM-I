const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Header navigation
const aTag = document.querySelectorAll('header nav a');
const site_content = Object.values(siteContent.nav);

for(let i = 0; i < aTag.length; i++) {
  aTag[i].textContent = site_content[i];
}


// Example: Update the img src for the logo
// Great Idea lightbulb logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// Call to action 
const cta = document.querySelector('h1');
cta.textContent = "DOM  IS AWESOME";

// CTA button
const ctaBtn = document.querySelector('button');
ctaBtn.textContent = "Get Started";

//CTA img 
const  ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);




// Middle content 
//features
const features = document.querySelector('.text-content:first-child h4'); 
features.textContent = "FEATURES";

// features text
const featureText = document.querySelector('.text-content:first-child p');
featureText.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// about features
const about = document.querySelector('.text-content:last-child h4');
about.textContent = "ABOUT";

// about features text
const aboutText = document.querySelector('.text-content:last-child p');
aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Code snippets img
const codeSnips = document.getElementById('middle-img');
codeSnips.setAttribute('src', siteContent["main-content"]["middle-img-src"]);




// Bottom content
//services
const services = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
services.textContent = 'SERVICES';

//services text
const servicesText = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//product
const product = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
product.textContent = "Product";

//product text
const productText = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productText.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// vision 
const vision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
vision.textContent = "VISION";

// vision text 
const visionText = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";




// contact info 
const contact = document.querySelector('.contact h4');
contact.textContent = "CONTACT";

// address
const address = document.querySelector('.contact p:nth-child(2)');
address.textContent = "123 Way 456 Street Somewhere, USA";

// phone number
const phoneNumber = document.querySelector('.contact p:nth-child(3)');
phoneNumber.textContent = "1 (888) 888-8888";

// email 
const email = document.querySelector('.contact p:nth-child(4)');
email.textContent = "sales@greatidea.io";



// footer 
const footer = document.querySelector('footer p');
footer.textContent = "Copyright Great Idea 2018";