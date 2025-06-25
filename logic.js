const header_1 = React.createElement('h1', {id: "first", className: "class_", style:{backgroundColor: "grey", color: "white"}}, "Vivek Singh Pokhariya");
const header_2 = React.createElement('h2', {id: "second", className: "class_"}, "Hello Coder Army");
const parent_div = React.createElement('div', {}, [header_1, header_2]);

const root_1 = ReactDOM.createRoot(document.getElementById("root"));
root_1.render(parent_div);
// root_1.render(header_1);
// root_1.render(header_2);