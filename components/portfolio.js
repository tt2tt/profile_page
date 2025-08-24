import PortfolioItem from './PortfolioItem';
import portfolioItems from '../data/portfolioItems';

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 m-4">Portfolio（随時追加）</h1>
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
    </div>
  );
}
