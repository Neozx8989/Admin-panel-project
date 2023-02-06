import axios from "axios";

async function deleteProduct (productId, setUserProductData, URL) {
    const FETCHED_DATA = await axios ({
        url: URL,
        method: "DELETE",
        data: {
            productId: productId
        },
    });
    setUserProductData(FETCHED_DATA.data.data)
}

export {deleteProduct} 