import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NewHomepage from "./pages/NewHomepage";
function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<NewHomepage />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
