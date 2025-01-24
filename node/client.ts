import { GetTodayWrtTimezoneRequestBody, GetTodayWrtTimezoneResponse, GET_TODAY_WRT_TIMEZONE } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getTodayWrtTimezone(
  client: NodeClientInterface,
  body: GetTodayWrtTimezoneRequestBody,
  options?: NodeClientOptions,
): Promise<GetTodayWrtTimezoneResponse> {
  return client.send(
    {
      descriptor: GET_TODAY_WRT_TIMEZONE,
      body,
    },
    options,
  );
}
