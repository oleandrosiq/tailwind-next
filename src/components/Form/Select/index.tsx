'use client';

import { ChevronDown } from 'lucide-react';
import * as PrimitiveSelect from '@radix-ui/react-select';
import { ReactNode } from 'react';

type TSelectProps = PrimitiveSelect.SelectProps & {
	children: ReactNode;
	placeholder: string;
};

export const Select = ({ children, placeholder, ...props }: TSelectProps) => {
	return (
		<PrimitiveSelect.Root {...props}>
			<PrimitiveSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
				<PrimitiveSelect.Value className="text-black" placeholder={placeholder} />
				<PrimitiveSelect.Icon>
					<ChevronDown className="h-5 w-5 text-zinc-500" />
				</PrimitiveSelect.Icon>
			</PrimitiveSelect.Trigger>

			<PrimitiveSelect.Portal>
				<PrimitiveSelect.Content
					side="bottom"
					sideOffset={8}
					position="popper"
					className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-lg"
				>
					<PrimitiveSelect.Viewport>{children}</PrimitiveSelect.Viewport>
				</PrimitiveSelect.Content>
			</PrimitiveSelect.Portal>
		</PrimitiveSelect.Root>
	);
};
