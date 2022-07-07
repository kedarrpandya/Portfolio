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
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am Kedar Pandya. I'm currently a 4th year student of B. Tech.
        Information & Communication Technology at Ganpat University.
      </SectionText>
      <Button onClick={() => (window.location = "#Projects")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
