import { useState, useEffect } from 'react';
import skillTabsData from '../data/skillTabsData';

export default function SkillTabs() {
  const [activeTab, setActiveTab] = useState(skillTabsData[0].id);
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);

  useEffect(() => {
    if (!isAutoSwitching) return;

    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = skillTabsData.findIndex((tab) => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % skillTabsData.length;
        return skillTabsData[nextIndex].id;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoSwitching]);

  return (
    <div id="tabs" className="p-4">
      <div className="v-card v-sheet bg-white shadow-md rounded-md">
        <button
          onClick={() => setIsAutoSwitching((prev) => !prev)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {isAutoSwitching ? '停止' : '再開'}
        </button>
        <div id="over">
          <div className="v-tabs">
            <div role="tablist" className="flex space-x-4 border-b-2">
              {skillTabsData.map((tab) => (
                <div
                  key={tab.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={activeTab === tab.id}
                  className={`v-tab cursor-pointer px-4 py-2 ${
                    activeTab === tab.id ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="v-window mt-4">
          {skillTabsData.map((tab) => (
            <div
              key={tab.id}
              className={`v-window-item ${activeTab === tab.id ? 'block' : 'hidden'}`}
            >
              <div className="v-card v-card--flat v-sheet bg-white p-4">
                {tab.content.map((item, index) => (
                  <div key={index} className="v-card__text text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
