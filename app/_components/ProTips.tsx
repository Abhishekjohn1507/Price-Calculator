import { Award, Users } from 'lucide-react'
import React from 'react'

function ProTips() {
  return (
<div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="text-green-600" />
                  Client Communication
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <h3 className="font-bold text-green-800 mb-2">✅ Do This:</h3>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Ask about their budget upfront</li>
                      <li>• Explain why you use modern tech (Next.js vs WordPress)</li>
                      <li>• Show portfolio examples</li>
                      <li>• Offer 3 package options</li>
                      <li>• Always ask for 50% advance</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                    <h3 className="font-bold text-red-800 mb-2">❌ Avoid This:</h3>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Competing on price alone</li>
                      <li>• Starting work without contracts</li>
                      <li>• Unlimited revisions</li>
                      <li>• Working for "exposure"</li>
                      <li>• Underestimating timelines</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="text-purple-600" />
                  Professional Rate Card
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-gray-900">
                        <th className="text-left p-2">Service</th>
                        <th className="text-left p-2">Rate</th>
                      </tr>
                    </thead>
                    <tbody className='text-gray-700 border-gray-200'>
                      <tr className="border-b"><td className="p-2">Consultation</td><td className="p-2 text-green-600 font-bold">₹2,000/hour</td></tr>
                      <tr className="border-b"><td className="p-2">WordPress Dev</td><td className="p-2 text-green-600 font-bold">₹1,500/hour</td></tr>
                      <tr className="border-b"><td className="p-2">Next.js/React</td><td className="p-2 text-green-600 font-bold">₹2,500/hour</td></tr>
                      <tr className="border-b"><td className="p-2">Backend Dev</td><td className="p-2 text-green-600 font-bold">₹2,000/hour</td></tr>
                      <tr className="border-b"><td className="p-2">Mobile App</td><td className="p-2 text-green-600 font-bold">₹3,000/hour</td></tr>
                      <tr><td className="p-2">Maintenance</td><td className="p-2 text-green-600 font-bold">₹8,000-15,000/month</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  )
}

export default ProTips
