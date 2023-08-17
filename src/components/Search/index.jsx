import React from "react";
import "./Search.sass";
import CardLink from "../CardLink";

export default function Search() {
  const [view, setView] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [urls, setUrls] = React.useState([]);

  const enviar = () => {
    if (value) {
      fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(value)}`)
        .then((response) => response.json())
        .then((data) => {
          const newUrls = [
            ...urls,
            { userLink: value, shortLink: data.result.full_short_link },
          ];
          setUrls(newUrls);
          setValue("");
          setView(true);
        })
        .catch((error) => {
          console.error("Erro na chamada à API:", error);
        });
    }
  };

  return (
    <div>
      <div id="search" className="container-Search">
        <div className="component">
          <input
            onChange={(event) => setValue(event.target.value)}
            name="search"
            id="search"
            autoComplete="off"
            autoFocus
            required
            maxLength="100"
            minLength="3"
            type="text"
            className="search-bar"
            placeholder="Shorten a link..."
            value={value}
          />
          <button onClick={enviar} className="search-button">
            Encurtar
          </button>
        </div>
      </div>
      {urls.map((urlData, index) => (
        <CardLink
          key={index}
          userLink={urlData.userLink}
          link={urlData.shortLink}
        />
      ))}
    </div>
  );
}
