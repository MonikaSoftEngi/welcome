import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";
import { Form } from "./Foam";


export const Posts = () => {
  const [data, setData] = useState([]);
  const [UpdateDataApi,setUpdateDataApi] = useState({});
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // function to delete
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curpost) => {
          return curpost.id === id;
        });
        setData(newUpdatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };

// handleUpdatePost
  const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);

  
  return (
    <>
      <section  className="section-form">
        <Form 
        data={data}
         setData={setData} 
         UpdateDataApi={UpdateDataApi}
        setUpdateDataApi={setUpdateDataApi }
        />
      </section>
      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button onClick={()=> handleUpdatePost(id)}>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
