import React, { useState, useEffect } from "react";
import { user } from "../reducers/user";
import { useSelector } from "react-redux";
export const useFetch = ({ url }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const token = useSelector((store) => store.user.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
