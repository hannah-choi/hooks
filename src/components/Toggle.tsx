import { useToggle } from "@/hooks/useToggle";

export const Toggle = () => {
  const { value, toggle } = useToggle(false);

  return (
    <div className="p-4">
      <button onClick={toggle} className="border-white border p-2 rounded mb-2">
        Toggle
      </button>
      <p className="font-bold">{value.toString()}</p>
    </div>
  );
};
