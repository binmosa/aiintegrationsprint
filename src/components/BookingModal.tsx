'use client'

import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      (async function () {
        const cal = await getCalApi({ "namespace": "30min" })
        cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" })
      })()
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-primary-900">
              Book Your Free 30-Min Consultation
            </h2>
            <p className="text-gray-600 mt-1">
              Schedule a time to discuss your AI integration needs
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Calendar Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="min-h-[600px]">
            {/* Cal.com embed button - this will be replaced by the actual calendar */}
            <button 
              data-cal-namespace="30min"
              data-cal-link="unietal/30min"
              data-cal-config='{"layout":"month_view"}'
              className="w-full h-full min-h-[600px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-accent-400 transition-colors"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">📅</div>
                <div className="text-lg font-semibold text-primary-900 mb-2">
                  Loading Calendar...
                </div>
                <div className="text-gray-600">
                  Click here if the calendar doesn&apos;t load automatically
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              🔒 Your information is secure and will never be shared
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Questions? Email us at hello@aiintegrationsprint.com
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}