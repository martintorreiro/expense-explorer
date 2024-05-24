import { fetchService } from './fetchService';

export const getRecentActivity = async (
    token: string,
    abortController: AbortController
) => {
    const response = await fetchService({
        url: `getRecentActivity`,
        authToken: token,
        abortController: abortController,
    });
    return response;
};
