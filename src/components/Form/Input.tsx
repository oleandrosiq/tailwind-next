import { ComponentProps } from 'react';

type TInputPrefixProps = ComponentProps<'div'>;

export const Prefix = (props: TInputPrefixProps) => {
	return <div {...props} />;
};

type TInputControlProps = ComponentProps<'input'>;

export const Control = (props: TInputControlProps) => {
	return <input className="w-full flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" {...props} />;
};

type TInputRootProps = ComponentProps<'div'>;

export const Root = (props: TInputRootProps) => {
	return (
		<div className=" flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm" {...props} />
	);
};
