import { create } from "zustand";

const useAddressStore = create((set) => ({
  addresses: [],

  setAddresses: (newAddresses) => set({ addresses: newAddresses }),

  addAddress: (newAddress) =>
    set((state) => ({ addresses: [...state.addresses, newAddress] })),

  removeAddress: (addressId) =>
    set((state) => ({
      addresses: state.addresses.filter((address) => address._id !== addressId),
    })),
}));

export default useAddressStore;
