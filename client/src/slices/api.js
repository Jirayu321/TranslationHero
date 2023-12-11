// export const url = "https://sserver-42uf.onrender.com/api";

export const url = "http://localhost:3001/api";

export const setHeaders = () => {
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  return headers;
};
