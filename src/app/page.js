import FirstScreen from 'src/components/HomePageSections/FirstScreen';
import About from 'src/components/HomePageSections/About';
import Skills from '@/components/HomePageSections/Skills';
import Qualification from '@/components/HomePageSections/Qualification';
import Works from '@/components/HomePageSections/Works';

export default function Home() {
  return (
    <>
      <FirstScreen/>
      <About/>
      <Skills/>
      <Qualification/>
      <Works/>
    </>
  );
}
