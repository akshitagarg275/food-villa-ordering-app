import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>H1 heading using JSX</h1>

const HeadingComponent = () => {
    return (<h2>Heading JS component</h2>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);