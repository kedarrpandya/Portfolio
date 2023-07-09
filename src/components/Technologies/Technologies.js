import React from "react";
import {
  DiDatabase,
  DiDjango,
  DiFirebase,
  DiPython,
  DiReact,
  DiMysql,
  DiAws,
} from "react-icons/di";
import { SiVirtualbox, SiTrendmicro } from "react-icons/si";
import { TfiMicrosoftAlt } from "react-icons";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <SiTrendmicro size="3 rem" />
        </picture>
        <ListContainer>
          <ListTitle>Trend Micro Apex One and Apex Central</ListTitle>
          <ListParagraph>
            Level - 3 (Professional) engineer of Apex One. Have a pretty good
            hands-on both Apex One and Apex Central.
          </ListParagraph>
        </ListContainer>
        <picture>
          <DiReact size="3rem" />
          <DiDjango size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js & Django(Framework of Python)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
          <DiPython size="3rem" />
          <DiMysql size="3 rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Databases, MySQL, Sanity
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data-Analysis</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tableau
          </ListParagraph>
        </ListContainer>
        <picture>
          <DiAws size="3 rem" />
        </picture>
        <ListContainer>
          <ListTitle>AWS Cloud</ListTitle>
          <ListParagraph>
            Experiece with Cloud Computing using AWS
          </ListParagraph>
        </ListContainer>
        <picture>
          <SiVirtualbox size="3 rem" />
        </picture>
        <ListContainer>
          <ListTitle>Virtual Box</ListTitle>
          <ListParagraph>
            Experiece with Virtual Box, have created some lab environment in
            Virtual Box.
          </ListParagraph>
        </ListContainer>
        <picture>
          <TfiMicrosoftAlt size="3 rem" />
        </picture>
        <ListContainer>
          <ListTitle>Active Directory</ListTitle>
          <ListParagraph>
            Experiece with Active Directory by creating, deleting and also
            integration of users.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
