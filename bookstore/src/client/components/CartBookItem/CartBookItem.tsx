import React from 'react';
import {
	ArticleContainer,
	Price,
	StyledImg,
	StyledInfo,
	StyledItem,
	StyledTitle,
	Image,
	PriceContainer,
	PriceDiv,
	StyledCartBookInfo,
	CartBookContainer,
	AmountContainer
} from './styles';
import { IBook } from '../../../types';

import { Add, Close, Remove } from '@mui/icons-material';
import { useActions } from '../../../store/hooks/useActions';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../../store/AllBooks/AllBooksSelector';

const CartBookItem = (book: IBook) => {
	const { removeBookFromCart } = useActions();
	const cartbookArr = useSelector(allBooksSelectors.getCartBooksSelector);
		const cartBook = cartbookArr.find((item) => item.isbn13 === book?.isbn13);

	const removeBook = () => {
		removeBookFromCart(book.isbn13);
	};

	return (
		<StyledItem>
			<CartBookContainer>
				<StyledImg>
					<Image src={book.image} />
				</StyledImg>
				<StyledCartBookInfo>
					<StyledTitle>{book.title}</StyledTitle>
					<StyledInfo>
						<ArticleContainer>
							<div>Art.</div>
							<div>{book.isbn13}</div>
						</ArticleContainer>
						<PriceContainer>
							<PriceDiv>Price</PriceDiv>
							<Price>{book.price}</Price>
						</PriceContainer>
						<AmountContainer>
							<IconButton>
								<Remove />
							</IconButton>
							<div>{cartBook!.amount}</div>
							<IconButton>
								<Add />
							</IconButton>
						</AmountContainer>
					</StyledInfo>
				</StyledCartBookInfo>
			</CartBookContainer>

			<Close color="action" onClick={removeBook} />
		</StyledItem>
	);
};

export default CartBookItem;
