import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";
// const projectUrl = `${baseUrl}/#projects`

export const ContactFormEmail = ({name}) => (
  <Html>
    <Head />
    <Preview>Dear {name},</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>  
          <Hr style={hr} />
          <Text style={paragraph}>
            Thank you for reaching out! You successfully submitted through my contact form! 
            I appreciate your time in viewing my portfolio. 
            Allow me a moment to review your submission and you will hear from me shortly! 
          </Text>
          <Text style={paragraph}>
            In the mean time check out some of my projects listed on my page:
          </Text>
          <Button style={button} href="">
            View Nick's Projects
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>— Nick Q</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '--font-FamiljenGrotesk',
    };

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const box = {
    padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#050608",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};

const button = {
  backgroundColor: "#dda455",
  borderRadius: "5px",
  color: "#fbfbfc",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "10px",
};

