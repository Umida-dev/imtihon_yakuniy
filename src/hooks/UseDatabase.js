import { useState, useCallback } from "react";
import { axiosInstance } from "../utils";

export function useDatabase(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = useCallback(async (requestFn) => {
    setIsPending(true);
    try {
      await requestFn();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsPending(false);
    }
  }, []);

  const getPost = useCallback(() => {
    handleRequest(async () => {
      const res = await axiosInstance.get(url);
      setData(res.data);
    });
  }, [handleRequest, url]);

  const postData = useCallback(
    (payload) => {
      handleRequest(async () => {
        const res = await axiosInstance.post(url, payload);
        setData((prev) =>
          Array.isArray(prev) ? [...prev, res.data] : [res.data]
        );
      });
    },
    [handleRequest, url]
  );

  const deletePost = useCallback(
    (id) => {
      handleRequest(async () => {
        await axiosInstance.delete(`${url}/${id}`);
        setData((prev) => prev.filter((item) => item.id !== id));
      });
    },
    [handleRequest, url]
  );

  return { data, isPending, error, getPost, postData, deletePost };
}
