import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Divider,
  Flex
} from "@chakra-ui/react";

export function DomainForm({ send, error, success }) {
  const [url, setURL] = useState("");
  return (
    <div>
      <Flex
        style={
          error
            ? { border: "1px solid #ff4d4d" }
            : { border: "1px solid #a7a7a7" }
        }
      >
        <Flex align="center" p="0 1rem">
          <label htmlFor="url" style={{ fontSize: "14px", color: "#a7a7a7" }}>
            URL
          </label>
          <Divider
            orientation="vertical"
            h="80%"
            ml="8px"
            color={error ? "#ff4d4d" : "a7a7a7"}
          />
        </Flex>
        <Box w="90%">
          <input
            name="url"
            placeholder="https://www.example.com"
            value={url}
            onChange={e => setURL(e.target.value)}
            type="text"
            style={{ width: "100%", padding: "8px 12px" }}
          />
        </Box>
        <Box
          onClick={() => {
            send(url);
          }}
          w="10%"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            borderLeft: "1px solid #a7a7a7"
          }}
        >
          <Flex align="center" h="100%" justify="center">
            <ChevronRightIcon></ChevronRightIcon>
          </Flex>
        </Box>
      </Flex>
      {error && (
        <Alert status="error" mt="6px" variant="left-accent">
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert status="success" mt="6px" variant="left-accent">
          <AlertIcon />
          <AlertDescription>URL tracked success</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
