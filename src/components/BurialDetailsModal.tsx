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
            className="ml-4 rounded-full px-3 py-1 text-sm text-text-secondary hover:text-text-primary hover:bg-secondary"
            aria-label="Close burial details"
          >
            Close
          </button>
        </div>

        <div className="mt-4 space-y-6 text-sm leading-7">
          <section>
            <h4 className="font-semibold text-text-primary">
              Thursday 11th September, 2025 — Service of Songs
            </h4>
            <ul className="list-disc pl-5 text-text-secondary mt-2 space-y-1">
              <li>At URCC/NKST Church, Mabushi-Abuja. 6pm-9pm.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-semibold text-text-primary">
              Friday 12th September, 2025 — Wake
            </h4>
            <ul className="list-disc pl-5 text-text-secondary mt-2 space-y-1">
              <li>At Gemade Village, Korinya, Konshisha LGA, Benue State.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-semibold text-text-primary">
              Saturday 13th September, 2025 — Final Interment
            </h4>
            <ul className="list-disc pl-5 text-text-secondary mt-2 space-y-1">
              <li>At Gemade Village, Korinya, Konshisha LGA, Benue State. Starts 10am.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BurialDetailsModal;

