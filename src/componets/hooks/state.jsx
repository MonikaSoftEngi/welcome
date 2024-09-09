export const state = () => {
    let value  = 0;
    const handleBuuttonClick = () =>{
        value++;
        console.log(value);
    };
    return (
        <>
        <h1></h1>
        <button onClick={handleButtonClick}>Increment</button>
        </>
    );
};