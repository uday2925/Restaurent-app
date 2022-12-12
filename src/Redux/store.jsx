import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { combineReducers } from "redux";
import tablereducer from "./reducers/tablereducer";
import { filterreducer } from "./reducers/filterreducer";
import { orderreducer } from "./reducers/orderreducer";



const rootreducer=combineReducers({tablereducer:tablereducer,filterreducer:filterreducer,orderreducer:orderreducer})


const store=legacy_createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)));



export default store