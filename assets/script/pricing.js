function calc_price(){
    let num = document.querySelector("input");
    let discount = document.querySelector(".discount-price");
    let price_pos = document.querySelector(".main-class");
    let main_price = price_pos.querySelector("h4");

    let price = num.value;
    price *= 1500;
    let d_price = price - (0.02*price);

    toString(d_price);
    toString(price);
    
    discount.innerHTML = "N" + d_price;
    main_price.innerHTML = "N" + price;
}