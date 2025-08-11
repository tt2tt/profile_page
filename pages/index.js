import Layout from '../components/Layout';
import Top from './top';
import About from './about';
import Portfolio from './portfolio';
import Skill from './skill';

export default function Home() {
  return (
    <Layout>
      <section id="top" className="min-h-[calc(75vh+50px)] flex items-center justify-center bg-gray-100 mb-8"
            style={{
        backgroundImage: "url('/images/top_page_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
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
