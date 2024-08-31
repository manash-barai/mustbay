import { create } from 'zustand';

interface QuantityState {
  quantity: number;
  increase: () => void;
  decrease: () => void;
}

export const useQuantityStore = create<QuantityState>((set) => ({
  quantity: 1, // initial quantity
  increase: () =>
    set((state) => ({
      quantity: state.quantity < 5 ? state.quantity + 1 : state.quantity,
    })),
  decrease: () =>
    
    set((state) => ({
        
      quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity,
    })),
}));
