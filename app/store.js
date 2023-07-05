import { create } from "zustand";

const store = (set) => ({
    name: "",
    email: "",
    phoneNumber: "",
    plan: "arcade",
    yearly: false,
    onlineService: false,
    onlineServicePrice: 1,
    largerStorage: false,
    largerStoragePrice: 2,
    customProfile: false,
    customProfilePrice: 2,
    nameErr: false,
    emailErr: false,
    phoneErr: false,
    price: 9,
    priceTotal: 9,
    setName: (name) => set(() => ({ name: name })),
    setEmail: (email) => set(() => ({ email: email })),
    setPhoneNumber: (phoneNumber) => set(() => ({ phoneNumber: phoneNumber })),
    setPlan: (plan) => set(() => ({ plan: plan })),
    setYearly: (yearly) => set(() => ({ yearly: yearly })),
    setOnlineService: (onlineService) => set(() => ({ onlineService: onlineService })),
    setLargerStorage: (largerStorage) => set(() => ({ largerStorage: largerStorage })),
    setCustomProfile: (customProfile) => set(() => ({ customProfile: customProfile })),
    setNameErr: (nameErr) => set(() => ({ nameErr: nameErr })),
    setEmailErr: (emailErr) => set(() => ({ emailErr: emailErr })),
    setPhoneErr: (phoneErr) => set(() => ({ phoneErr: phoneErr })),
    setPrice: (price) => set(() => ({ price: price })),
    setPriceTotal: (priceTotal) => set(() => ({ priceTotal: priceTotal})) 
})

export const useStore = create(store)
