import Layout from '../components/Layout';
import PortfolioItem from '../components/PortfolioItem';
import portfolioItems from '../data/portfolioItems';

export default function Portfolio() {
  return (
    <Layout>
      <h1>ポートフォリオ（随時追加）</h1>
      <ul className="grid grid-cols-12 gap-4">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            lang={item.lang}
            websiteLink={item.websiteLink}
            githubLink={item.githubLink}
          />
        ))}
      </ul>
    </Layout>
  );
}
