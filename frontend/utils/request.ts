export type HttpMethod = "get" | "post";

export async function request(
  endpoint: string,
  method: HttpMethod,
  payload: Record<string, unknown>
): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const fullUrl = `${baseUrl}/${endpoint}`;

  const res = await fetch(fullUrl, {
    method,
    body: JSON.stringify(payload),
  });

  return res;
}

type RequestFunc = (
  endpoint: string,
  payload: Record<string, unknown>
) => Promise<Response>;

export const get: RequestFunc = (endpoint, payload) =>
  request(endpoint, "get", payload);
export const post: RequestFunc = (endpoint, payload) =>
  request(endpoint, "get", payload);
