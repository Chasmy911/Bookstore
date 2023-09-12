import styled from 'styled-components';
import { backgroundColor } from '../../client/helper';
import { FavoriteOutlined } from '@mui/icons-material';
import { TabPanel } from '@mui/lab';

export const SelectedBookContainer = styled.div`
	max-width: 1120px;
	padding: 100px 0;
	background-color: white;
	margin: 0 auto;
`;

export const Title = styled.h2`
	text-transform: uppercase;
	color: #313037;
	font-family: Bebas Neue;
	font-size: 46px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
`;

export const BookInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

export const ImgContainer = styled.div`
	position: relative;
	width: 45%;
	background-color: ${backgroundColor};
	text-align: center;
	align-items: center;
`;

export const FavoriteRoundedContainer = styled(FavoriteOutlined)`
    position: absolute;
    right: 5px;
    top: 5px;

     &:hover{
        color: red;
        transform: scale(1.1)
    }`;

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 35%;
`;

export const Info = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const InfoName = styled.div`
	color: #a8a8a8;

	font-family: Helios;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const InfoValue = styled.div`
	color: #313037;
	font-family: Helios;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const Price = styled.div`
	color: #313037;
	font-family: Bebas Neue;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: 60px;
`;

export const StyledTab = styled(TabPanel)`
	color: #313037;
	font-family: Helios;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const SocialContainer = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-between;
`;

export const StyledButtonCart = styled.button`
	display: block;
	margin-top: 20px;
	width: 100%;
	color: white;
	background: black;
	padding: 16px 40px;
	text-transform: uppercase;
	font-family: Bebas Neue;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0.9px;

	&:hover {
		background: #5b5a62;
	}
`;
