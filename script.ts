interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

// Array of website template products
const products: Product[] = [
    { id: 1, name: 'Blog Template', price: 49.99, description: 'A modern blog template with responsive design.', imageUrl: 'https://i.postimg.cc/DWywLmrN/Blog-Template.png' },
    { id: 2, name: 'Portfolio Template', price: 59.99, description: 'A professional portfolio template for artists and designers.', imageUrl: 'https://i.postimg.cc/wtfTVHFj/Business-Website-Template.png' },
    { id: 3, name: 'Business Website Template', price: 69.99, description: 'A sleek and professional template for business websites.', imageUrl: 'https://i.postimg.cc/21x51nZv/E-commerce-Store-Template.png' },
    { id: 4, name: 'E-commerce Store Template', price: 79.99, description: 'An attractive and functional template for online stores.', imageUrl: 'https://i.postimg.cc/mzkhfhh9/Landing-Page-Template.png' },
    { id: 5, name: 'Landing Page Template', price: 39.99, description: 'A high-converting landing page template for marketing campaigns.', imageUrl: 'https://i.postimg.cc/2b1j9JXF/Portfolio-Template.png' },
    { id: 6, name: 'Childrens Educational Website Template', price: 89.99, description: 'A vibrant and interactive template designed for childrens educational websites.', imageUrl: 'https://i.postimg.cc/ZW9SS3L4/Childrens-Educational-Website.png' },
    { id: 7, name: 'Personal Blog/Journal Template', price: 59.99, description: 'A minimalist and clean template ideal for personal blogs or journals.', imageUrl: 'https://i.postimg.cc/XrT07J2F/Personal-Blog.png' }
];

const productListElement = document.getElementById('product-list');

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="product-price">$${product.price}</span>
    `;
    productListElement?.appendChild(productElement);
});
