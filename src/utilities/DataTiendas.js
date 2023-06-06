import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://quickgold.es/archivos-cache/Fixingbarcelona.txt")
      .then((response) => response.json())
      .then((barcelona) => {
        setData(barcelona);
        setLoading(true);
      });
  }, []);
  return {
    data,
    loading,
  };
};
