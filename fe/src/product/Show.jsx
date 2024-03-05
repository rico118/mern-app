import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
export function Show() {
  const { id } = useParams()
  const url = baseUrl + "/product" + id;
  const [data, setData] = useState([]);
  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>
        {data.title}
      </h1>
      <h2>
        {data.price}
      </h2>
    </>

  )

}