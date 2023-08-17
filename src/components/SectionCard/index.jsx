import React from "react";
import "../SectionCard/SectionCard.sass";
import Card1 from "../Cards/Card1";
import Card2 from "../Cards/Card2";
import Card3 from "../Cards/Card3";

export default function SectionCard() {
  return (
    <div className="container-section">
      <div className="card1">
        <Card1
          h1={"Reconhecimento de marca"}
          p={
            "Aumente o reconhecimento da sua marca a cada clique. Links genéricos não significam passam confiança. Os links de marca ajudam a passar confiança em seu conteúdo"
          }
        />
      </div>
      <div className="card2">
        <Card2
          h1={"Registros Detalhados "}
          p={
            "Obtenha informações sobre quem está clicando em seus links. Saber quando e onde as pessoas interagem com seu conteúdo ajudando a tomar melhores para sua empresa ou startup"
          }
        />
      </div>
      <div className="card3">
        <Card3
          h1={"Totalmente customizável"}
          p={
            "Melhore o reconhecimento da marca e a descoberta de conteúdo por meio de links personalizáveis, potencializando o envolvimento do público."
          }
        />
      </div>
    </div>
  );
}
