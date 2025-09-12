import { create } from "zustand";
import axios from "axios";
import { data } from "react-router-dom";

export const useDataOrders = create((set) => ({
  origindata: [],
  data: [],
  loading: false,
  error: null,
  search: "",

  fetchOrders: async () => {
    try {
      set({ loading: true });
      const response = await axios.get(
        `${import.meta.env.VITE_API_baseurl}orders`
      );
      set({
        data: response.data.data,
        loading: false,
        origindata: response.data.data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  fetchOrdersbyStatusSuccess: async () => {
    try {
      set({ loading: true });
      const response = await axios.get(
        `${import.meta.env.VITE_API_baseurl}orders/paid`
      );
      set({
        data: response.data.data,
        loading: false,
        origindata: response.data.data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  fetchOrdersbyStatusFailed: async () => {
    try {
      set({ loading: true });
      const response = await axios.get(
        `${import.meta.env.VITE_API_baseurl}orders/expired`
      );
      set({
        data: response.data.data,
        loading: false,
        origindata: response.data.data,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  findOrder: async (id) => {
    try {
      set({ loading: true });
      const response = await axios.get(
        `${import.meta.env.VITE_API_baseurl}orders/${id}`
      );
      set({
        data: response.data,
        loading: false,
      });
    } catch (error) {}
  },

  DateAsc: () => {
    set((state) => ({
      data: [...state.data].sort(
        (a, b) => new Date(a.tanggal_pembelian) - new Date(b.tanggal_pembelian)
      ),
    }));
  },

  DateDesc: () => {
    set((state) => ({
      data: [...state.data].sort(
        (a, b) => new Date(b.tanggal_pembelian) - new Date(a.tanggal_pembelian)
      ),
    }));
  },

  SearchName: () => {
    // console.log(name);
    set((state) => ({
      data: state.origindata.filter(
        (item) =>
          item.nama_pelanggan.toLowerCase() === state.search.toLowerCase()
      ),
    }));
  },

  SearchInput: (name) => {
    set({ search: name });
  },

  ResetSearch: () => {
    set({ search: "" });
  },

  ResetData: () => {
    set((state) => ({ data: state.origindata }));
  },
}));

export const useSaranStore = create((set) => ({
  origindata: [],
  data: [],
  loading: false,

  findSaran: async (id) => {
    try {
      set({ loading: true });
      const response = await axios.get(
        `${import.meta.env.VITE_API_baseurl}saran`
      );
      set({
        data: response.data.data,
        loading: false,
        origindata: response.data.data,
      });
    } catch (error) {
      set({ loading: false });
    }
  },

  DateAscSaran: () => {
    set((state) => ({
      data: [...state.data].sort((a, b) => a.id_saran - b.id_saran),
    }));
  },

  DateDescSaran: () => {
    set((state) => ({
      data: [...state.data].sort((a, b) => b.id_saran - a.id_saran),
    }));
  },
}));

// export { useDataOrders, useSaranStore };
