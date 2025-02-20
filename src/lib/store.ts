import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Item = {
  id: string;
  title: string;
  description?: string;
  color: string;
  details: string;
  titleAr: string;
  descriptionAr?: string;
  colorAr: string;
  detailsAr: string;
  image: string;
  alt: string;
  imageid: string;
  price: number;
  totalPrice: number;
  size: string;
  gender: string;
  quantity: number;
  type: string;
  category: string;
  dashboardType: string;
};

export type State = {
  items: Item[];
  favorite: Item[];
  totalQuantity: number;
  totalAllPrice: number;
  totalFavQuantity: number;
  totalFavAllPrice: number;
};

export type Actions = {
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  addFavorite: (item: Item) => void;
  removeFavorite: (id: string) => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
};

export const useItemStore = create<State & Actions>()(
  persist(
    (set) => ({
      items: [],
      favorite: [],
      totalQuantity: 0,
      totalAllPrice: 0,
      totalFavQuantity: 0,
      totalFavAllPrice: 0,

      clearCart: () =>
        set({
          items: [],
          totalQuantity: 0,
          totalAllPrice: 0,
          totalFavQuantity: 0,
          totalFavAllPrice: 0,
        }),
        
      addItem: (item: Item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (!existingItem) {
            const newState = {
              items: [
                ...state.items,
                {
                  id: item.id,
                  price: item.price,
                  quantity: 1,
                  totalPrice: item.price,
                  title: item.title,
                  image: item.image,
                  color: item.color,
                  description: item.description,
                  details: item.details,
                  titleAr: item.titleAr,
                  colorAr: item.colorAr,
                  descriptionAr: item.descriptionAr,
                  detailsAr: item.detailsAr,
                  alt: item.alt,
                  dashboardType: item.dashboardType,
                  size: item.size,
                  gender: item.gender,
                  type: item.type,
                  imageid: item.imageid,
                  category: item.category,
                },
              ],
              totalQuantity: state.totalQuantity + 1,
              totalAllPrice: state.totalAllPrice + item.price,
            };
            return newState;
          }

          const updatedItems = state.items.map((existingItem) =>
            existingItem.id === item.id
              ? {
                  ...existingItem,
                  quantity: existingItem.quantity + 1,
                  totalPrice: existingItem.totalPrice + item.price,
                }
              : existingItem
          );

          return {
            items: updatedItems,
            totalQuantity: state.totalQuantity + 1,
            totalAllPrice: state.totalAllPrice + item.price,
          };
        }),

      removeItem: (id: string) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === id);
          if (!existingItem) return state;

          const updatedItems = state.items
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: item.totalPrice - item.price,
                  }
                : item
            )
            .filter((item) => item.quantity > 0);

          return {
            items: updatedItems,
            totalQuantity: state.totalQuantity - 1,
            totalAllPrice: state.totalAllPrice - existingItem.price,
          };
        }),

      addFavorite: (item: Item) =>
        set((state) => {
          const existingItem = state.favorite.find((i) => i.id === item.id);

          if (!existingItem) {
            return {
              ...state,
              favorite: [
                ...state.favorite,
                {
                  id: item.id,
                  price: item.price,
                  quantity: 1,
                  totalPrice: item.price,
                  title: item.title,
                  image: item.image,
                  color: item.color,
                  titleAr: item.titleAr,
                  colorAr: item.colorAr,
                  descriptionAr: item.descriptionAr,
                  detailsAr: item.detailsAr,
                  description: item.description,
                  details: item.details,
                  alt: item.alt,
                  dashboardType: item.dashboardType,
                  size: item.size,
                  gender: item.gender,
                  type: item.type,
                  imageid: item.imageid,
                  category: item.category,
                },
              ],
              totalFavQuantity: state.totalFavQuantity + 1,
              totalFavAllPrice: state.totalFavAllPrice + item.price,
            };
          }

          const updatedFavorites = state.favorite.map((favItem) =>
            favItem.id === item.id
              ? {
                  ...favItem,
                  quantity: favItem.quantity + 1,
                  totalPrice: favItem.totalPrice + item.price,
                }
              : favItem
          );

          return {
            ...state,
            favorite: updatedFavorites,
            totalFavQuantity: state.totalFavQuantity + 1,
            totalFavAllPrice: state.totalFavAllPrice + item.price,
          };
        }),

      removeFavorite: (id: string) =>
        set((state) => {
          const existingItem = state.favorite.find((item) => item.id === id);
          if (!existingItem) return state;

          const updatedFavorites = state.favorite
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: item.totalPrice - item.price,
                  }
                : item
            )
            .filter((item) => item.quantity > 0);

          return {
            ...state,
            favorite: updatedFavorites,
            totalFavQuantity: state.totalFavQuantity - 1,
            totalFavAllPrice: state.totalFavAllPrice - existingItem.price,
          };
        }),

      increaseItem: (id: string) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === id);
          if (!existingItem) return state;

          return {
            items: state.items.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: item.totalPrice + item.price,
                  }
                : item
            ),
            totalQuantity: state.totalQuantity + 1,
            totalAllPrice: state.totalAllPrice + existingItem.price,
          };
        }),

      decreaseItem: (id: string) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === id);
          if (!existingItem) return state;

          const updatedItems = state.items
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: item.totalPrice - item.price,
                  }
                : item
            )
            .filter((item) => item.quantity > 0);

          return {
            items: updatedItems,
            totalQuantity: state.totalQuantity - 1,
            totalAllPrice: state.totalAllPrice - existingItem.price,
          };
        }),
    }),
    {
      name: "item-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        favorite: state.favorite,
        totalQuantity: state.totalQuantity,
        totalAllPrice: state.totalAllPrice,
        totalFavQuantity: state.totalFavQuantity,
        totalFavAllPrice: state.totalFavAllPrice,
      }),
      // skipHydration: true,
    }
  )
);
