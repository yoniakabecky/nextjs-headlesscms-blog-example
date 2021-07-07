import React, { ReactElement } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

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
    <Layout>
      <Form src="https://ws.formzu.net/fgen/S10007989/" onLoad={onLoad} />
    </Layout>
  );
}

const Form = styled.iframe`
  height: 100%;
  max-height: 100vh;
  max-width: 1000;
  border: 0;
`;
