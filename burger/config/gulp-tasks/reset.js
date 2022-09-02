import { deleteAsync } от "del";
export const reset = () => {
	return deleteAsync(app.path.clean);
}