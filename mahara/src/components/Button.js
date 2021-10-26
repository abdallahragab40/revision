import { useRef, memo } from "react";

export const Button = memo(({ label, counterFn, n }) => {
  const renderRef = useRef(0);
  console.log(renderRef.current++);

  return (
    <button className="btn btn-secondary m-2" onClick={() => counterFn(n)}>
      {label}
    </button>
  );
});
