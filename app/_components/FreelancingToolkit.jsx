'use client'
import React, { useState, useRef } from 'react';
import { Download, Calculator, FileText, DollarSign, Award } from 'lucide-react';

// Import components
import PricingGuide from './PricingGuide';
import PriceCalculator from './Calculator';
import Templates from './Templates';
import ProTips from './ProTips';
import NotificationToast from './NotificationToast';
import TabButton from './TabButton';
import DownloadSection from './DownloadSection';

// Import utilities
import { generateToolkitData, rateCardHTML, downloadFile } from './ToolkitUtils';

const FreelancingToolkit = () => {
  const [activeTab, setActiveTab] = useState('pricing');
  const [notification, setNotification] = useState(null);
  const calculatorRef = useRef(null);

  // Notification utility function
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Download toolkit function
  const downloadToolkit = () => {
    const toolkitData = generateToolkitData();
    const content = JSON.stringify(toolkitData, null, 2);
    downloadFile(content, 'abhishek_freelance_toolkit.json', 'application/json');
    showNotification('Toolkit downloaded successfully!');
  };

  // Generate rate card function
  const generateRateCard = () => {
    // If user wants to print calculator tab using rate card HTML
    if (calculatorRef.current) {
      setActiveTab('calculator'); // Switch to calculator tab
      setTimeout(() => {
        calculatorRef.current.printCalculatorTab(); // Print calculator tab
      }, 100); // Small delay to ensure tab switch is complete
    } else {
      // Original functionality - download rate card HTML
      downloadFile(rateCardHTML, 'abhishek_rate_card.html', 'text/html');
      showNotification('Rate card downloaded! Open the HTML file and print to save as PDF.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <NotificationToast notification={notification} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🚀 Freelancing Toolkit</h1>
          <p className="text-xl opacity-90">Professional Pricing Guide & Templates for Next.js/React Developer</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <TabButton id="pricing" label="Pricing Guide" icon={DollarSign} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton id="calculator" label="Calculator" icon={Calculator} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton id="proposals" label="Templates" icon={FileText} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton id="tips" label="Pro Tips" icon={Award} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Pricing Guide Tab */}
          {activeTab === 'pricing' && <PricingGuide />}

          {/* Calculator Tab */}
          {activeTab === 'calculator' && <PriceCalculator ref={calculatorRef} showNotification={showNotification} />}

          {/* Templates Tab */}
          {activeTab === 'proposals' && <Templates showNotification={showNotification} />}

          {/* Pro Tips Tab */}
          {activeTab === 'tips' && <ProTips />}
        </div>

        {/* Download Section */}
        <DownloadSection 
          downloadToolkit={downloadToolkit} 
          generateRateCard={generateRateCard} 
          printCalculatorTab={() => calculatorRef.current?.printCalculatorTab()}
          showNotification={showNotification}
        />
      </div>
    </div>
  );
};

export default FreelancingToolkit;