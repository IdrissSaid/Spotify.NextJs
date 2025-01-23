/** @format */

import PlaylistInterface from '@/constant/PlaylistInterface';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type MixContextType = {
	selectedMix: PlaylistInterface | undefined;
	setSelectedMix: React.Dispatch<React.SetStateAction<PlaylistInterface | undefined>>;
};

const MixContext = createContext<MixContextType | undefined>(undefined);

export const MixProvider = ({ children }: { children: ReactNode }) => {
	const [selectedMix, setSelectedMix] = useState<PlaylistInterface | undefined>();
	// 	() => {
	// 	const savedMix = localStorage.getItem('selectedMix');
	// 	return savedMix ? JSON.parse(savedMix) : undefined;
	// }

	useEffect(() => {
		if (selectedMix) {
			selectedMix.listening = true;
			localStorage.setItem('selectedMix', JSON.stringify(selectedMix));
		} else {
			localStorage.removeItem('selectedMix');
		}
	}, [selectedMix]);

	return (
		<MixContext.Provider value={{ selectedMix, setSelectedMix }}>{children}</MixContext.Provider>
	);
};

export const useMixContext = () => {
	const context = useContext(MixContext);

	if (!context) {
		throw new Error('useMixContext must be used within a MixProvider');
	}
	return context;
};
