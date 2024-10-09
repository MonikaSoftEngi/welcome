export const ParentComponents = () => {
  return (
    <section
      className={`p-4 h-Lvh font-display taracking-wider flex
   flex-col justify-center items-center bg-gray-900 text-white`}
    >
      <h1>Component A</h1>
      <ChildComponent data="React Js" />
    </section>
  );
};

const ChlidComponent = (props) => {
  return (
    <>
      <h1>Hello, I am component B </h1>
      <GrandChlidComponent data={props.data} />
    </>
  );
};

const GrandChlidComponent = (props) => {
  return (
    <>
      <h1>Hello, I am component C </h1>
      <GrandGrandChlidComponent data={props.data} />
    </>
  );
};


const GrandGrandChlidComponent = (props) => {
    return (
      <>
        <h1>Hello, I  Love React Js {props.data}</h1>
        
      </>
    );
  };