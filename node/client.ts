import { GetTimezoneOffsetRequestBody, GetTimezoneOffsetResponse, GET_TIMEZONE_OFFSET } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getTimezoneOffset(
  client: NodeClientInterface,
  body: GetTimezoneOffsetRequestBody,
  options?: NodeClientOptions,
): Promise<GetTimezoneOffsetResponse> {
  return client.send(
    {
      descriptor: GET_TIMEZONE_OFFSET,
      body,
    },
    options,
  );
}
