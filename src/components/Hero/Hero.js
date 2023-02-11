import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hii, I am Shubham
        <br />
        Good to see you.
      </SectionTitle>
      I am a full-stack web developer based in Pune, India. Currently pursuing
      my B-tech in Information Technology. I've worked on various web projects
      on technologies ranging from HTML and CSS to Next and Firebase. Here's my
      resume to find out more...
      <SectionText></SectionText>
      <Button>
        <a
          href="https://masangshubham.github.io/portfolio-web/blob/main/public/ShubhamMasang.pdf"
          target="_blank"
          style={{ color: "inherit" }}
        >
          Resume
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
