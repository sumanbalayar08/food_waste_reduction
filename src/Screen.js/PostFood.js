import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";

const PostFood = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const uploadImage = () => {};

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setData((preve)=>{
        return{
          ...preve,
          [e.target.name] : e.target.value
        }
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={data.name}
          className="bg-slate-200"
        />
        <label htmlFor="image">Image</label>
        <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer">
          {data.image ? (
            <img src={data.image} className="h-full" />
          ) : (
            <span className="text-5xl">
              <BsCloudUpload />
            </span>
          )}

          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={uploadImage}
            className="hidden bg-slate-200"
          />
        </div>
        <label>Price</label>
        <input
          type="number"
          onChange={handleChange}
          value={data.price}
          name="price"
          className="bg-slate-200"
        />
        <label>Description</label>
        <textarea
          type="text"
          onChange={handleChange}
          value={data.description}
          name="description"
          className="bg-slate-200 py-1 resize-none"
          rows={5}
        />
      </form>
    </div>
  );
};
export default PostFood;
