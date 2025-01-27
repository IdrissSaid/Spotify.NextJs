/** @format */

import { Button } from "./ui/button";

export const Filter = ({ filters }: { filters: string[] }) => {
	return (
		<div className='flex gap-2 my-4 w-full overflow-x-scroll'>
			{filters.map((label, index) => {
				return (
					<Button variant={'outline'} key={index}>
						{label}
					</Button>
				);
			})}
		</div>
	);
};
