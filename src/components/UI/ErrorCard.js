import { useState } from "react";

import Card from "./Card";

import "./ErrorCard.css";

function ErrorCard(props) {
  const [showCard, setShowCard] = useState(true);

  if (!showCard) {
    return null;
  }

  const removeCardHandler = function () {
    setShowCard(false);
  };

  return (
    <Card className="error-card">
      <p>{props.message}</p>
      <button onClick={removeCardHandler}>X</button>
    </Card>
  );
}

export default ErrorCard;
