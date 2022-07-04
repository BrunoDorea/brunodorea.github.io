import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';

import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>Sobre Mim</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Olá, Eu sou analista de TI, Desenvolvedor e Quality Assurance.
          <br />
          Trabalhei quase 4 anos na Work Line Informática, prestando suporte
          técnico ao usuário, manutenção preventiva e corretiva de 
          microcomputadores e impressoras.
          <br />
          Em busca de novos desafios, passei 2 anos na Defensoria Pública da
          Bahia (DPE-Ba), prestando suporte técnico.
          <br />
          Em Março de 2020 prestei serviços para a Atento como analista de
          microinformática junior, para o site Uruguai ocupando esse cargo até
          Março de 2022.
          <br />
          Em março de 2022, recebi uma proposta da Spread Tecnologia para
          trabalhar como desenvolvedor Java. No mês de junho, passei a
          integrar o time de Teste de Performance.
        </p>
      </AboutInfo>
    </AboutWrapper>
  );
};

export default About;
