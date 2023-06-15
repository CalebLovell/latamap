import { create } from 'zustand';

import type { LeaderReturn } from '~/data/types';

type MapState = {
	leaders: LeaderReturn[];
	setLeaders: (by: LeaderReturn[]) => void;
	date: Date;
	setDate: (by: Date) => void;
	selectedCountry: string | undefined;
	setSelectedCountry: (by: string | undefined) => void;
	mapColorType: `global` | `usa`;
	setMapColorType: (by: `global` | `usa`) => void;
};

export const useMapStore = create<MapState>(set => ({
	leaders: [],
	setLeaders: by => set({ leaders: by }),
	date: new Date(),
	setDate: by => set(() => ({ date: by })),
	selectedCountry: `United States of America`,
	setSelectedCountry: by => set(() => ({ selectedCountry: by })),
	mapColorType: `global`,
	setMapColorType: by => set(() => ({ mapColorType: by })),
}));

type AppState = {
	sidebarIsOpen: boolean;
	setSidebarIsOpen: (by: boolean) => void;
	slideoverIsOpen: boolean;
	setSlideoverIsOpen: (by: boolean) => void;
	bannerIsOpen: boolean;
	setBannerIsOpen: (by: boolean) => void;
	keyIsVisible: boolean;
	setKeyIsVisible: (by: boolean) => void;
	panelIsVisible: boolean;
	setPanelIsVisible: (by: boolean) => void;
	dateModalIsOpen: boolean;
	setDateModalIsOpen: (by: boolean) => void;
	disclaimerModalIsOpen: boolean;
	setDisclaimerModalIsOpen: (by: boolean) => void;
};

export const useAppStore = create<AppState>(set => ({
	sidebarIsOpen: false,
	setSidebarIsOpen: (by: boolean) => set({ sidebarIsOpen: by }),
	slideoverIsOpen: false,
	setSlideoverIsOpen: (by: boolean) => set({ slideoverIsOpen: by }),
	bannerIsOpen: true,
	setBannerIsOpen: (by: boolean) => set({ bannerIsOpen: by }),
	keyIsVisible: true,
	setKeyIsVisible: (by: boolean) => set({ keyIsVisible: by }),
	panelIsVisible: true,
	setPanelIsVisible: (by: boolean) => set({ panelIsVisible: by }),
	dateModalIsOpen: false,
	setDateModalIsOpen: by => set(() => ({ dateModalIsOpen: by })),
	disclaimerModalIsOpen: false,
	setDisclaimerModalIsOpen: by => set(() => ({ disclaimerModalIsOpen: by })),
}));
