
import {  memo ,useRef } from "react";
export const Count =memo(({ bioData }) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="Mt-3 font-display text-center">
      <p className="">
        nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
      <p>My name is {bioData.name}</p>
      </p>
    </div>
  );
});
// export default memo(Count);