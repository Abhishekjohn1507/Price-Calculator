'use client';
import React from 'react';
import { Printer } from 'lucide-react';

const HotelPricing = () => {
  const features = [
    { title: "🛏️ Room Management", desc: "Manage rooms, types & availability", price: "₹5,000 - ₹8,000" },
    { title: "📅 Booking System", desc: "Manual/Online booking with calendar", price: "₹8,000 - ₹15,000" },
    { title: "👤 Guest Management", desc: "Profile, KYC, guest history", price: "₹5,000 - ₹7,000" },
    { title: "🧾 Billing & Invoicing", desc: "Tax & GST-compliant billing system", price: "₹7,000 - ₹12,000" },
    { title: "🕒 Check-in/Check-out", desc: "Real-time guest status tracking", price: "₹5,000 - ₹7,000" },
    { title: "📊 Admin Dashboard", desc: "Reports, occupancy & earnings overview", price: "₹5,000 - ₹10,000" },
    { title: "💳 Payment Gateway", desc: "Razorpay, UPI, Stripe integration", price: "₹6,000 - ₹10,000" },
    { title: "👥 Multi-user Roles", desc: "Admin, Receptionist, Housekeeping", price: "₹5,000 - ₹8,000" },
    { title: "📩 SMS/Email Alerts", desc: "Automated guest notifications", price: "₹4,000 - ₹7,000" },
    { title: "📄 Reports Export", desc: "PDF / Excel export for accounting", price: "₹3,000 - ₹6,000" },
    { title: "🛎️ Room Service", desc: "Food, housekeeping service logs", price: "₹3,000 - ₹5,000" },
    { title: "📱 PWA Ready", desc: "Installable web app on phone", price: "₹3,000 - ₹5,000" },
  ];

  const packages = [
    {
      name: "Basic Package (₹20,000 - ₹30,000)",
      features: [
        "🛏️ Room + Guest + Booking management",
        "🧾 Basic billing & check-in system",
        "🎯 2 Revisions included",
        "🎨 Simple design + responsive layout",
      ],
      color: "bg-blue-100",
    },
    {
      name: "Pro Package (₹50,000 - ₹75,000)",
      features: [
        "📅 Dynamic booking calendar",
        "📊 Admin dashboard + reports",
        "💳 Online payment integration",
        "📩 SMS/Email alerts",
        "🔁 5 Revisions included",
      ],
      color: "bg-purple-100",
    },
    {
      name: "Premium Package (₹1,00,000+)",
      features: [
        "📱 PWA support + mobile optimization",
        "🔐 Multi-user roles + staff logins",
        "🛎️ Room service, inventory, staff mgmt",
        "⚙️ API integration & custom modules",
        "📈 Analytics & performance tracking",
      ],
      color: "bg-green-100",
    },
  ];

  const pricing = [
    { title: "🌐 Domain + Hosting", value: "₹3,000 - ₹7,000 (one-time)" },
    { title: "🔧 Monthly Maintenance", value: "₹2,000 - ₹5,000/month" },
    { title: "🎓 Staff Training", value: "₹2,000 - ₹4,000 (one-time)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5B22FF] to-[#0F0F0F] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">🏨 Hotel Pricing Toolkit</h1>
          <button
            onClick={() => window.print()}
            className="no-print flex gap-2 items-center bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            <Printer size={18} /> Print
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Feature Checklist with Prices */}
          <div className="bg-white text-black rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">💼 Feature-wise Pricing</h2>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="border-b pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{f.title}</p>
                      <p className="text-sm text-gray-700">{f.desc}</p>
                    </div>
                    <span className="text-green-600 font-medium whitespace-nowrap">{f.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Package Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-3 text-white">📦 Packages</h2>
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-xl p-5 ${pkg.color} text-black shadow-md`}>
                <h3 className="font-semibold text-lg mb-2">{pkg.name}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                  {pkg.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hosting & Maintenance Section */}
        <div className="bg-white text-black rounded-xl p-6 shadow-lg mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">🔧 Hosting & Maintenance</h2>
          <ul className="space-y-3">
            {pricing.map((item, i) => (
              <li key={i} className="flex justify-between border-b pb-2">
                <span>{item.title}</span>
                <span className="font-semibold text-green-600">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelPricing;
