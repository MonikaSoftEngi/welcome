import { useEffect, useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ data, setData, UpdateDataApi,setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  // get thhe data and add into field

useEffect(()=>{
  UpdateDataApi &&
  setAddData({
    title:UpdateDataApi.title || "",
    body:UpdateDataApi.body ||"",
  });
  },[UpdateDataApi]);



  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
    console.log("res", res);
    if ((res.status === 201)) {
      setData([...data, res.data]);
      setAddData({title:"",body:""});
    }
  };

  // form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    addPostData();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          placeholder="Add Post"
          id="body"
          name="body"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
