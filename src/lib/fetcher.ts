import { cookies } from "next/headers";
import { logger } from "~/utils/logger";
import { TOKEN_NAME } from "~/utils/auth/auth.const";

interface JSONWithError {
  error?: string;
  message?: string;
}

const hasError = (json: unknown): json is JSONWithError => {
  return (
    typeof (json as JSONWithError).error === "string" ||
    typeof (json as JSONWithError).message === "string"
  );
};

const getInit = (init?: RequestInit) => {
  const token = cookies().get(TOKEN_NAME);
  const defaultInit = token ? {
    headers: {
      Authorization: `Bearer ${token.value}`,
      "content-type": "application/json",
    },
  } : {
    headers: {
      "content-type": "application/json",
    },
  };
  if (!init) {
    return defaultInit;
  }
  return {
    ...init,
    headers: {
      ...init.headers,
      ...defaultInit.headers,
    },
  };
};

const getResponse = async (input: Request | string, init?: RequestInit) => {
  const initWithDefault = getInit(init);
  return fetch(input, initWithDefault);
};

function logErrorOnFetch(input: Request | string) {
  logger.error(
    JSON.stringify({
      url: input instanceof Request ? input.url.toString() : input,
      method: input instanceof Request ? input.method : "GET",
    }),
  );
}

export async function fetcherBlob<Blob>(
  input: Request | string,
  init?: RequestInit,
): Promise<Blob> {
  const res = await getResponse(input, init);
  if (res.ok) {
    return res.blob() as Promise<Blob>;
  }
  logErrorOnFetch(input);
  throw new Error("An unexpected error occurred");
}

export async function fetcher<JSON = unknown>(
  url: string,
  init?: RequestInit,
): Promise<JSON> {
  const res = await getResponse(url, init);
  logger.info(res);
  if (res.ok) {
    try {
      return (await res.json()) as Promise<JSON>;
    } catch (error) {
      logger.error(error);
      logger.error({
        url,
        method: init?.method ?? "GET",
      });
      throw error;
    }
  }
  const json = (await res.json()) as JSON;
  if (hasError(json)) {
    const error = new Error(json.error ?? json.message) as Error & {
      status: number;
    };
    logger.error(error);
    logger.error({
      url,
      method: init?.method ?? "GET",
      responseBody: json,
    });
    error.status = res.status;
    throw error;
  } else {
    logErrorOnFetch(url);
    throw new Error(`Fetch failed, error status ${res.status}`);
  }
}
