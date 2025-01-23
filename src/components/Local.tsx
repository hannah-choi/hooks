import { useLocalStorage } from "@/hooks/useLocalStorage";

export const Local = () => {
  const catBreed = [
    "Siamese",
    "Russian blue",
    "Korean short hair",
    "British short hair",
    "Persian",
    "Turkish angora",
  ];

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const { item, setItem } = useLocalStorage("catBreed", "Siamese");

  return (
    <div className="p-2">
      <p>{item.toString()}</p>
      <button
        className="border p-2 mt-2"
        onClick={() => setItem(catBreed[getRandomInt(catBreed.length)])}
      >
        Change cat breed
      </button>
    </div>
  );
};
