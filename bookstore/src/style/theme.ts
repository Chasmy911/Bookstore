export enum ThemeModes {
	LIGHT = 'light',
	DARK = 'dark'
}

const palette = {
	[ThemeModes.LIGHT]: {
		primary: {
			background: 'white',
			letterColor: 'black'
		}
	},
	[ThemeModes.DARK]: {
		primary: {
			background: 'black',
			letterColor: 'grey'
		}
	}
};

export const CreateTheme = (mode: ThemeModes) => {
	return {
		themeMode: mode,
		palette: {
			mode: mode,
			...palette[mode]
		}
	};
};
