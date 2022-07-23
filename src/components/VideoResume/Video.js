import React from "react";
import ReactPlayer from "react-player";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "../Hero/HeroStyles";

const Video = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Video Resume
      </SectionTitle>
      <SectionText></SectionText>
      <ReactPlayer
        url="Video/VR.mp4"
        controls={true}
        style="display: grid;
                place-items: center;"
      />
    </LeftSection>
  </Section>
);

export default Video;
