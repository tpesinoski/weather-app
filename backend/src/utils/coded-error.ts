export type CodedError = {
	message: string | string[];
	code: number;
};

export function codedError(
	code: number,
	message: string | string[]
): CodedError {
	return { code, message };
}
