'use client';

import * as PrimitiveSelect from '@radix-ui/react-select';
import { Check } from 'lucide-react';

type TSelectItemProps = PrimitiveSelect.SelectItemProps & {
	text: string;
};

export const SelectItem = ({ text, ...props }: TSelectItemProps) => {
	return (
		<PrimitiveSelect.Item
			className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
			{...props}
		>
			<PrimitiveSelect.ItemText className="text-black">{text}</PrimitiveSelect.ItemText>

			<PrimitiveSelect.ItemIndicator>
				<Check className="h-4 w-4 text-violet-500" />
			</PrimitiveSelect.ItemIndicator>
		</PrimitiveSelect.Item>
	);
};
