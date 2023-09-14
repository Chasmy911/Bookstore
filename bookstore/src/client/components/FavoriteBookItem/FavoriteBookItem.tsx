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
	FavoriteBookContainer,
	StyledFavDookInfo
} from './styles';
import { IBook } from '../../../types';

import { Book, FavoriteBorder } from '@mui/icons-material';
import { useActions } from '../../../store/hooks/useActions';

const FavoriteBookItem = (book: IBook) => {
	const { deleteFromFavourite } = useActions();

	const deleteFavoriteBook = () => {
		deleteFromFavourite(book.isbn13);
	};

	return (
		<StyledItem>
			<FavoriteBookContainer>
				<StyledImg>
					<Image src={book.image} />
				</StyledImg>
				<StyledFavDookInfo>
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
					</StyledInfo>
				</StyledFavDookInfo>
			</FavoriteBookContainer>

			<FavoriteBorder color="error" onClick={deleteFavoriteBook} />
		</StyledItem>
	);
};

export default FavoriteBookItem;
