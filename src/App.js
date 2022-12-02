import "./styles.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarkDown from "react-markdown";
export default function App() {
  const [markDown, setMarkDown] = useState("Welcome to Markdown Editor");
  return (
    <>
      <Navbar />
      <div className="container">
        <textarea
          className="left-side"
          value={markDown}
          onChange={(e) => {
            setMarkDown(e.target.value);
          }}
        ></textarea>
        <div className="right-side">
          <MarkDown>{markDown}</MarkDown>
        </div>
      </div>
      <Footer />
    </>
  );
}
