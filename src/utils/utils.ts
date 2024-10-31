export const removeHash = (item: string) => {
  return item?.replace(/#/g, '');
}

export const getErrorMessage = (error: unknown) => {
	if (error instanceof Error) return error.message;
	return String(error);
}
