export function getJwt() {
  return localStorage.getItem("token");
}

export default {
  getJwt,
};
