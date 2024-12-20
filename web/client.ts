import { GetTimezoneOffsetRequestBody, GetTimezoneOffsetResponse, GET_TIMEZONE_OFFSET } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function getTimezoneOffset(
  client: WebClientInterface,
  body: GetTimezoneOffsetRequestBody,
  options?: WebClientOptions,
): Promise<GetTimezoneOffsetResponse> {
  return client.send(
    {
      descriptor: GET_TIMEZONE_OFFSET,
      body,
    },
    options,
  );
}
