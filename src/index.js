const container = (
  <div className="container" id="container">
    <section>
      <p>The library for web and native user interfaces</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        style={{
          width: 200,
          backgroundColor: "teal",
          borderRadius: 8,
          padding: 16,
        }}
      />
    </section>
    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" />
        </div>
      </form>
    </section>
  </div>
);
const root = ReactDOM.createRoot(document.querySelector("#react"));
root.render(container);

// parses the above javascript to the below

// "use strict";

// var container = /*#__PURE__*/React.createElement("div", {
//   className: "container",
//   id: "container"
// }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "The library for web and native user interfaces"), /*#__PURE__*/React.createElement("img", {
//   src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//   style: {
//     width: 200,
//     backgroundColor: "teal",
//     borderRadius: 8,
//     padding: 16
//   }
// })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
//   className: "input-group"
// }, /*#__PURE__*/React.createElement("label", {
//   htmlFor: "username"
// }, "Username"), /*#__PURE__*/React.createElement("input", {
//   id: "username"
// })), /*#__PURE__*/React.createElement("div", {
//   className: "input-group"
// }, /*#__PURE__*/React.createElement("label", {
//   htmlFor: "password"
// }, "Password"), /*#__PURE__*/React.createElement("input", {
//   id: "password"
// })))));
// var root = ReactDOM.createRoot(document.querySelector("#react"));
// root.render(container);
// //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb250YWluZXIiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsInNyYyIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiaHRtbEZvciIsInJvb3QiLCJSZWFjdERPTSIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiXSwic291cmNlcyI6WyJodHRwOi8vMTI3LjAuMC4xOjU1MDAvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhaW5lciA9IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgIDxzZWN0aW9uPlxuICAgICAgPHA+VGhlIGxpYnJhcnkgZm9yIHdlYiBhbmQgbmF0aXZlIHVzZXIgaW50ZXJmYWNlczwvcD5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9hL2E3L1JlYWN0LWljb24uc3ZnXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0ZWFsXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuKTtcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVhY3RcIikpO1xucm9vdC5yZW5kZXIoY29udGFpbmVyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxTQUFTLGdCQUNiQyxLQUFBLENBQUFDLGFBQUE7RUFBS0MsU0FBUyxFQUFDLFdBQVc7RUFBQ0MsRUFBRSxFQUFDO0FBQVcsZ0JBQ3ZDSCxLQUFBLENBQUFDLGFBQUEsK0JBQ0VELEtBQUEsQ0FBQUMsYUFBQSxZQUFHLGdEQUFpRCxDQUFDLGVBQ3JERCxLQUFBLENBQUFDLGFBQUE7RUFDRUcsR0FBRyxFQUFDLG9FQUFvRTtFQUN4RUMsS0FBSyxFQUFFO0lBQ0xDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCQyxZQUFZLEVBQUUsQ0FBQztJQUNmQyxPQUFPLEVBQUU7RUFDWDtBQUFFLENBQ0gsQ0FDTSxDQUFDLGVBQ1ZULEtBQUEsQ0FBQUMsYUFBQSwrQkFDRUQsS0FBQSxDQUFBQyxhQUFBLDRCQUNFRCxLQUFBLENBQUFDLGFBQUE7RUFBS0MsU0FBUyxFQUFDO0FBQWEsZ0JBQzFCRixLQUFBLENBQUFDLGFBQUE7RUFBT1MsT0FBTyxFQUFDO0FBQVUsR0FBQyxVQUFlLENBQUMsZUFDMUNWLEtBQUEsQ0FBQUMsYUFBQTtFQUFPRSxFQUFFLEVBQUM7QUFBVSxDQUFFLENBQ25CLENBQUMsZUFDTkgsS0FBQSxDQUFBQyxhQUFBO0VBQUtDLFNBQVMsRUFBQztBQUFhLGdCQUMxQkYsS0FBQSxDQUFBQyxhQUFBO0VBQU9TLE9BQU8sRUFBQztBQUFVLEdBQUMsVUFBZSxDQUFDLGVBQzFDVixLQUFBLENBQUFDLGFBQUE7RUFBT0UsRUFBRSxFQUFDO0FBQVUsQ0FBRSxDQUNuQixDQUNELENBQ0MsQ0FDTixDQUNOO0FBQ0QsSUFBTVEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEVKLElBQUksQ0FBQ0ssTUFBTSxDQUFDakIsU0FBUyxDQUFDIiwiaWdub3JlTGlzdCI6W119
