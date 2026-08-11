import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ApplicationsPopupModalProps {
  open?: boolean;
  onClose?: () => void;
  defaultOpen?: boolean;
}

export const ApplicationsPopupModal: React.FC<ApplicationsPopupModalProps> = ({
  open,
  onClose,
  defaultOpen = true
}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  useEffect(() => {
    if (open === undefined) {
      const timer = setTimeout(() => {
        setInternalOpen(defaultOpen);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [defaultOpen, open]);

  const isModalOpen = open !== undefined ? open : internalOpen;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };

  if (!isModalOpen) return null;

  const link1stYear = "https://forms.cloud.microsoft/r/KERUvP9Z0R";
  const link2ndYear = "https://forms.cloud.microsoft/r/UFnhfgYUqp";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Dimmed Clean Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 transition-opacity duration-200"
        onClick={handleClose}
      />

      {/* Minimalist Modal Window */}
      <div className="relative w-full max-w-lg bg-[#111111] border border-[#7AECEC]/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 transition-all duration-200">

        {/* Subtle Close Icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#7AECEC]/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="text-[#7AECEC] text-xs font-mono uppercase tracking-widest mb-1.5">
            Team Parikshit • Recruitment
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Applications Open
          </h2>
        </div>

        {/* Info Cards */}
        <div className="space-y-3 mb-6">

          {/* 1st Year Option */}
          <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#7AECEC]/15 hover:border-[#7AECEC]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-white">
                1st Year Students
              </div>
              <div className="text-xs text-[#7AECEC]/70 mt-0.5">
                Open for All Subsystems
              </div>
            </div>
            <a
              href={link1stYear}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#7AECEC] hover:bg-white text-black font-semibold text-xs rounded-lg transition-colors shrink-0"
            >
              <span>Apply Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 2nd Year Option */}
          <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#7AECEC]/15 hover:border-[#7AECEC]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-white">
                2nd Year Students
              </div>
              <div className="text-xs text-[#7AECEC]/70 mt-0.5">
                Open for EPS & Admin Subsystems
              </div>
            </div>
            <a
              href={link2ndYear}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#7AECEC] hover:bg-white text-black font-semibold text-xs rounded-lg transition-colors shrink-0"
            >
              <span>Apply Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
