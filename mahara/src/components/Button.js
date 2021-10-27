import { memo } from "react";

export const Button = memo(({ label, onClick, n }) => {
  return (
    <button className="btn btn-primary m-2" onClick={() => onClick(n)}>
      {label}
    </button>
  );
});
