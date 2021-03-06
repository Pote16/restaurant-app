
export interface IOrderAPI {
    orderId: number;
    status: number;
    orderDate?: number;
    tableId: number;
    paymentReference: string;
    paymentToken: string;
    totalAmount: number;
    orderedItems: IOrderedItemAPI[];
}

export interface IOrderedItemAPI {
    orderId?: number;
    itemId: number;
    number: number;
    status: number;
    text: string;
}

export interface IUserAPI {
    userID: number;
    name: string;
    roles: number[];
}

export interface ISecretUserAPI {
  name: string;
  password: string;
  roles: number[];
}

export interface IUserRoleAPI {
  roleID: number;
  name: string;
}

export interface IMenuItemAPI {
    itemId: number;
    title: string;
    desc: string;
    price: number;
    category: number[];
    allergens: number[];
    status: number;
}


export interface IMenuCategoryAPI {
    categoryId: number;
    title: string;
    desc: string;
}

export interface IGuestRequestAPI {
    guestReguestID: number;
    status: number;
    tableID: number;
}

export interface IReviewsAPI {
    id: number;
    username: string;
    itemID: number;
    stars: string;
    usercomment: string;
}

export interface IAllergensAPI {
    allergenID: number;
    name: string;
}

