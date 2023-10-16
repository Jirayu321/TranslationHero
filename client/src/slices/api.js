export const url = "https://sserver-42uf.onrender.com/api";

// export const url = "http://localhost:3001/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
