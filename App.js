// const heading = React.createElement("h1", {id: "heading"}, "Hemlo from React");
//{} above is the place where we'll give attributes to our tags, suupose
//the h1 tag needs to have an id then we {id: "heading"}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
/**
 * <div id = "parent">
 *     <div id ="child">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag- Sibling </h2>
 *     </div>
 *     <div id ="child2">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag- Sibling </h2>
 *     </div>
 * </div>
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";

// const parent = [
//   React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
      //-- React.createElement("h1", {}, "I'm h1 tag") //Single tag at child level
    //   [
    //     React.createElement("h1", { id: "heading" }, "I'm h1 tag"),
    //     React.createElement("h2", {}, "I'm h2 - sibling tag of h1"),
    //   ] //--sibling tags at same level
      //--if you want to have siblings ie, if you wangt to have 2 h1 tags together, you are supposed to write it as an array [...]
//     )
//   ),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 - sibling tag of h1"),
//   ]),
// ];

// --const heading = React.createElement("h1 ", {id: "heading"}, "Hemlo from React");
// --console.log(heading); // object
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// --root.render(heading);
// root.render(parent);

const jsxHeading = (
    <h1 className="head" tabIndex = "5">
        Namaste React using JSX 🤖
    </h1>
);

// console.log(jsxHeading);

//------REACT COMPONENTS = Functional based components--------//
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
