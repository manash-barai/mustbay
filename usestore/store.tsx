import { Feedback, Product } from '@/type/testimonial';
import { create } from 'zustand';

interface StoreState {
  quantity: number;
  products: Product[];
  feedBack:Feedback[];
  loading: boolean;  // Loading state
  increase: () => void;
  decrease: () => void;
  fetchProducts: () => Promise<void>;
  fetchFeedback: () => Promise<void>;
  insertFeedback:(feed:Feedback)=>void;
  deleteProduct: (productId: string) => Promise<boolean>;
  deleteFeedback: (feedbackId: string) => Promise<boolean>;
}

export const useProductStore = create<StoreState>((set) => ({
  // Initial state
  quantity: 1,
  products: [],
  feedBack:[],
  loading: false,  

  // Actions
  increase: () =>
    set((state) => ({
      quantity: state.quantity < 5 ? state.quantity + 1 : state.quantity,
    })),
  decrease: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity,
    })),

  fetchProducts: async () => {
    set({ loading: true });  // Set loading to true when the fetch starts
    try {
      const response = await fetch(
        `/api/product?page=1&limit=10`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      set({ products: data.products });
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      set({ loading: false });  // Set loading to false when the fetch is complete
    }
  },


  deleteProduct: async (productId: string) => {
    set({ loading: true });  // Set loading to true when the delete starts
    try {
      const response = await fetch(
        `/api/product/?id=${productId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete the product');
      }

      set((state) => ({
        products: state.products.filter(product => product._id !== productId),
      }));
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      return true;
      set({ loading: false });  // Set loading to false when the delete is complete
    }
  },
  fetchFeedback: async () => {
    set({ loading: true });  // Set loading to true when the fetch starts
    try {
      const response = await fetch(
        `/api/feed-back?page=1&limit=10`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      set({ feedBack: data.feedBack });
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      set({ loading: false });  // Set loading to false when the fetch is complete
    }
  },
  deleteFeedback: async (feedbackId: string) => {
    set({ loading: true });  // Set loading to true when the delete starts
    try {
      const response = await fetch(
        `/api/feed-back?id=${feedbackId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete the product');
      }

      set((state) => ({
        feedBack: state.feedBack.filter(feedback => feedback._id !== feedbackId),
      }));
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      return true;
      set({ loading: false });  // Set loading to false when the delete is complete
    }
  },
  insertFeedback: (feed: Feedback) => {
    console.log("call this function");
    
    set((state) => ({
      feedBack: [feed, ...state.feedBack], // Insert the new feedback at the beginning of the array
    }));
    console.log("my feedback",feed);
    
  }
  // Space for future functions
  // addToCart: (product) => {},
  // removeFromCart: (productId) => {},
}));
