'use client'
import React, { useRef, useState } from 'react';
import { Download, Calculator, FileText, DollarSign, Users, Award, AlertCircle, CheckCircle, Copy, ExternalLink, Printer } from 'lucide-react';
import ProTips from './_components/ProTips';
const FreelancingToolkit = () => {

  const [projectType, setProjectType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [timeline, setTimeline] = useState('');
  const [clientBudget, setClientBudget] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [activeTab, setActiveTab] = useState('pricing');
  const [notification, setNotification] = useState(null);
    // const calculatorRef = useRef<HTMLDivElement>(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const calculatePrice = () => {
    if (!projectType || !complexity || !timeline || timeline < 1) {
      showNotification('Please fill all fields with valid data', 'error');
      return;
    }

    const prices = {
      wordpress: 20000,
      nextjs: 50000,
      fullstack: 80000,
      mobile: 100000,
      backend: 35000,
      ecommerce: 75000,
      dashboard: 45000
    };

    const complexityMultipliers = {
      basic: 1,
      intermediate: 1.5,
      advanced: 2.2
    };

    let basePrice = prices[projectType] || 25000;
    let multiplier = complexityMultipliers[complexity] || 1;

    // Timeline and urgency adjustments
    if (timeline < 2 || urgency === 'urgent') multiplier *= 1.8; // Rush job
    if (timeline > 8) multiplier *= 0.85; // Long timeline discount
    if (urgency === 'flexible') multiplier *= 0.9; // Flexible timeline discount

    const finalPrice = Math.round(basePrice * multiplier);
    const maxPrice = Math.round(finalPrice * 1.4);

    setCalculatedPrice({ min: finalPrice, max: maxPrice });
    showNotification('Price calculated successfully!');
  };

  const copyToClipboard = async (text, successMessage) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification(successMessage);
    } catch (err) {
      showNotification('Copy failed. Please copy manually.', 'error');
    }
  };

  const proposalTemplate = `Subject: Professional Web Development Proposal

Dear [Client Name],

Thank you for considering me for your [Project Type] project. Based on our discussion, I understand you need:

• [Feature 1]
• [Feature 2]
• [Feature 3]

Technical Approach:
I'll use Next.js/React for optimal performance and user experience, with [specific technologies] for backend functionality.

Timeline: [X] weeks
Investment: ₹[Amount] (50% advance, 50% on completion)

What's Included:
• Fully responsive design
• Admin dashboard
• Mobile optimization
• Basic SEO setup
• 2 weeks post-launch support

Ready to start immediately upon agreement.

Best regards,
Abhishek`;

  const contractTemplate = `FREELANCE DEVELOPMENT CONTRACT

Client: [Client Name]
Developer: Abhishek
Project: [Project Description]

SCOPE OF WORK:
- [Feature 1]
- [Feature 2] 
- [Feature 3]

TIMELINE: [X] weeks from contract signing
TOTAL COST: ₹[Amount]

PAYMENT TERMS:
- 50% advance payment before work begins
- 50% upon project completion and approval

REVISIONS: 2 rounds included, additional at ₹1,500/hour

DELIVERABLES:
- Source code
- Documentation
- 2 weeks post-launch support

Both parties agree to these terms.

Client Signature: _________________ Date: _______
Developer Signature: _____________ Date: _______`;

  const downloadToolkit = () => {
    const toolkitData = {
      pricing_guide: {
        wordpress_hotel: "₹20,000 - ₹25,000",
        nextjs_hotel: "₹50,000 - ₹70,000",
        car_reseller_web: "₹70,000 - ₹1,00,000",
        mobile_app: "₹80,000 - ₹1,20,000",
        backend: "₹30,000 - ₹50,000"
      },
      hourly_rates: {
        consultation: "₹2,000/hour",
        wordpress: "₹1,500/hour",
        nextjs_react: "₹2,500/hour",
        backend: "₹2,000/hour",
        mobile: "₹3,000/hour"
      },
      proposal_template: proposalTemplate,
      contract_template: contractTemplate
    };

    const content = JSON.stringify(toolkitData, null, 2);
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'abhishek_freelance_toolkit.json';
    a.click();
    
    URL.revokeObjectURL(url);
    showNotification('Toolkit downloaded successfully!');
  };

  const generateRateCard = () => {
    const rateCardHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Professional Rate Card - Abhishek</title>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; }
        h1 { color: #333; border-bottom: 3px solid #667eea; padding-bottom: 10px; margin-bottom: 30px; }
        h2 { color: #5a67d8; margin-top: 30px; margin-bottom: 15px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 12px 15px; border: 1px solid #ddd; text-align: left; }
        th { background: #f7fafc; font-weight: 600; color: #2d3748; }
        .price { color: #38a169; font-weight: bold; }
        .contact { background: #f8f9fa; padding: 20px; margin-top: 30px; border-radius: 8px; border-left: 4px solid #667eea; }
        .header-info { background: #e2e8f0; padding: 15px; border-radius: 8px; margin-bottom: 30px; }
        @media print { body { padding: 20px; } .print-btn { display: none; } }
    </style>
</head>
<body>
    <h1>🚀 Professional Development Services - Rate Card</h1>
    <div class="header-info">
        <p><strong>Developer:</strong> Abhishek</p>
        <p><strong>Specialization:</strong> Next.js, React, WordPress, Full-Stack Development</p>
        <p><strong>Location:</strong> Kanpur, Uttar Pradesh</p>
    </div>
    <h2>📋 Service Pricing</h2>
    <table>
        <thead><tr><th>Service Type</th><th>Price Range (INR)</th><th>Timeline</th></tr></thead>
        <tbody>
            <tr><td>WordPress Development</td><td class="price">₹20,000 - ₹50,000</td><td>2-4 weeks</td></tr>
            <tr><td>Next.js Application</td><td class="price">₹50,000 - ₹1,00,000</td><td>3-6 weeks</td></tr>
            <tr><td>Full-Stack Web App</td><td class="price">₹80,000 - ₹1,50,000</td><td>4-8 weeks</td></tr>
            <tr><td>Mobile App</td><td class="price">₹1,00,000 - ₹2,00,000</td><td>6-10 weeks</td></tr>
            <tr><td>Backend Development</td><td class="price">₹30,000 - ₹70,000</td><td>2-5 weeks</td></tr>
        </tbody>
    </table>
    <div class="contact">
        <h3>📞 Terms & Contact</h3>
        <p><strong>Payment:</strong> 50% advance, 50% on completion</p>
        <p><strong>Support:</strong> 2 weeks post-launch included</p>
        <p><strong>Revisions:</strong> 2 rounds included</p>
    </div>
    <button onclick="window.print()" style="background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 20px 0;">Print/Save as PDF</button>
</body>
</html>`;

    const blob = new Blob([rateCardHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'abhishek_rate_card.html';
    a.click();
    
    URL.revokeObjectURL(url);
    showNotification('Rate card downloaded! Open the HTML file and print to save as PDF.');
  };

    // ✅ New: Print Calculator Section
    const printCalculatorTab = () => {
      if (!calculatorRef.current) return;
  
      const calculatorHTML = `
        <html><head>
          <title>Project Cost Summary - Abhishek</title>
          <style>
            body { font-family: 'Segoe UI', sans-serif; padding: 40px; line-height: 1.6; color: #333; max-width: 800px; margin: auto; }
            h1 { color: #4a5568; border-bottom: 2px solid #3182ce; padding-bottom: 10px; }
            .section { margin-top: 30px; }
            .field { margin-bottom: 10px; }
            strong { color: #2c5282; }
          </style>
        </head><body>
          <h1>🧮 Project Cost Summary</h1>
          ${calculatorRef.current.innerHTML}
        </body></html>`;
  
      const newWin = window.open("", "_blank");
      if (newWin) {
        newWin.document.write(calculatorHTML);
        newWin.document.close();
        newWin.focus();
        newWin.print();
        showNotification("Calculator tab content sent to print.");
      } else {
        toast.error("Popup blocked! Please allow popups to print.");
      }
    };
  
  const NotificationToast = () => {
    if (!notification) return null;
    
    return (
      <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center gap-2 ${
        notification.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
      }`}>
        {notification.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle size={20} />}
        {notification.message}
      </div>
    );
  };

  const TabButton = ({ id, label, icon: Icon }) => (
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <NotificationToast />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🚀 Freelancing Toolkit</h1>
          <p className="text-xl opacity-90">Professional Pricing Guide & Templates for Next.js/React Developer</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <TabButton id="pricing" label="Pricing Guide" icon={DollarSign} />
          <TabButton id="calculator" label="Calculator" icon={Calculator} />
          <TabButton id="proposals" label="Templates" icon={FileText} />
          <TabButton id="tips" label="Pro Tips" icon={Award} />
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* Pricing Guide Tab */}
          {activeTab === 'pricing' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <DollarSign className="text-green-600" />
                  Minimum Pricing Guide
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-semibold text-black">Project Type</th>
                        <th className="text-left p-3 font-semibold text-black">Price Range (INR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-3 text-gray-950">WordPress Hotel Site</td><td className="p-3 text-green-600 font-bold">₹20,000 - ₹25,000</td></tr>
                      <tr className="border-b"><td className="p-3 text-gray-950">Next.js Hotel App</td><td className="p-3 text-green-600 font-bold">₹50,000 - ₹70,000</td></tr>
                      <tr className="border-b"><td className="p-3 text-gray-950">Car Reseller Web App</td><td className="p-3 text-green-600 font-bold">₹70,000 - ₹1,00,000</td></tr>
                      <tr className="border-b"><td className="p-3 text-gray-950">Mobile App (React Native)</td><td className="p-3 text-green-600 font-bold">₹80,000 - ₹1,20,000</td></tr>
                      <tr><td className="p-3 text-gray-950">Backend (Convex/Firebase)</td><td className="p-3 text-green-600 font-bold">₹30,000 - ₹50,000</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                  <p className="font-semibold text-red-700">⚠️ Never Go Below:</p>
                  <p className="text-red-600">WordPress: ₹15,000 | Next.js: ₹45,000 | Full Stack: ₹1,20,000</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Package Strategy</h2>
                
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
                    <h3 className="font-bold text-blue-800">Basic Package (₹20,000 - ₹30,000)</h3>
                    <ul className="mt-2 text-sm text-blue-700 space-y-1">
                      <li>✅ Static pages + contact form</li>
                      <li>✅ Responsive design</li>
                      <li>✅ Basic SEO setup</li>
                      <li>✅ 2 revisions included</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded">
                    <h3 className="font-bold text-purple-800">Pro Package (₹50,000 - ₹75,000)</h3>
                    <ul className="mt-2 text-sm text-purple-700 space-y-1">
                      <li>✅ Dynamic booking system</li>
                      <li>✅ Admin dashboard</li>
                      <li>✅ Payment integration</li>
                      <li>✅ Mobile optimized</li>
                      <li>✅ 5 revisions included</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                    <h3 className="font-bold text-green-800">Premium Package (₹1,00,000+)</h3>
                    <ul className="mt-2 text-sm text-green-700 space-y-1">
                      <li>✅ Advanced analytics</li>
                      <li>✅ PWA/Mobile app</li>
                      <li>✅ Custom integrations</li>
                      <li>✅ Advanced SEO</li>
                      <li>✅ Unlimited revisions</li>
                      <li>✅ 3 months support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calculator Tab */}
          {activeTab === 'calculator' && (
            <div className="bg-white rounded-xl p-6 shadow-xl max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Calculator className="text-blue-600" />
                Quick Price Calculator
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select 
                    value={projectType} 
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Project Type</option>
                    <option value="wordpress">WordPress Site</option>
                    <option value="nextjs">Next.js Application</option>
                    <option value="fullstack">Full Stack Web App</option>
                    <option value="ecommerce">E-commerce Site</option>
                    <option value="dashboard">Admin Dashboard</option>
                    <option value="mobile">Mobile App</option>
                    <option value="backend">Backend Only</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Complexity</label>
                  <select 
                    value={complexity} 
                    onChange={(e) => setComplexity(e.target.value)}
                    className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Complexity</option>
                    <option value="basic">Basic (Simple functionality)</option>
                    <option value="intermediate">Intermediate (Custom features)</option>
                    <option value="advanced">Advanced (Complex integrations)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline (weeks)</label>
                  <input 
                    type="number" 
                    value={timeline} 
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="Timeline in weeks" 
                    min="1" 
                    max="20"
                    className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Urgency</label>
                  <select 
                    value={urgency} 
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="flexible">Flexible Timeline (-10%)</option>
                    <option value="normal">Normal Timeline</option>
                    <option value="urgent">Urgent/Rush Job (+80%)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Client Budget Range (Optional)</label>
                  <input 
                    type="text" 
                    value={clientBudget} 
                    onChange={(e) => setClientBudget(e.target.value)}
                    placeholder="e.g., ₹50,000 - ₹1,00,000" 
                    className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <button 
                  onClick={calculatePrice}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                >
                  Calculate Minimum Price
                </button>
                
                {calculatedPrice && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-center">
                    <h3 className="text-xl font-bold">Minimum Quote: ₹{calculatedPrice.min.toLocaleString('en-IN')}</h3>
                    <p className="mt-2 opacity-90">
                      Recommended Range: ₹{calculatedPrice.min.toLocaleString('en-IN')} - ₹{calculatedPrice.max.toLocaleString('en-IN')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === 'proposals' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="text-blue-600" />
                  Proposal Template
                </h2>
                <div className="bg-gray-50 text-gray-500 p-4 rounded-lg text-sm font-mono whitespace-pre-line mb-4 max-h-80 overflow-y-auto">
                  {proposalTemplate}
                </div>
                <button 
                  onClick={() => copyToClipboard(proposalTemplate, 'Proposal template copied!')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Copy size={16} />
                  Copy Template
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="text-green-600" />
                  Contract Template
                </h2>
                <div className="bg-gray-50 text-gray-500 p-4 rounded-lg text-sm font-mono whitespace-pre-line mb-4 max-h-80 overflow-y-auto">
                  {contractTemplate}
                </div>
                <button 
                  onClick={() => copyToClipboard(contractTemplate, 'Contract template copied!')}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Copy size={16} />
                  Copy Contract
                </button>
              </div>
            </div>
          )}

          {/* Pro Tips Tab */}
          {activeTab === 'tips' && (
            <ProTips />
          )}
          

        </div>

        {/* Download Section */}
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
                onClick={generateRateCard ? generateRateCard : printCalculatorTab}
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
      </div>
    </div>
  );
};

export default FreelancingToolkit;