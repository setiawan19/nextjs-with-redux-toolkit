export type itemType = 'gr'| 'sdm'| 'sdt';
export interface FoodState {
    uid: string;
    name: string;
    used: boolean;
    quantity: number;
    type: itemType;
    isEdit: boolean;
}