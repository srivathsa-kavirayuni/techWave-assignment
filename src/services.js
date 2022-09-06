import axios from "axios";

const services = () => {
  const loadData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    });
  };
  return {
    loadData,
  };
};

export default services();
