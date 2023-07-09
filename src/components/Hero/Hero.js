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
        I am Kedar Pandya. I have done my Bachelors of Technology in Information
        and Communication Technology from Ganpat University, Kherva, India. I am
        currently doing my job as a Customer Success Engineer in
        <b>Trend Micro Inc., India</b>. I am handling an Endpoint Security
        product.
      </SectionText>
      <Button onClick={() => (window.location = "#Projects")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
