/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import 'twin.macro';
import Jumbotron from '../components/Contents/Jumbotron';
import AboutMe from '../components/Contents/AboutMe';
import Skills from '../components/Contents/Skills';
import CareerSummary from '../components/Contents/CareerSummary';
import CareerDetail from '../components/Contents/CareerDetail';
import Awards from '../components/Contents/Awards';
import Experiences from '../components/Contents/Experiences';
import Education from '../components/Contents/Education';
import Projects from '../components/Contents/Projects';
import MainLayout from '../components/Layouts/MainLayout/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main tw="pt-[74px] pb-[100px]">
        <Jumbotron />
        <div tw="space-y-[80px]">
          <AboutMe />
          <Skills />
          <CareerSummary />
          <CareerDetail />
          <Awards />
          <Experiences />
          <Projects />
          <Education />
        </div>
      </main>
    </MainLayout>
  );
};

export default Home;
