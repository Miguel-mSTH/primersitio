import "./main.css";
//import { Target } from "../Target";
function Main(props) {
  const { children } = props;
  return (
    <div className="main">
      <h1>Productos</h1>
      {children}
    </div>
  );
}

export { Main };
