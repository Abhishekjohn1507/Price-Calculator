'use client'
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Calculator } from 'lucide-react';

const PriceCalculator = forwardRef(({ showNotification }, ref) => {
  const [projectType, setProjectType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [timeline, setTimeline] = useState('');
  const [clientBudget, setClientBudget] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [projectName, setProjectName] = useState('Web Development Project');
  const [companyName, setCompanyName] = useState('Client Company');
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const calculatorRef = useRef(null);
  
  // Expose the printCalculatorTab function to the parent component
  useImperativeHandle(ref, () => ({
    printCalculatorTab
  }));

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

  const printCalculatorTab = () => {
    if (!calculatorRef.current) return;

    // Extract the calculator content
    const calculatorContent = calculatorRef.current.innerHTML;
    
    // Create a new window
    const newWin = window.open("", "_blank");
    if (!newWin) {
      showNotification("Popup blocked! Please allow popups to print.", "error");
      return;
    }
    
    // Get the document of the new window
    const doc = newWin.document;
    
    // Create the HTML structure
    doc.open();
    
    // Write the HTML head
    doc.write('<html><head>');
    doc.write('<title>Project Cost Summary - Abhishek</title>');
    
    // Write the CSS styles
    doc.write('<style>');
    doc.write('@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");');
    doc.write('body { font-family: "Poppins", "Segoe UI", sans-serif; padding: 40px; line-height: 1.6; color: #2d3748; max-width: 800px; margin: auto; background-color: #edf2f7; }');
    doc.write('.print-container { background-color: white; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); padding: 30px; margin-bottom: 30px; }');
    doc.write('.header { text-align: center; margin-bottom: 30px; background: linear-gradient(135deg, #3182ce, #5a67d8); padding: 20px; border-radius: 10px; color: white; position: relative; }');
    doc.write('.company-logo { position: absolute; top: 20px; left: 20px; bottom: 60px; width: 200px; height: auto; }');
    doc.write('h1 { color: white; border-bottom: 3px solid rgba(255,255,255,0.3); padding-bottom: 15px; font-weight: 700; font-size: 28px; }');
    doc.write('.project-company { color: rgba(255,255,255,0.9); font-size: 18px; margin-top: 10px; font-weight: 500; }');
    doc.write('h2 { color: #2c5282; font-size: 22px; margin-top: 20px; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }');
    doc.write('h3 { color: #2c5282; font-size: 18px; margin-top: 15px; margin-bottom: 10px; }');
    doc.write('.calculator-icon { font-size: 24px; color: #4299e1; }');
    doc.write('.field { background-color: #ebf8ff; padding: 12px 15px; border-radius: 8px; margin-bottom: 15px; display: flex; justify-content: space-between; }');
    doc.write('.field-label { font-weight: 600; color: #2c5282; }');
    doc.write('.field-value { font-weight: 500; }');
    doc.write('.price-result { background: linear-gradient(135deg, #4299e1, #667eea); color: white; padding: 20px; border-radius: 10px; text-align: center; margin-top: 25px; }');
    doc.write('.price-title { font-size: 20px; font-weight: 700; margin-bottom: 10px; }');
    doc.write('.price-range { font-size: 16px; opacity: 0.9; }');
    doc.write('.footer { text-align: center; margin-top: 30px; font-size: 14px; color: #718096; position: relative; }');
    doc.write('.signature { position: absolute; bottom: 0; right: 0; width: 120px; height: auto; }');
    doc.write('.rate-card { background-color: #f0f9ff; border-radius: 10px; padding: 20px; margin-top: 30px; border-left: 4px solid #3182ce; }');
    doc.write('.rate-card h3 { color: #3182ce; margin-top: 0; }');
    doc.write('.rate-card table { width: 100%; border-collapse: collapse; margin: 15px 0; }');
    doc.write('.rate-card th, .rate-card td { padding: 10px; border: 1px solid #cbd5e0; text-align: left; }');
    doc.write('.rate-card th { background-color: #e6f0fd; color: #2c5282; font-weight: 600; }');
    doc.write('.maintenance-info { background-color: #f0fff4; border-radius: 10px; padding: 20px; margin-top: 20px; border-left: 4px solid #38a169; }');
    doc.write('.payment-info { background-color: #fff5f5; border-radius: 10px; padding: 20px; margin-top: 20px; border-left: 4px solid #e53e3e; }');
    doc.write('.info-section { margin-bottom: 15px; }');
    doc.write('.info-section ul { padding-left: 20px; margin: 10px 0; }');
    doc.write('.info-section li { margin-bottom: 5px; }');
    doc.write('@media print { body { background-color: white; padding: 0; } .print-container { box-shadow: none; padding: 0; } }');
    doc.write('</style>');
    doc.write('</head><body>');
    
    // Write the body content
    doc.write('<div class="print-container">');  
    doc.write(`<div class="header"><img src="${window.location.origin}/cyberblock.png" class="company-logo" alt="Company Logo"><h1 style="margin-top:30px">🧮 Project Cost Summary</h1><div class="project-company">Project: <span id="project-name">${projectName}</span> | Company: <span id="company-name">${companyName}</span></div></div>`);  
    
    // Add the calculator content
    doc.write('<div id="calculator-content">');  
    doc.write(calculatorContent);
    doc.write('</div>');
    
    // Add Rate Card section
    doc.write('<div class="rate-card">');  
    doc.write('<h3>📋 Service Rate Card</h3>');  
    doc.write('<table>');  
    doc.write('<tr><th>Service</th><th>Price Range (INR)</th><th>Timeline</th></tr>');  
    doc.write('<tr><td>WordPress Development</td><td>₹20,000 - ₹50,000</td><td>2-4 weeks</td></tr>');  
    doc.write('<tr><td>Next.js Application</td><td>₹50,000 - ₹1,00,000</td><td>3-6 weeks</td></tr>');  
    doc.write('<tr><td>Full-Stack Web App</td><td>₹80,000 - ₹1,50,000</td><td>4-8 weeks</td></tr>');  
    doc.write('<tr><td>E-commerce Site</td><td>₹75,000 - ₹1,50,000</td><td>4-8 weeks</td></tr>');  
    doc.write('<tr><td>Mobile App</td><td>₹1,00,000 - ₹2,00,000</td><td>6-10 weeks</td></tr>');  
    doc.write('</table>');  
    doc.write('</div>');  
    
    // Add Package Options section
    doc.write('<div class="rate-card" style="background-color: #f0f7ff; border-left: 4px solid #4299e1;">');  
    doc.write('<h3>📦 Package Options</h3>');  
    doc.write('<div class="info-section">');  
    
    doc.write('<h4 style="color: #3182ce; margin: 15px 0 10px;">Basic Package (₹20,000 - ₹30,000)</h4>');  
    doc.write('<ul>');  
    doc.write('<li>✅ Static pages + contact form</li>');  
    doc.write('<li>✅ Responsive design</li>');  
    doc.write('<li>✅ Basic SEO setup</li>');  
    doc.write('<li>✅ 2 revisions included</li>');  
    doc.write('</ul>');  
    
    doc.write('<h4 style="color: #3182ce; margin: 15px 0 10px;">Pro Package (₹50,000 - ₹75,000)</h4>');  
    doc.write('<ul>');  
    doc.write('<li>✅ Dynamic booking system</li>');  
    doc.write('<li>✅ Admin dashboard</li>');  
    doc.write('<li>✅ Payment integration</li>');  
    doc.write('<li>✅ Mobile optimized</li>');  
    doc.write('<li>✅ 5 revisions included</li>');  
    doc.write('</ul>');  
    
    doc.write('<h4 style="color: #3182ce; margin: 15px 0 10px;">Premium Package (₹1,00,000+)</h4>');  
    doc.write('<ul>');  
    doc.write('<li>✅ Advanced analytics</li>');  
    doc.write('<li>✅ PWA/Mobile app</li>');  
    doc.write('<li>✅ Custom integrations</li>');  
    doc.write('<li>✅ Advanced SEO</li>');  
    doc.write('<li>✅ Unlimited revisions</li>');  
    doc.write('<li>✅ 3 months support</li>');  
    doc.write('</ul>');  
    
    doc.write('</div>');  
    doc.write('</div>');  
    
    // Add Monthly Maintenance section
    doc.write('<div class="maintenance-info">');
    doc.write('<h3>🔧 Monthly Maintenance Options</h3>');
    doc.write('<div class="info-section">');
    doc.write('<ul>');
    doc.write('<li><strong>Basic Plan:</strong> ₹2,000/month - Security updates, backups, minor fixes</li>');
    doc.write('<li><strong>Standard Plan:</strong> ₹3,500/month - Basic plan + content updates, performance optimization</li>');
    doc.write('<li><strong>Premium Plan:</strong> ₹5,000/month - Standard plan + priority support, monthly feature additions</li>');
    doc.write('</ul>');
    doc.write('<p>All maintenance plans include 24/7 monitoring and monthly performance reports.</p>');
    doc.write('</div>');
    doc.write('</div>');
    
    // Add Payment Gateway section
    doc.write('<div class="payment-info">');
    doc.write('<h3>💳 Payment Details</h3>');
    doc.write('<div class="info-section">');
    doc.write('<p><strong>Payment Terms:</strong> 50% advance payment, 50% upon project completion</p>');
    doc.write('<p><strong>Accepted Payment Methods:</strong></p>');
    doc.write('<ul>');
    doc.write('<li>Bank Transfer (NEFT/IMPS/RTGS)</li>');
    doc.write('<li>UPI Payments</li>');
    doc.write('<li>PayPal (for international clients)</li>');
    doc.write('</ul>');
    doc.write('<p><strong>Additional Costs:</strong> Domain registration, hosting, third-party services, and premium plugins are not included in the project quote.</p>');
    doc.write('</div>');
    doc.write('</div>');
    
    // Add the footer
    doc.write('<div class="footer">');  
    doc.write('<p>Generated on ' + new Date().toLocaleDateString() + ' | Abhishek\'s Freelancing Toolkit</p>');  
    doc.write('<p>This quote is valid for 30 days from the generation date.</p>');  
    doc.write(`<img src="${window.location.origin}/sign.png" class="signature" alt="Signature">`);  
    doc.write('</div>');  
    doc.write('</div>');  
    
    // Add the JavaScript for formatting
    doc.write('<script>');
    doc.write('document.addEventListener("DOMContentLoaded", function() {');
    doc.write('const container = document.getElementById("calculator-content");');
    
    // Replace the calculator icon with text emoji
    doc.write('const title = container.querySelector("h2");');
    doc.write('if (title) {');
    doc.write('title.innerHTML = title.innerHTML.replace(/<svg[^>]*>[^<]*<\/svg>/, \'<span class="calculator-icon">🧮</span>\');');
    doc.write('}');
    
    // Format form fields
    doc.write('const formFields = container.querySelectorAll("div > div > label");');
    doc.write('formFields.forEach(label => {');
    doc.write('const parent = label.parentElement;');
    doc.write('const input = parent.querySelector("input, select");');
    doc.write('if (input) {');
    doc.write('let value = input.value;');
    doc.write('if (input.tagName === "SELECT" && input.selectedIndex >= 0) {');
    doc.write('value = input.options[input.selectedIndex].text;');
    doc.write('}');
    
    doc.write('const fieldDiv = document.createElement("div");');
    doc.write('fieldDiv.className = "field";');
    
    doc.write('const labelSpan = document.createElement("span");');
    doc.write('labelSpan.className = "field-label";');
    doc.write('labelSpan.textContent = label.textContent;');
    
    doc.write('const valueSpan = document.createElement("span");');
    doc.write('valueSpan.className = "field-value";');
    doc.write('valueSpan.textContent = value || "Not specified";');
    
    doc.write('fieldDiv.appendChild(labelSpan);');
    doc.write('fieldDiv.appendChild(valueSpan);');
    
    doc.write('parent.parentNode.replaceChild(fieldDiv, parent);');
    doc.write('}');
    doc.write('});');
    
    // Format the price result
    doc.write('const priceResult = container.querySelector("[class*=\"bg-gradient-to-r from-green-500\"]");');
    doc.write('if (priceResult) {');
    doc.write('const minQuote = priceResult.querySelector("h3")?.textContent || "";');
    doc.write('const range = priceResult.querySelector("p")?.textContent || "";');
    
    doc.write('const newPriceDiv = document.createElement("div");');
    doc.write('newPriceDiv.className = "price-result";');
    
    doc.write('const priceTitleDiv = document.createElement("div");');
    doc.write('priceTitleDiv.className = "price-title";');
    doc.write('priceTitleDiv.textContent = minQuote;');
    
    doc.write('const priceRangeDiv = document.createElement("div");');
    doc.write('priceRangeDiv.className = "price-range";');
    doc.write('priceRangeDiv.textContent = range;');
    
    doc.write('newPriceDiv.appendChild(priceTitleDiv);');
    doc.write('newPriceDiv.appendChild(priceRangeDiv);');
    
    doc.write('priceResult.parentNode.replaceChild(newPriceDiv, priceResult);');
    doc.write('}');
    
    // Remove the calculate button
    doc.write('const calculateButton = container.querySelector("button");');
    doc.write('if (calculateButton) {');
    doc.write('calculateButton.remove();');
    doc.write('}');
    doc.write('});');
    
    // Auto-print after formatting is complete
    doc.write('setTimeout(() => { window.print(); }, 500);');
    doc.write('</script>');
    
    doc.write('</body></html>');
    doc.close();
    
    newWin.focus();
    showNotification("Calculator tab content sent to print.");
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-xl max-w-2xl mx-auto" ref={calculatorRef}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Calculator className="text-blue-600" />
        Quick Price Calculator
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
            <input 
              type="text" 
              value={projectName} 
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name" 
              className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input 
              type="text" 
              value={companyName} 
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name" 
              className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
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
  );
});

// End of PriceCalculator component

export default PriceCalculator;