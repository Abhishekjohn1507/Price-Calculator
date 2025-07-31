'use client'
import React from 'react';

const TabButton = ({ id, label, icon: Icon, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(id)}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
      activeTab === id 
        ? 'bg-blue-600 text-white shadow-lg' 
        : 'bg-white text-gray-900 hover:bg-gray-50'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

export default TabButton;