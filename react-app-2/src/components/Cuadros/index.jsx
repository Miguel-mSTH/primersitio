import "./cuadros.css";

function Cuadros(props) {
  const { img, name, price } = props;
  return (
    <article className="cuadros">
      <img src={img} alt="prueba" />
      <h2>{name}</h2>
      <h3>Kilo S/{price}</h3>
      <div>
        <button>-</button>
        <label>0</label>
        <button>+</button>
      </div>
    </article>
  );
}

export { Cuadros };
