import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Header() {
  return <header>Header</header>;
}

function Main(props) {
  console.log("props", props.children);
  const { children } = props;
  return <main>{children}</main>;
}

function Footer() {
  return <footer>Footer</footer>; //funciones que retornan jsx(html) //un componente retorna jsx
  //los componentes siempre queran retornar interfaces
  //condicon ternaria
}

function Card(props) {
  const { name, lastname, age } = props;
  return (
    <article>
      <h2>
        Nombre completo: {name} {lastname}
      </h2>
      <h2>Edad: {age}</h2>
    </article>
  );
}

function SayHello(props) {
  const { name = "miguel", sex = "m" } = props;
  return (
    <div>
      {name === "miguel" ? <h2>Hola Miguel</h2> : <h2>Hola extraño</h2>}
      {sex === "f" && <h2>Eres mujer</h2>}
    </div>
  );
}

function App() {
  const users = [
    {
      name: "miguel",
      lastname: "espinoza",
      age: 23,
    },
    {
      name: "martha",
      lastname: "sifuentes",
      age: 34,
    },
    {
      name: "sebastian",
      lastname: "yabiku",
      age: 30,
    },
  ];

  return (
    <div>
      <Header />
      <Main>
        {/* <Card name="miguel" lastname="espinoza" age="23" />
        <Card name="martha" lastname="sifuentes" age="32" /> */}
        {users.map((dato) => (
          <Card name={dato.name} lastname={dato.lastname} age={dato.age} />
        ))}
        <SayHello name="jose" sex="f" />
        <SayHello sex="f" />
      </Main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
//propiedades
//composicion de componentes
