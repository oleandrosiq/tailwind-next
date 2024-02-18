import { LogOut } from 'lucide-react';
import { Button } from '../Button';

export const Profile = () => {
	return (
		<div className="grid grid-cols-profile items-center gap-3">
			<img className="h-10 w-10 rounded-full" src="https://github.com/oleandrosiq.png" alt="Leandro Siqueira" />

			<div className="flex flex-col truncate">
				<span className="text-sm font-semibold text-zinc-700">Leandro Siqueira</span>
				<span className="truncate text-sm text-zinc-500">leandrosiqueira.dev@hotmail.com</span>
			</div>

			<Button type="button" variant="ghost">
				<LogOut className="h-5 w-5 text-zinc-500" />
			</Button>
		</div>
	);
};
