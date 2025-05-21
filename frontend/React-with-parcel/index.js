import React from "react";

import ReactDOM from "react-dom/client";

// paragraph element 
const paraelement = React.createElement("p",null,"hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(paraelement)