'use client'
import React from 'react';
import { DollarSign } from 'lucide-react';

const PricingGuide = () => {
  return (
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
  );
};

export default PricingGuide;