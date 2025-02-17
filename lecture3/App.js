import React from "react";
import ReactDOM from "react-dom/client";

//React.creteElement => Object => whent it render it become =>HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namste react 🚀");
console.log(heading);

/** JSX - HTML-like or XML-like syntax
 * This is <H1> tag is the similar as the above React.createElement
 * This use the jsx syntax
 * JSX (transpile before it reaches the JS) - PARCEL -> Use babel convert jsx code readble for JS engine
 * JSX =>Babel transpile into React.createElement =>ReactElement JS is Object => HTMLElement(render)
 */
//React Element (You can put React element insede other react element)
const elm = <h1>this element</h1>;
const jsxElement = (
  <div id="heading">
    <h1 className="h1Tag">Namaste kamal deep</h1>
    <div className="element">{elm}</div>
  </div>
);

//React Component
// Class Based Component - old component
// Functional Component - New(Now days used)
const TitleComponent = () => {
  return <h1 className="title"> This is the title component</h1>;
};

// Component Composition =>
// (one component insede other component that are the component composition)
const HeadingComponent = () => {
  const num = 1000;
  return (
    <div className="conatiner">
      <h2>{jsxElement}</h2>
      <TitleComponent />
      <h1 className="heading"> Namste react functional component1</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));

// // This way to render the React element
// root.render(jsxElement);

// // This way to render the React Component
// root.render(HeadingComponent());
root.render(<HeadingComponent />);
