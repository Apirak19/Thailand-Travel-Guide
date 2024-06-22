import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
