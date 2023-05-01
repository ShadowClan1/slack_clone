import productsReducer from "./slices/products";
import popupReducer from "./slices/popup";
import userReducer from "./slices/user";
import chatScreenReducer from "./slices/chatscreen";
import messagesReducer from "./slices/messages";
import thunk from "redux-thunk";


const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer : {
product : productsReducer,
popup : popupReducer,
user : userReducer,
chatScreen : chatScreenReducer,
messages : messagesReducer
    }
    
})

export default store;