import Layout from '../components/Layout';
import Top from '../components/top';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Skill from '../components/skill';

export default function Home() {
  return (
    <Layout>
      <section id="top">
        <Top />
      </section>
      <section id="about" className="min-h-[calc(75vh+50px)] flex items-center justify-center bg-gray-300 mt-8 mb-8">
        <About />
      </section>
      <section id="portfolio" className="min-h-[calc(75vh+50px)] flex items-center justify-center bg-gray-300 mt-8 mb-8">
        <Portfolio />
      </section>
      <section id="skill" className="min-h-[calc(75vh+50px)] flex items-center justify-center bg-gray-300 mt-8 mb-8">
        <Skill />
      </section>
    </Layout>
  );
}
