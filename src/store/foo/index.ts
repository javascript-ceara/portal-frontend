import { create } from "zustand";

type FooStore = {
  foo: number;
  increaseFoo: () => void;
};

export const useFooStore = create<FooStore>((set) => ({
  foo: 0,
  increaseFoo: () => set((state) => ({ foo: state.foo + 1 })),
}));
