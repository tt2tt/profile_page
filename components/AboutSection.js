import aboutData from '../data/aboutData';

export default function AboutSection() {
  return (
    <div className="flex flex-wrap">
      <div id="img-aria" className="w-full md:w-1/3 p-4">
        <div
          id="profile_img"
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url('${aboutData.profileImage}')`,
            paddingBottom: "128.889%",
          }}
        ></div>
      </div>
      <div id="detail-aria" className="w-full md:w-1/3 p-4">
        <div id="detail">
          <h1 className="text-2xl font-bold mb-4">About</h1>
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <th align="left" className="pr-4">Name</th>
                <td className="last-td">{aboutData.name}</td>
              </tr>
              <tr>
                <th align="left" className="pr-4">University</th>
                <td className="last-td">{aboutData.university}</td>
              </tr>
              <tr>
                <th align="left" className="pr-4">GitHub</th>
                <td className="last-td">
                  <a
                    href={aboutData.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {aboutData.github.label}
                  </a>
                </td>
              </tr>
              <tr>
                <th align="left" className="pr-4">Detail</th>
                <td className="last-td">{aboutData.detail}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
