export default function PortfolioItem({ image, title, description, lang, websiteLink, githubLink }) {
  return (
    <div className="col-span-12 sm:col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-3 m-4">
      <li className="card border border-gray-300 rounded-lg shadow-sm bg-gray-100">
        <img src={image} alt={title} className="card-img w-full h-48 object-cover rounded-t-lg" />
        <div className="m-4">
          <p className="card-title text-lg font-bold mt-2">{title}</p>
          <p className="card-text text-sm text-gray-600">{description}</p>
          <p className="card-lang text-sm text-gray-500">{lang}</p>
          <div className="links flex space-x-4 mt-2">
            {websiteLink && (
              <a href={websiteLink} className="card-link text-blue-500 hover:underline">Website</a>
            )}
            <a href={githubLink} className="card-link github-link text-blue-500 hover:underline">Github</a>
          </div>
        </div>
      </li>
    </div>
  );
}
