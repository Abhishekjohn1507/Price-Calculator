'use client'
import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const NotificationToast = ({ notification }) => {
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

export default NotificationToast;