function profile() {
    return (
        <div>
        <h1>profile card challenge</h1>
        <profilecard
        name = "Alice"
        age={30}
        greeting={
            <div>
                <strong> Hi Alice have a wonderful day!</strong>
        </div>
        }
        >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </profilecard>
        <profilecard
     name="Bob"
     age={25}
     greeting={
        <div>
            <strong>Hello Bob, Keep up the great work!</strong>
        </div>
     }
     >
      <p>Hobbies: Gaming, Cooking</p>
      <button>Contact</button>

    </profilecard>
    </div>
    );
};
export default profile;


function profilecard(props){
return(
    <>
    <h2>Name:{props.name} </h2>
    <p>Age:{props.age}</p>
     <p>{props.greeting}</p>
     <div></div>
    </>
);
};