import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { DomainList } from "../components/DomainList";
import { Center } from "@chakra-ui/react";

const queryClient = new QueryClient();

export function GetDomainsQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <DomainsFetch></DomainsFetch>
    </QueryClientProvider>
  );
}

function DomainsFetch() {
  // const queryClient = useQueryClient();
  const [fetchIntelval, setFetchInterval] = useState(1000);

  const { status, data, error, isFetching } = useQuery(
    "domains",
    async () => {
      const res = await axios("/track");
      return res.data;
    },
    { refetchInterval: fetchIntelval }
  );

  // const addMutation = useMutation(value => fetch(''))
  if (status === "loading") console.log("Loading ..");
  if (status === "error") console.log(error.message);

  return data && data.data ? (
    <DomainList domains={data.data}></DomainList>
  ) : (
    <Center>
      <p>working...</p>
    </Center>
  );
}
