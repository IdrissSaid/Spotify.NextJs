/** @format */

import { Bell, Download, House, Music } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export const Header = () => {
	return (
		<div className='h-full grid grid-cols-3'>
			<Music className='m-2 self-center' />
			<div className='flex w-[550px] gap-2 col-span-1 self-center'>
				<Button>
					<House width={32} height={32} />
				</Button>
				<Input placeholder='Que souhaitez-vous écouter ou regarder ?' />
			</div>
			<div className='flex gap-4 col-span-1 justify-end'>
				<div className='flex gap-2 self-center'>
					<Button>Découvrir Premium</Button>
					<Button variant={'ghost'}>
						<Download width={32} height={32} /> Installer l&apos;appli
					</Button>
				</div>
				<div className='flex gap-4 col-span-1 self-center'>
					<Button variant={'ghost'}>
						<Bell width={32} height={32} />
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar className='flex justify-center items-center bg-amber-900'>
								<AvatarImage src='' alt='@shadcn' />
								<AvatarFallback>
									<h1>G</h1>
								</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<DropdownMenuItem>Team</DropdownMenuItem>
							<DropdownMenuItem>Subscription</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
};
