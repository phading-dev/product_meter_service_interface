import { GetTodayWrtTimezoneRequestBody, GetTodayWrtTimezoneResponse, GET_TODAY_WRT_TIMEZONE } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function getTodayWrtTimezone(
  client: WebClientInterface,
  body: GetTodayWrtTimezoneRequestBody,
  options?: WebClientOptions,
): Promise<GetTodayWrtTimezoneResponse> {
  return client.send(
    {
      descriptor: GET_TODAY_WRT_TIMEZONE,
      body,
    },
    options,
  );
}
