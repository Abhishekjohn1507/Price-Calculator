'use client'

// Templates for proposal and contract
export const proposalTemplate = `Subject: Professional Web Development Proposal

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

export const contractTemplate = `FREELANCE DEVELOPMENT CONTRACT

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

// Function to generate toolkit data for download
export const generateToolkitData = () => {
  return {
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
};

// HTML template for rate card
export const rateCardHTML = `<!DOCTYPE html>
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

// Utility function to download a file
export const downloadFile = (content, filename, type) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  
  URL.revokeObjectURL(url);
};