const container = React.createElement(
  "div",
  {
    className: "container",
    id: "container",
  },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 1 },
        "The library for web and native user interfaces"
      ),
      React.createElement("img", {
        key: 2,
        style: {
          width: 200,
          backgroundColor: "teal",
          borderRadius: 8,
          padding: 16,
        },
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      }),
    ]),
    React.createElement("section", { key: 2 }, [
      React.createElement("form", { key: 1 }, [
        React.createElement("div", { className: "input-group", key: 1 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "username" },
            "Username"
          ),
          React.createElement("input", { key: 2, id: "username" }),
        ]),
        React.createElement("div", { className: "input-group", key: 2 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "password" },
            "Password"
          ),

          React.createElement("input", { key: 2, id: "password" }),
        ]),
      ]),
    ]),
  ]
);
const root = ReactDOM.createRoot(document.querySelector("#react"));
root.render(container);

// similar to
{
  /* 
<div class="container" id="container">
  <section>
    <p>The library for web and native user interfaces</p>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      style="
        width: 200px;
        background-color: teal;
        border-radius: 8px;
        padding: 16px;
      "
    />
  </section>
  <section>
    <form>
      <div class="input-group">
        <label for="username">Username</label><input id="username" />
      </div>
      <div class="input-group">
        <label for="password">Password</label><input id="password" />
      </div>
    </form>
  </section>
</div> 
*/
}
