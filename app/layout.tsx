/** @format */

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { RootProvider } from '@/components/RootProvider';
import { Header } from '@/components/Header';
import { Library } from '@/components/Library';
import { TrackOverview } from '@/components/TrackOverview';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Spotify',
	description: 'Spotify is a digital music service that gives you access to millions of songs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning /*={process.env.NODE_ENV === 'production'}*/>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen`}>
				<RootProvider>
					<div className='px-2 flex flex-col h-full'>
						<div className='h-[5vh]'>
							<Header />
						</div>
						<div className='h-[87vh] grid grid-cols-9 gap-2'>
							<div className='col-span-2'>
								<Library />
							</div>
							<div className='col-span-5'>{children}</div>
								<div className='col-span-2'>
									<TrackOverview />
								</div>
						</div>
						<div className='h-[8vh]'></div>
					</div>
				</RootProvider>
			</body>
		</html>
	);
}
