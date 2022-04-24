import { ADDITIONAL_BASE_ITEMS, ADDITIONAL_INCREASE_ITEMS } from "./types"

export const increaseQuantityItems = () => ({
    type: ADDITIONAL_INCREASE_ITEMS
});

export const baseQuantityItems = () => ({
    type: ADDITIONAL_BASE_ITEMS
});
