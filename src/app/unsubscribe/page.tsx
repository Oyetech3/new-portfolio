'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import type { ApiResponse } from '@/types';
import { Loader } from '../components/Loader';

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="h-screen m-auto flex items-center justify-center">
            <Loader size="lg" />
      </div>
    }>
      <UnsubscribeContent />
    </Suspense>
  );
}

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const token = searchParams.get('token');

  const handleUnsubscribe = async () => {
    if (!token) {
      setMessage({
        type: 'error',
        text: 'Invalid unsubscribe link.',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data: ApiResponse = await response.json();

      setMessage({
        type: data.success ? 'success' : 'error',
        text: data.message,
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Unsubscribe from Newsletter
        </h1>

        {!message && (
          <>
            <p className="text-gray-600 mb-6 text-center">
              Are you sure you want to unsubscribe from our newsletter?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleUnsubscribe}
                disabled={isLoading || !token}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Processing...' : 'Yes, Unsubscribe'}
              </button>
              <button
                onClick={() => window.history.back()}
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Cancel
              </button>
            </div>
          </>
        )}

        {message && (
          <div className={`p-4 rounded-md ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            <p className="text-center">{message.text}</p>
            {message.type === 'success' && (
              <div className="mt-4 text-center">
                <a
                  href="/"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Return to Homepage
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}