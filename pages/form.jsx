import React, { ReactElement } from "react";

export default function form() {
  const [formz, setFormz] = React.useState(false);

  React.useEffect(() => {
    const setTrue = () => setFormz(true);
    const setFalse = () => setFormz(false);

    if (window.addEventListener) {
      window.addEventListener("load", setTrue, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", setTrue);
    } else {
      window.onload = setTrue;
    }
  }, []);

  const onLoad = () => {
    if (
      navigator.userAgent.match(/iPhone|iPad|Macintosh/) !== null &&
      formz === true
    )
      this.scrollIntoView(true);
  };

  return (
    <div>
      <iframe
        src="https://ws.formzu.net/fgen/S10007989/"
        style={{ height: "100vh", maxWidth: "100vw", width: "100%", border: 0 }}
        onLoad={onLoad}
      ></iframe>
    </div>
  );
}
