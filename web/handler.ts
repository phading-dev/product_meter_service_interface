import { GetTimezoneOffsetRequestBody, GET_TIMEZONE_OFFSET, GetTimezoneOffsetResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetTimezoneOffsetHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_TIMEZONE_OFFSET;
  public abstract handle(
    loggingPrefix: string,
    body: GetTimezoneOffsetRequestBody,
  ): Promise<GetTimezoneOffsetResponse>;
}
