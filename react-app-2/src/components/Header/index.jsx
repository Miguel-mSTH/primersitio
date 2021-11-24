import "./header.css";
import { Button } from "../Button";
import { Card } from "../Card";

function Header() {
  return (
    <header className="header">
      <h1>Shopping Card</h1>
      <div>
        <Button />
        <Card />
      </div>
    </header>
  );
}

export { Header };
