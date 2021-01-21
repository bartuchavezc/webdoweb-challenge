import React, { useState } from "react";
import { DomainItem } from './DomainItem';
import { Container } from "@chakra-ui/react";

export function DomainList(props) {
  return (
    <Container>
       { props.domains.map((data, index) => {
        return <DomainItem 
          key={index}
          domain={data.domain}
          views={data.count}></DomainItem>
       }) }
    </Container>
  );
}
