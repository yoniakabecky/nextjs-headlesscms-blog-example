import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export default function Contact(): ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setSent(true);
      }
    });
  };

  return (
    <Layout>
      <Heading>Contact</Heading>

      <Description>Thanks for visiting. Please leave a message.</Description>

      <form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            rows={5}
            value={message}
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
              setMessage(e.currentTarget.value)
            }
          />
        </FormGroup>

        <SendBtn type="submit" value="send" onClick={handleSend} />
        {sent && <MessageSent>Your message has been sent.</MessageSent>}
      </form>
    </Layout>
  );
}

const Heading = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
`;

const Description = styled.div`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 1rem auto;
`;

const Label = styled.label`
  display: inline-block;
  width: 7rem;
  font-size: 0.875rem;
`;

const Input = styled.input`
  padding: 0.1rem 0.5rem;
  width: 20rem;
  height: 2rem;

  :focus {
    outline-color: tomato;
  }
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  width: 20rem;

  :focus {
    outline-color: tomato;
  }
`;

const SendBtn = styled.input`
  width: 5rem;
  height: 1.5rem;
  background-color: #eee;
  border: none;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const MessageSent = styled.p`
  margin-top: 1rem;
  color: #aaa;
  font-size: 0.875rem;
`;
