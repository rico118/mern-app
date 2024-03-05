import { stripBasename } from "@remix-run/router";
import { useState } from "react";
export function Post() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [message, setMessage] = useState("");
    const formDefault = { title: "", price: 0 };
    const [formData, setData] = useState(formDefault);
    const url =baseUrl + "/product";
    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(formData),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setData(formData);
                setMessage("Product created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (<div className="App">

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="Title"
                onChange={handleChange}
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                placeholder="Price"
                onChange={handleChange}
            />
            <button type="submit">Create</button>


            <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
    </div>)
}