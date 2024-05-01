import "./App.css";
import Data from "./components/Data";

let arr = [
  {
    heading: "Getting started with the web",
    content:
      "Provides a practical introduction to web development for complete beginners.",
  },
  {
    heading: "HTML-Structuring the web",
    content:
      "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail",
  },
  {
    heading: "CSS-Styling the web",
    content:
      "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.",
  },
];

function App() {
  return (
    <div className="mainDiv">
      <h1>Topics covered</h1>
      <p>
        The following is a list of all topics we cover in the MDN learning area
      </p>

      {arr.map((ele) => {
        return (
          <Data heading={ele.heading} content={ele.content} key={ele.heading} />
        );
      })}
    </div>
  );
}

export default App;
