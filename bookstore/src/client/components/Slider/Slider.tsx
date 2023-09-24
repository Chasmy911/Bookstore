import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackStyled, ArrowForwardStyled, SliderWrapper } from './styles';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const MainSlider = ({ children }: any) => {
	function SampleNextArrow(props: any) {
		const { onClick, style } = props;
		return (
			<ArrowForwardStyled
				style={{ ...style, display: 'block', background: 'white', color: 'grey' }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props: any) {
		const { onClick, style, className } = props;
		return (
			<ArrowBackStyled
				className={className}
				style={{ ...style, display: 'block', background: 'white', color: 'grey' }}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		infinite: true,
		speed: 500,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};
	return (
		<SliderWrapper>
			<Slider {...settings}>{children}</Slider>
		</SliderWrapper>
	);
};

export default MainSlider;
