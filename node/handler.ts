import { GetTodayWrtTimezoneRequestBody, GET_TODAY_WRT_TIMEZONE, GetTodayWrtTimezoneResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetTodayWrtTimezoneHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_TODAY_WRT_TIMEZONE;
  public abstract handle(
    loggingPrefix: string,
    body: GetTodayWrtTimezoneRequestBody,
  ): Promise<GetTodayWrtTimezoneResponse>;
}
