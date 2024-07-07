import Card from "react-bootstrap/Card";
import { THuman } from "../../types";
import styles from "./HumanCard.module.css";

type TProps = {
  human: THuman;
};

export const HumanCard: React.FC<TProps> = ({ human }) => {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title>{human.name}</Card.Title>
        <Card.Text>height: {human.height} </Card.Text>
        <Card.Text>birth_year: {human.birth_year} </Card.Text>
        <Card.Text>gender: {human.gender} </Card.Text>
      </Card.Body>
    </Card>
  );
};
