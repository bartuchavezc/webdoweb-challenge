import { useState } from "react";
import { Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider, useMutation } from "react-query";
import axios from "axios";
import { SignupForm } from "../components/SignupForm";

const queryClient = new QueryClient();

export function SignupQuery() {
  return (
    <QueryClientProvider client={queryClient}>
        <SignupFetch></SignupFetch>
    </QueryClientProvider>
  );
}

function SignupFetch() {
  const [{ err, success }, setResult] = useState({});

  const handleMutation = url => {
    addMutation.mutate(url, {
      onSuccess: res => {
        const { data } = res;

        if (data.statusCode == 200) {
          setResult({ err: null, success: true });
          setTimeout(() => setResult({ success: false }), 2000);
        }

        if (data.statusCode == 400) {
          if (data.errors) {
            setResult({
              err: new Error("Need a valid email, password and complete name")
            });
          }

          if (data.error) {
            console.log(data.error);
            setResult({ err: new Error(data.error) });
          }
        }
      },
      onError: e => {
        console.log(e);
      }
    });
  };

  const addMutation = useMutation(({ email, password, fullname }) =>
    axios.post(`/auth/signup`, {
      email: email.value,
      fullname: fullname.value,
      password: password.value
    })
  );


  return (
    <div>
      <div>
        {success ? (
          <Redirect to="/login" />
        ) : (
          <SignupForm
            send={handleMutation}
            err={err}
            success={success}
          ></SignupForm>
        )}
      </div>
    </div>
  );
}
