// Creating multiple element by using React.createElement
    const heading1=React.createElement("h1",
    {
        id:"title",
        key:1
    },
    "heading 1");
    const heading2=React.createElement("h2",
    {
        id:"title",
        key:2
    },
    "heading 2");
    const container=React.createElement("div",
    {
        id:"container"
    },
    [heading1,heading2]);
    console.log(container)
    const root=ReactDOM.createRoot(document.getElementById("container"));
    root.render(container);