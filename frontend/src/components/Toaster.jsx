import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';
import useUIStore from '../store/useUIStore.js';

export default function Toaster() {
  const toasts = useUIStore((s) => s.toasts);
  const dismissToast = useUIStore((s) => s.dismissToast);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[100] flex flex-col items-center gap-2 px-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border border-ink-600 bg-ink-800 p-4 shadow-2xl"
          >
            {toast.type === 'error' ? (
              <XCircle size={18} className="mt-0.5 shrink-0 text-negative" />
            ) : (
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-positive" />
            )}
            <p className="flex-1 text-sm text-white/90">{toast.message}</p>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => dismissToast(toast.id)}
              className="shrink-0 text-muted transition-colors hover:text-white"
            >
              <X size={15} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
