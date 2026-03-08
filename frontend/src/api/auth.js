const BASE_URL = "http://localhost:5000/api/auth";

export const signup = async (
  name,
  phoneNumber,
  email,
  password,
  companyName,
) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phoneNumber, email, password, companyName }),
  });
  return res.json();
};

export const login = async (email, password) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};
export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
