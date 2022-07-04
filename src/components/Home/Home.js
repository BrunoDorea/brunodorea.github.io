import React from 'react';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import Button from '@common/Button';

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Eu sou</p>
          <h1>BRUNO H</h1>
          <p className="adjust">WEB DEVELOPER | QA</p>

          <div className="home__CTA">

          <Button className="cta" as="a" href="#">
              Download em pdf
            </Button>
            
            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/brunodorea"
              />
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="//twitter.com/brunoooooooo_"
              />
              <IconLink
                label="codepen"
                icon={['fab', 'codepen']}
                href="//codepen.io/brunodorea"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>
    </HomeWrapper>
  );
};

export default Home;
