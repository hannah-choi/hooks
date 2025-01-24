import { useCount } from "@/hooks/useCount";

export const Count = () => {
  const { count, increment, decrement } = useCount(0);

  return (
    <div className="p-5">
      <button
        className="border p-2 rounded display: inline"
        onClick={() => increment()}
      >
        +
      </button>
      <h1 className="font-bold text-2xl display: inline m-5">{count}</h1>
      <button
        className="border p-2 rounded display: inline"
        onClick={() => decrement()}
      >
        -
      </button>
    </div>
  );
};
