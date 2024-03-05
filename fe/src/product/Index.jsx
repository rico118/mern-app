import '../App.css'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
export  function Index() {
const baseUrl = "HTTP://localhost:4000" ;
  const url =baseUrl + "/product";

  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>


      <h1 style={{ color: "green" }}>API Fetch Product</h1>
      <center>

        {data.map((dataObj, index) => {

          return (
            <Link to={"/product/"+dataObj._id} key={dataObj._id}>
              <div
                style={{
                  width: "15em",
                  backgroundColor: "#35D841",
                  padding: 2,
                  borderRadius: 10,
                  marginBlock: 10,
                }}
              >
                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.title}</p>
                <p style={{ fontSize: 18, color: 'red' }}>{dataObj.price}</p>
              </div>
            </Link>
          );

        })}

      </center>
    </>
  )
}

