import { createWithEqualityFn } from "zustand/traditional";
import { shared } from "use-broadcast-ts";

const useAppStore = createWithEqualityFn(
    shared((set) => ({
        open: false,
        setOpen: (open) => set({ open }),
    })),
    Object.is
);

export default useAppStore;