import faker from 'faker';

const mount = (el) => {
    let products = '';

    for(let i = 0; i < 5; i++){
        const name = faker.commerce.productName();
    
        products += `<div>${name}</div>`;
    }

   el.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which Definitely has an element with an id of 'dev-products'
// We want to immediately render our app in the element
const NODE_ENV = process.env.NODE_ENV;
console.log({NODE_ENV})

if(NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');

    // Assuming our container doesnt have an element
    // with id 'dev-prodcuts'
    if(el){
        // We are probably running in isolation
        mount(el)
    }
}
// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// We do not want to try to immediately render the app

export { mount };