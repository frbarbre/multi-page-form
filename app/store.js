import { create } from "zustand";

const store = (set) => ({
    name: "",
    email: "",
    phoneNumber: "",
    plan: "arcade",
    yearly: false,
    onlineService: false,
    largerStorage: false,
    customProfile: false,
    setName: (name) => set(() => ({ name: name })),
    setEmail: (email) => set(() => ({ email: email })),
    setPhoneNumber: (phoneNumber) => set(() => ({ phoneNumber: phoneNumber })),
    setPlan: (plan) => set(() => ({ plan: plan })),
    setYearly: (yearly) => set(() => ({ yearly: yearly })),
    setOnlineService: (onlineService) => set(() => ({ onlineService: onlineService })),
    setLargerStorage: (largerStorage) => set(() => ({ largerStorage: largerStorage })),
    setCustomProfile: (customProfile) => set(() => ({ customProfile: customProfile }))
})

export const useStore = create(store)
