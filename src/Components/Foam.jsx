import { useEffect, useState } from "react";
import { postData , UpdateData} from "../api/PostApi";

export const Form = ({ data, setData, UpdateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  let isEmpty = Object.keys(UpdateDataApi).lenght === 0;

  // get thhe data and add into field

  useEffect(() => {
    UpdateDataApi &&
      setAddData({
        title: UpdateDataApi.title || "",
        body: UpdateDataApi.body || "",
      });
  }, [UpdateDataApi]);

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
    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
     
    }
  };
  // updatePostdata
  const UpdatePostData =  async () => {
    try {
      const res  = await UpdateData(UpdateDataApi.id,addData);
 console.log(res);
if (res.status === 200) {
 setData((prev) => {
  return prev.map((curElem ) => {
 return curElem .id ===  res.data.id ? res.data : curElem;
});
 });
 setAddData({ title: "", body: "" });
 setUpdateDataApi({});
    }
   } catch ({ error}) {
      console.log(error);
    }
};

  // form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
 const action = e.navitiveEvent.submitter.value;
 if(action === "Add"){
 addPostData();
 } else if (action === "Edit") {
    UpdatePostData();

    }
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


      <button type="submit" value={isEmpty ? "Add" : "Edit"}>
        {isEmpty ? "Add" : "Edit"}
      </button>
    </form>
  );
};
