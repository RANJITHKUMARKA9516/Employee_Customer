import { useState } from "react";

function useLoading(initialValue = false) {
  const [loading, setLoading] = useState(initialValue);

  return {
    loading,
    startLoading: () => setLoading(true),
    stopLoading: () => setLoading(false),
  };
}

export default useLoading;