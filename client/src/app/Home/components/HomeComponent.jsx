import React from "react";
import { Center, Container, Divider } from "@chakra-ui/react";
import { GetDomainsQuery } from "../../Domain/querys/GetDomainsQuery";
import { AddDomainQuery } from "../../Domain/querys/AddDomainQuery";

import { AuthActions } from '../../Auth/components/AuthActions';

export function HomeComponent() {
  return (
    <Container mt="3rem">
      <header>
        <AddDomainQuery></AddDomainQuery>
      </header>
      <Container mt="3rem">
        <Center p="2rem">
          <h1>TOP 3 DOMAINS</h1>
        </Center>
        <GetDomainsQuery></GetDomainsQuery>
      </Container>


      <footer style={{ paddingBottom: "3rem" }}>
          <Center p="3rem">
            <Divider w="100px" />
          </Center>
          <AuthActions></AuthActions>
        </footer>
    </Container>
  );
}
