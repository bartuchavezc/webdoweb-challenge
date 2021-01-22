import { useState } from "react";
import { QueryClient, QueryClientProvider, useMutation } from "react-query";
import axios from "axios";
import { DomainForm } from "../components/DomainForm";

const queryClient = new QueryClient();

export function AddDomainQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <DomainsFetch></DomainsFetch>
    </QueryClientProvider>
  );
}

function DomainsFetch() {
  const [result, setResult] = useState({});

  const handleMutation = url => {
    addMutation.mutate(url, {
      onSuccess: data => {
        if (data.data.statusCode === 200) {
          setResult({ success: true, error: null });
          setTimeout(() => setResult({ success: false }), 2000);
        }

        if (data.data.statusCode === 400)
          setResult({
            success: false,
            error: new Error(data.data.errors.url.msg)
          });
      },
      onError: e => {
        setResult({
          sucess: false,
          error: new Error("Ups! something was wrong try later.")
        });
      }
    });
  };

  const addMutation = useMutation(value => axios.post(`/api/v1/track?url=${value}`));

  return (
    <DomainForm
      send={handleMutation}
      error={
        result && !result.success && result.error ? result.error.message : null
      }
      success={result && result.success}
    ></DomainForm>
  );
}
