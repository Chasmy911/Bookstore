export interface IBook {
	title: string;
	subtitle: string;
	isbn13: string;
	price: string;
	image: string;
	url: string;
	authors?: string;
	publisher?: string;
	isbn10?: string;
	pages?: string;
	year?: string;
	rating?: string;
	desc?: string;
	error?: string;
	isFavourite?: boolean;
}

export type BaseActions<T> = {
	type: T;
};

export type BaseActionsWithPayload<T, P> = {
	type: T;
	payload: P;
};
