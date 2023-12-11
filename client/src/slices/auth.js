// import fs from "fs";
import {
  createSlice,
  createAsyncThunk,
  // combineReducers,
} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { url } from "./api";

// import { createWorker } from "tesseract.js";
// import { createCanvas, loadImage } from "canvas";

// import { translate } from "@vitalets/google-translate-api";
// import createHttpProxyAgent from "http-proxy-agent";
// const { Translate } = require("@google-cloud/translate").v2;
// import { OpenAI } from "openai";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  user: "",
  _id: "",
  type: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      console.log("auth_values:", values);
      const token = await axios.post(`${url}/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        mobilePhone: values.mobilePhone,
        imgProfile: values.imgProfile,
        companyName: values.companyName,
        juristicPersonNumber: values.juristicPersonNumber,
        website: values.website,
        address: values.address,
        district: values.district,
        province: values.province,
        country: values.country,
        postalCode: values.postalCode,
        bankname: values.bankname,
        branchname: values.branchname,
        accountname: values.accountname,
        accountnumber: values.accountnumber,
        watermark: values.watermark,
        certificate: values.certificate,
        languages: values.languages,
        idcard: values.idcard,
        education: values.education,
        portfolio: values.portfolio,
        documents: values.documents,
        answer: values.answer,
        question: values.question,
        type: values.type,
      });

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    console.log("values :", values);
    try {
      const token = await axios.post(`${url}/login`, {
        email: values.email,
        password: values.password,
        // type: values.type,
      });

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (values, { rejectWithValue }) => {
    console.log("values :", values);
    try {
      const token = await axios.get(`${url}/getUsers/`);
      console.log("getUser:", token.data);

      // Attempt to decode the token
      const decodedToken = jwtDecode(token.data);
      console.log("Decoded Token:", decodedToken);

      return token.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getEmail = createAsyncThunk(
  "auth/getEmail",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/getEmail`, {
        email: values,
      });

      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateOrder = createAsyncThunk(
  "auth/updateOrder",
  async (values, { rejectWithValue }) => {
    try {
      // console.log("id:", id);
      console.log("values", values?.id);
      const token = await axios.patch(`${url}/updateOrder/${values?.id}`, {
        Date: values.Date,
        Translator_name: values.Translator_name,
        Customer_name: values.Customer_name,
        Job_description: values.Job_description,
        Customers_will_get: values.Customers_will_get,
        Deadline: values.Deadline,
        Number_of_edits: values.Number_of_edits,
        Price: values.Price,
        Order_type: values.Order_type,
        Status: values.Status,
        Send_to: values.Send_to,
        Review: values.Review,
      });
      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createOrder = createAsyncThunk(
  "auth/createOrder",
  async (values, { rejectWithValue }) => {
    let y = values.y.at(0);
    try {
      console.log("values:", values);
      const token = await axios.post(`${url}/createOrder`, {
        file: y.file,
        document_Type: y.document_Type,
        translation_Type: y.translation_Type,
        tranfrom: y.tranfrom,
        tranto: y.tranto,
        Deadline: y.Deadline,
        Additional_explanation: y.Additional_explanation,
        type: y.type,
        Price: values.x.Price,
        orderNumber: values.x.orderNumber,
        Translator_name: y.Translator_name,
        data: values.y,
      });
      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getOrder = createAsyncThunk(
  "auth/getOrder",
  async (values, { rejectWithValue }) => {
    // console.log("getOrder:", values);
    try {
      const token = await axios.get(`${url}/getOrder/`, {
        params: {
          Translator_name: values,
        },
      });
      console.log("getOrder:", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const generationsAI = createAsyncThunk(
  "auth/generationsAI",
  async (values, { rejectWithValue }) => {
    try {
      const Data_01 = values.data;

      const token = await axios.post(`${url}/generationsAi`, {
        orderNumber: values.orderNumber,
        date: getCurrentDate(),
        textArray: Data_01,
      });
      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

function getCurrentDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;

  return `${month}/${day}/${year}`;
}

// Example usage:
// const token = await dispatch(generationsAI(values));
// console.log('Resulting data:', token);

// export const getOrder = async (values) => {
//   console.log("values:", values);
//   try {
//     const token = await axios.get(`${url}/getOrder`, {
//       params: { Translator_name: values.Translator_name },
//     });
//     await console.log(token?.data);
//     return token.data;
//     // setDataOrder(token?.data);
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       throw new Error("Translator not found");
//     } else if (error.response && error.response.status === 500) {
//       throw new Error("Internal server error");
//     } else if (error.response && error.response.status === 400) {
//       throw new Error("Bad request");
//     } else {
//       throw new Error("Something went wrong");
//     }
//     // return rejectWithValue(error.response.data);
//     // console.log(error.response);
//   }
// };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          type: user.type,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },

    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        type: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          type: user.type,
          registerStatus: "success",
        };
      } else return state;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });

    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          type: user.type,
          loginStatus: "success",
        };
      } else return state;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });

    builder.addCase(getUser.pending, (state, action) => {
      return {
        ...state,
        getUserStatus: "pending",
      };
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          type: user.type,
          getUserStatus: "success",
        };
      } else return state;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      return {
        ...state,
        getUserStatus: "rejected",
        getUserError: action.payload,
      };
    });

    builder.addCase(logoutUser, (state, action) => {
      console.log("Logging out user...");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        name: "",
        email: "",
        _id: "",
        type: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
