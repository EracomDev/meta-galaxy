import { configureStore } from "@reduxjs/toolkit";
import SideDisplaySlice from "./../Redux/SideDisplaySlice";
import Accounts from "./Accounts";
import BaseInfo from './BaseInfo';
import Contract from './Contract';
export default configureStore({
  reducer: {
    sideDisplay: SideDisplaySlice,
     account:Accounts,
        contract:Contract,
        baseInfo:BaseInfo,
  },
});
