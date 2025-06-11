import "./App.css";
import ProductComponent from "./Components/Products";

export function App() {
  let message = "Awesome";

  // return <h2>This is App Component {message} </h2>;
  //cannot return 2 html elements directly.. //to do that we have to wrap that with a container element

  // return (
  //   <div>
  //     <h1 className="header">
  //       I am learning React {message} {2 + 3}
  //     </h1>
  //     <p className="para">Learning CSS XML syntax and others</p>
  //   </div>
  // );

  // let p = document.createElement("p");
  // p.innerHTML = "Hey im creating app using js";
  // return p;

  return <ProductComponent />;
}
