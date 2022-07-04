import React from 'react';

import Layout from '@components/Layout/Layout';
import SEO from '@components/seo';

import Home from '@components/Home/Home';
import About from '@components/About/About';
import Skills from '@components/Skills/Skills';
import Projects from '@components/Projects/Projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Bruno H | Dev - QA " />

    <Home />
    <About />
    <Skills />
    <Projects />
  </Layout>
);

export default IndexPage;
