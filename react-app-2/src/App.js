import { Header } from "./components/Header";
import { Main } from "./components/Main";
//import { Main } from "./components/Main";
//import { Card } from "./components/Card";
import { Target } from "./components/Target";
import { Cuadros } from "./components/Cuadros";
import { Footer } from "./components/Footer";
import "./app.css"; // importando css en js

function App() {
  const fruts = [
    {
      img: "https://picsum.photos/100/100",
      name: "Naranja Huando",
      price: 2,
    },

    {
      img: "https://picsum.photos/100/100",
      name: "Piña",
      price: 3,
    },
    {
      img: "https://picsum.photos/100/100",
      name: "Aguacate",
      price: 4,
    },
    {
      img: "https://picsum.photos/100/100",
      name: "Arandanos",
      price: 5,
    },

    {
      img: "https://picsum.photos/100/100",
      name: "Manzanas",
      price: 6,
    },
    {
      img: "https://picsum.photos/100/100",
      name: "Granadas",
      price: 7,
    },
    {
      img: "https://picsum.photos/100/100",
      name: "Mango",
      price: 8,
    },

    {
      img: "https://picsum.photos/100/100",
      name: "Fresas",
      price: 9,
    },
    {
      img: "https://picsum.photos/100/100",
      name: "Mandarina",
      price: 10,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Main>
        <Target>
          {fruts.map((frut) => (
            <Cuadros img={frut.img} name={frut.name} price={frut.price} />
          ))}
        </Target>
      </Main>
      <Footer />
    </div>
  );
}

export { App };
