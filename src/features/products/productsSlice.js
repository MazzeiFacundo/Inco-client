import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const productsSlice = createSlice({
    name: "product",
    initialState: {
        currentProducts: [],
        currentProductDetails: [],
        productGallery: [],
        userToken: "",
        currentUser: {},
        currentUserById: {},
        currentUserProducts: [],
    },
    reducers: {
        showAll: (state, action) => {
            state.currentProducts = action.payload;
        },
        showCurrentUserProducts: (state, action) => {
            state.currentUserProducts.push(state.currentUser.products)
        },
        showCurrentUserProducts: (state, action) => {
            state.currentUserProducts.push(state.currentUser.products)
        },
        showCurrentProductDetails: (state, action) => {
            state.currentProductDetails[0] = action.payload
        },
        showCurrentProductGallery: (state, action) => {
            state.productGallery = [action.payload]
        },
        getToken: (state, action) => {
            state.userToken = action.payload
        },
        getUserInfo: (state, action) => {
            state.currentUser = action.payload
        },
        getUserInfoById: (state, action) => {
            state.currentUserById = action.payload
        },
    }
});

export const showAllProducts = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProducts");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsASC = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsASC");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsDESC = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsDESC");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsOneRoom = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsOneRoom");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsTwoRooms = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsTwoRooms");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsThreeRooms = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsThreeRooms");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsFourRoomsPlus = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsFourRoomsPlus");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsOneDorm = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsOneDorm");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsTwoDorms = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsTwoDorm");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsThreeDorms = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsThreeDorm");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsFourDormsPlus = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsFourDormPlus");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsOneBath = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsOneBath");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsTwoBaths = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsTwoBath");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsThreeBaths = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsThreeBath");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const showAllProductsFourBathsPlus = (data) => async (dispatch) => {
    try {
        const response = await axios.get("https://inco-server-production.up.railway.app/allProductsFourBathPlus");
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const getCurrentProductDetail = (productId) => async (dispatch) => {
    try {
        const response = await axios.get(`https://inco-server-production.up.railway.app/productById?id=${productId}`);
        dispatch(showCurrentProductDetails(response.data));
    } catch (err) {
    }
};

export const getProductsGallery = (productId) => async (dispatch) => {
    try {
        const response = await axios.get(`https://inco-server-production.up.railway.app/getGalleryProduct?id=${productId}`);
        dispatch(showCurrentProductGallery(response.data));
    } catch (err) {
    }
};

export const getCurrentUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.get(`https://inco-server-production.up.railway.app/profileInfoToken?token=${userData}`);
        dispatch(getUserInfo(response.data));
    } catch (err) {
    }
};

export const getCurrentUserById = (userId) => async (dispatch) => {
    try {
        const response = await axios.get(`https://inco-server-production.up.railway.app/profileInfoById?id=${userId}`);
        dispatch(getUserInfoById(response.data));
    } catch (err) {
    }
};


export const getProductsSearched = (productName) => async (dispatch) => {
    try {
        const response = await axios.get(`https://inco-server-production.up.railway.app/allProducts?name=${productName}`);
        dispatch(showAll(response.data));
    } catch (err) {
    }
};

export const deleteGalleryImage = (imageId) => async (dispatch) => {
    try {
        const response = await axios.delete(`https://inco-server-production.up.railway.app/galleryImageDelete?id=${imageId}`);
    } catch (err) {
    }
};


export const {
    showAll,
    showAllAsc,
    showAllDesc,
    getToken,
    getUserInfo,
    getUserInfoById,
    showCurrentUserProducts,
    showCurrentProductDetails,
    showCurrentProductGallery,
    getTypesOfDeals
} = productsSlice.actions
export const showProducts = (state) => state.product.currentProducts;
export const showProductGallery = (state) => state.product.productGallery;
export const showUserData = (state) => state.product.currentUser;
export const showUserDataById = (state) => state.product.currentUserById;
export const userProducts = (state) => state.product.currentUserProducts;
export const productDetail = (state) => state.product.currentProductDetails;

export default productsSlice.reducer