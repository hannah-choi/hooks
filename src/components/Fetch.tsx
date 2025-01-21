import { useFetch } from "@/hooks/useFetch";

export const Fetch = () => {
  const { isLoading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <div className="p-4">
      {!isLoading && <p>{JSON.stringify(data)}</p>}
      {error && <p>can't get the data</p>}
    </div>
  );
};
