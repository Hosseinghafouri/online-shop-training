alert(`1)  Hi, welcome to our store 👋🏼

Our available products include:

Product Name :   price :
mobile           $1099
laptop           $3499
webcam           $61
microphone       $50
headphone        $40
speaker          $39

Please enter one of the products listed above to add the product to your cart 👆🏼👆🏼
(Enter the product name is enough)
`)
// products store.
let products = [
    {id: 1, name: 'mobile', price: 1099},
    {id: 2, name: 'laptop', price: 3499},
    {id: 3, name: 'webcam', price: 61},
    {id: 4, name: 'microphone', price: 50},
    {id: 5, name: 'headphone', price: 40},
    {id: 6, name: 'speaker', price: 39}
  ];
  // User's shopping cart.
  let userBasket = [
    {id: 1, name: 'webcam', price: 61},
    {id: 2, name: 'speaker', price: 39}
  ];
  console.log(userBasket);
  // The name of the product that the user is going to add to her shopping cart.
  let userProduct = prompt("2) Dear user, add the product you want to add to your shopping cart:");
  /*
  Availability or unavailability of the product at the request of the user:
  If the product is available, it will be added to the user's shopping cart, and the total price of the shopping cart will be calculated and displayed.
  Otherwise, it will display the absence of the product to the user.
  */
  let requestProduct;
  let is_In_Product = products.some((product)=> {
    if (product.name === userProduct) {
       requestProduct = product;
      return true;
    }
  });
  if (is_In_Product === true) {
    let newProduct = {
      id: 3,
      name: requestProduct.name,
      price: requestProduct.price
    };
    // console.log(newProduct);
   userBasket.push(newProduct);
   let allPrice = 0 ;
    userBasket.forEach((product)=> {
       allPrice = allPrice + product.price;
       console.log(product.name , product.price);
    });
    alert(`The product has been added to your shopping cart :) 🥳🎉

    The total price of your shopping cart : ` + '$' + allPrice);
  
    }else{
      alert("Sorry, this product is not available in our store :(");
    }