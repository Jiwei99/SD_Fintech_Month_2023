import React from 'react';
import { SpeakersFlex, Container, Title } from './styles';
import SpeakersContainer from './SpeakersContainer';
import { SpeakersInfoArray } from '../../data/Speakers';

export default function SpeakersContent() {
  const dataArray = SpeakersInfoArray.map((speaker, index) => {
    return <SpeakersContainer key={index} speaker={speaker} />;
  });

  return (
    <Container>
      <Title>SPEAKERS</Title>
      <SpeakersFlex>{dataArray}</SpeakersFlex>
    </Container>
  );
}