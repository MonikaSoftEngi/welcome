import "./index.css";
export const ContactForm = () => {
  const ContactForm = () => {
    // const [username, setUsername] = useState("");
    //     const [email, setEmail] = useState("");
    //     const [message, setMessage] = useState("");

    const [contact, setContacts] = {
      username: "",
      email: "",
      massage: " ",
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setContacts((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    const handleFormSubmit = (e) => {
      e.preventDefault();
    //   const ContactData = {
    //     username,
    //     email,
    //     massage,
    //   };
      console.log(contacts);
    };

    return (
      <div className="container">
        <div className="card">
          <h1>Contact Form</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlfor="username">Username</label>
            <input
              type="text"
              name="username"
              required
              autoComplete="off"
              value={Contacts.username}
              //   onChange={(e)=> setUsername (e.target.value)}
              onChange={handleInputChange}
            />

            <label htmlfor="email">Email</label>
            <input
              type="email"
              name=" email"
              required
              autoComplete="off"
              value={Contact.email}
              //   onChange={(e)=> setEmail (e.target.value)}
              onChange={handleInputChange}
            />

            <label htmlfor="message">Message</label>
            <textarea
              type="password"
              name="message"
              required
              autoComplete="off"
              rows="6"
              value={Contact.message}
              //   onChange={(e)=> setMeassage (e.target.value)}
              onChange={handleInputChange}
            />
            <button type="submit">send Message</button>
          </form>
        </div>
      </div>
    );
  };
};
