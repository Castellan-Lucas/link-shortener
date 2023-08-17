import React from "react";
import "../CardLink/CardLink.sass";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Cardlink(props) {

  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="container-Cardlink">
        <h4 className="link-user">{props.userLink}</h4>
      <div className="container-props-btn">
        <h4 className="url-entrada">{props.link}</h4>
       <CopyToClipboard text={props.link} onCopy={handleCopy}>
          <button className="btn-copy">
            {copied ? "Copiado!" : "Copiar!"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
