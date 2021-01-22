import { useState } from "react";
import { Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider, useMutation } from "react-query";
import axios from "axios";
import { LoginForm } from "../components/LoginForm";
import { isLogged } from "../services/LoginValidation";

const queryClient = new QueryClient();

export function LoginQuery() {
  return (
    <QueryClientProvider client={queryClient}>
        <LoginFetch></LoginFetch>
    </QueryClientProvider>
  );
}

function LoginFetch() {
  const [{ err, success }, setResult] = useState({});

  const handleMutation = url => {
    addMutation.mutate(url, {
      onSuccess: res => {
        const { data } = res;

        if (data.statusCode == 200) {
          localStorage.setItem("token", data.data.token);
          setResult({ err: null, success: true });
          setTimeout(() => setResult({ success: false }), 2000);
        }

        if (data.statusCode == 400) {
          if (data.errors) {
            setResult({
              err: new Error("Need a valid email and password")
            });
          }

          if (data.error) {
            setResult({ err: new Error(data.error) });
          }
        }
      },
      onError: e => {
        console.log(e);
      }
    });
  };

  const addMutation = useMutation(({ email, password }) =>
    axios.post(`/auth/login`, {
      email: email.value,
      password: password.value
    })
  );


  return (
    <div>
      <div>
        {isLogged() ? (
          <Redirect to="/" />
        ) : (
          <LoginForm
            send={handleMutation}
            err={err}
            success={success}
          ></LoginForm>
        )}
      </div>
    </div>
  );
}
