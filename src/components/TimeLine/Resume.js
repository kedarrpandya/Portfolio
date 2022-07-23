import React from "react";
import Button from "../../styles/GlobalComponents/Button";
import { ResumeContainer } from "./VrStyles";
import { ResumeImage } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "../Hero/HeroStyles";

const Resume = (props) => (
  <Section id="about">
    <SectionDivider />
    <LeftSection>
      <SectionTitle main center>
        Resume
      </SectionTitle>
      <SectionText>
        Click on the View Button below to view the File.
      </SectionText>
      {ResumeImage.map((a) => {
        return <ResumeContainer src={a.image} />;
      })}
      <a href="images/MyResume.pdf">
        <Button>View File</Button>
      </a>
    </LeftSection>
    <SectionDivider />
  </Section>
);

export default Resume;
