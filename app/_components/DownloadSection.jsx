'use client'
import React from 'react';
import { Download, ExternalLink, Printer } from 'lucide-react';

const DownloadSection = ({ downloadToolkit, generateRateCard, printCalculatorTab, showNotification }) => {
  return (
    <div className="mt-12 text-center">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-950 mb-4">📥 Download Your Complete Toolkit</h2>
        <p className="text-gray-800 opacity-90 mb-6">Get all templates, contracts, and pricing guides in one package</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={downloadToolkit}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
          >
            <Download size={20} />
            Download Complete Toolkit (JSON)
          </button>
          <button 
            onClick={generateRateCard}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-colors flex items-center gap-2 shadow-lg"
          >
            <ExternalLink size={20} />
            Generate Rate Card (HTML)
          </button>
          
          <button
            onClick={printCalculatorTab}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-colors flex items-center gap-2 shadow-lg"
          >
            <Printer size={20} />
            Print Calculator Tab
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;