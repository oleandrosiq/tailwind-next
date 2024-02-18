'use client';

import { ComponentProps, createContext, useContext, useId, useState } from 'react';

type TRootProps = ComponentProps<'div'>;

type FileInputContextType = {
	id: string;
	files: Array<File>;
	onFilesSelected: (files: Array<File>, multiple?: boolean) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export const Root = (props: TRootProps) => {
	const [files, setFiles] = useState<Array<File>>([]);
	const id = useId();

	const onFilesSelected = (files: Array<File>, multiple?: boolean) => {
		setFiles((oldState) => (multiple ? [...oldState, ...files] : files));
	};

	return (
		<FileInputContext.Provider value={{ id, files, onFilesSelected }}>
			<div {...props} />
		</FileInputContext.Provider>
	);
};

export const useFileInput = () => useContext(FileInputContext);
