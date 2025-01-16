/** @format */

'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { MixProvider } from './MixProvider';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
				<MixProvider>{children}</MixProvider>
			</ThemeProvider>
		</>
	);
};
