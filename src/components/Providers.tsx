import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";

export const Providers: React.FC = ({ children }) => (
  <HashRouter>
    <ChakraProvider {...{ children }} />
  </HashRouter>
);

export default Providers;
