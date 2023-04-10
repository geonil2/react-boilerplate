import { isAxiosError } from "./api";
import { QueryClient } from "@tanstack/react-query";

export const ONE_MINUTE = 60 * 1000;
export const ONE_HOUR = 60 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;
export const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

const retry = (failCount: number, error: unknown): boolean => {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    return failCount < 3 && !!status && status >= 500;
  } else {
    return failCount < 3;
  }
};

/*
 * QueryClient default setting
 */
export const generateQueryClient = () => {
  const queryClient = new QueryClient();

  queryClient.setDefaultOptions({
    queries: {
      suspense: true,
      retry: retry,
    },
  });

  return queryClient;
};
