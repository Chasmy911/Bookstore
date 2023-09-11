import React from 'react';
import {
	ArticleContainer,
	Price,
	StyledImg,
	StyledInfo,
	StyledItem,
	StyledTitle,
	Image,
	PriceContainer
} from './styles';
import { IBook } from '../../../types';

const BookItem = (book: IBook) => {
	return (
		<StyledItem>
			<StyledImg>
				<Image src={book.image} />
			</StyledImg>
			<StyledTitle>{book.title}</StyledTitle>
			<StyledInfo>
				<ArticleContainer>
					<div>Art.</div>
					<div>{book.isbn13}</div>
				</ArticleContainer>
				<PriceContainer>
					<div>Price</div>
					<Price>{book.price}</Price>
				</PriceContainer>
			</StyledInfo>
		</StyledItem>
	);
};

export default BookItem;
