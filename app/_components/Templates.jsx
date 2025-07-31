'use client'
import React from 'react';
import { FileText, Copy } from 'lucide-react';

const Templates = ({ showNotification }) => {
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

  const copyToClipboard = async (text, successMessage) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification(successMessage);
    } catch (err) {
      showNotification('Copy failed. Please copy manually.', 'error');
    }
  };

  return (
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
  );
};

export default Templates;