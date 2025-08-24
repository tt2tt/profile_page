import { useState, useEffect } from 'react';
import skillTabsData from '../data/skillTabsData';

export default function SkillTabs() {
  return (
    <div>
      <table className="table-auto border-collapse border border-gray-400 w-full bg-white">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">カテゴリ</th>
            <th className="border border-gray-300 px-4 py-2">内容</th>
          </tr>
        </thead>
        <tbody>
          {skillTabsData.map((tab) => (
            <tr key={tab.id}>
              <td className="border border-gray-300 px-4 py-2 font-bold">{tab.label}</td>
              <td className="border border-gray-300 px-4 py-2">
                {tab.content.join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

