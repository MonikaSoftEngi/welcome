import {UseId} from "react";
export const UseId = () => {
//   const usernameId = UseId();
//   const emailId = UseId();
//  const passwwoerdId = UseId();
//   return (
//     <form>
//       <div>
//         <label htmlFor={usernameId}>Username:</label>
//         <input type="text" id={usernameId} name="name" />
//       </div>
//       <div>
//         <label htmlFor={passwoedId}>Username:</label>
//         <input type="text" id={passwordId} name="password" />
//       </div>
//       <div>
//         <label htmlFor={emailId}>Email:</label>
//         <input type="email"id={emailId} name="email" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );


  const id = UseId();
  return (
    <form>
      <div>
        <label htmlFor={id + "usernameId"}>Username:</label>
        <input type="text" id={id + "usernameId"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>Username:</label>
        <input type="text" id={id + "passwordId"} name="password" />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email:</label>
        <input type="email"id={id + "emailId"} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
