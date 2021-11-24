import "./target.css";
//import { Cuadros } from "../Cuadros";

function Target(props) {
  //console.log(props);
  const { children } = props;
  return <div className="target">{children}</div>;
}

export { Target };
