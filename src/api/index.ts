import axios from "axios";

const PROXY = window.location.hostname === "localhost"
  ? "https://cors-anywhere.herokuapp.com"
  : "/cors-proxy";

export const searchAPIcall = async (query: string) => {
  try {
    const result = await axios(
      `${PROXY}/https://suggestqueries.google.com/complete/search?client=firefox&q=${query}`
    );
    return result;
  } catch (err) {
    console.log(err);
    return;
  }
};
