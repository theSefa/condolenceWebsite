import React from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const BurialDetailsModal: React.FC<Props> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-10 w-[92vw] max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-xl p-6 md:p-8">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-display text-text-primary">
            Burial Details
          </h3>
          <button
            onClick={onClose}
            className="ml-2 rounded-full px-3 py-1 text-sm text-text-secondary hover:text-text-primary hover:bg-secondary"
            aria-label="Close burial details"
          >
            Close
          </button>
        </div>

        <div className="mt-4 space-y-6 text-sm leading-7">
          <section>
            <h4 className="font-semibold text-text-primary">Service of Songs</h4>
            <p className="text-text-secondary mt-1">Thursday 11th September, 2025</p>
            <p className="text-text-secondary">at URCC/NKST Church,</p>
            <p className="text-text-secondary">Mabushi-Abuja</p>
            <p className="text-text-secondary">6pm-9pm.</p>
          </section>

          <section>
            <h4 className="font-semibold text-text-primary">Wake</h4>
            <p className="text-text-secondary mt-1">Friday 12th September, 2025</p>
            <p className="text-text-secondary">at Gemade Village, Korinya, Konshisha LGA,</p>
            <p className="text-text-secondary">Benue State</p>
          </section>

          <section>
            <h4 className="font-semibold text-text-primary">Final interment</h4>
            <p className="text-text-secondary mt-1">Saturday 13th September, 2025</p>
            <p className="text-text-secondary">at Gemade Village, Korinya,</p>
            <p className="text-text-secondary">Konshisha LGA,</p>
            <p className="text-text-secondary">Benue State.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BurialDetailsModal;
