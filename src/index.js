const h2 = React.createElement(
  "h2",
  { className: "subHeading" },
  "Using React"
);

const root = ReactDOM.createRoot(document.querySelector("#react"));
root.render(h2);

// inner formation is somewhat like

// const root = ReactDOM.createRoot(document.querySelector("#react"));
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: "h2",
//   ref: null,
//   props: {
//     className: "subheading",
//     id: "subtitle",
//     children: "Using React",
//   },
// });

// same as below

// const h2 = document.createElement('h2');
// h2.innerText = 'Using React';
// document.querySelector('#react').append(h2);
