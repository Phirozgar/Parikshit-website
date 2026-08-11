import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const link1stYear = "https://forms.cloud.microsoft/r/KERUvP9Z0R";
  const link2ndYear = "https://forms.cloud.microsoft/r/UFnhfgYUqp";

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Dimmed Clean Backdrop with Framer Motion Soft Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black/75"
            onClick={handleClose}
          />

          {/* Minimalist Modal Window with Framer Motion Soft Spring Scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 24,
              mass: 0.8
            }}
            className="relative w-full max-w-lg bg-[#111111] border border-[#7AECEC]/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10"
          >
            {/* Subtle Close Icon */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#7AECEC]/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>

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
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-[#7AECEC]/15 hover:border-[#7AECEC]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="text-sm font-semibold text-white">
                    1st Year Students
                  </div>
                  <div className="text-xs text-[#7AECEC]/70 mt-0.5">
                    Open for All Subsystems
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={link1stYear}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#7AECEC] hover:bg-white text-black font-semibold text-xs rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </motion.div>

              {/* 2nd Year Option */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-[#7AECEC]/15 hover:border-[#7AECEC]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="text-sm font-semibold text-white">
                    2nd Year Students
                  </div>
                  <div className="text-xs text-[#7AECEC]/70 mt-0.5">
                    Open for EPS & Admin Subsystems
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={link2ndYear}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#7AECEC] hover:bg-white text-black font-semibold text-xs rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
