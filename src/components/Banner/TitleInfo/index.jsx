import React from 'react'
import '../TitleInfo/TitleInfo.sass'

export default function TitleInfo() {
  
  return (
    <div className="container-info">
      <h1>Mais do que links curtos</h1>
      <p>
        Aumente o reconhecimento de sua marca e obtenha insights detalhados
        sobre como seu links estão funcionando.
      </p>
      <button href="search" className="btn-info">
        Iniciar
      </button>
    </div>
  );
}
