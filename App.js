/**
 * In Normal HTML
 * <div id="parent">
 *    <div id="Child">
 *        <h1></h1>
 *        <h2></h2>
 *    </div>
 * </div>
 */

const parent=React.createElement(
  "div",
  {id:"parent"},
  React.createElement(
    "div",
    {id:"child1"},
    [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")
  ]),
  React.createElement(
    "div",
    {id:"child2"},
    [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")
  ]),
);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

//hello world Program
 //const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");
 //console.log(heading) -> object
 //const root = ReactDOM.createRoot(document.getElementById("root"));
 //root.render(heading);