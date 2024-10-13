import {  memo ,useRef } from "react";
export const Count =memo(() => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="Mt-3 font-display text-center">
      <p className="">
        nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
      </p>
    </div>
  );
});
// export default memo(Count);