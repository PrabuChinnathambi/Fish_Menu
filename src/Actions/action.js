

export const getProducts = (datas) => {
   return{
       type: "GET_PRODUCTS",
       payload: datas,
   };
};


export const cartProducts = (data) => {
    return ({
        type: "CART_PRODUCTS",
        payload: data
    })
}




