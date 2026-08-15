import { create } from 'zustand';

let toastId = 0;

const useUIStore = create((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

  toasts: [],
  pushToast: (toast) =>
    set((state) => {
      const id = ++toastId;
      // Auto-dismiss after 4.5s
      setTimeout(() => {
        set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
      }, 4500);
      return { toasts: [...state.toasts, { id, ...toast }] };
    }),
  dismissToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

export default useUIStore;
