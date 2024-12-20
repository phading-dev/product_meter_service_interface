import { GetTimezoneOffsetRequestBody, GET_TIMEZONE_OFFSET, GetTimezoneOffsetResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetTimezoneOffsetHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_TIMEZONE_OFFSET;
  public abstract handle(
    loggingPrefix: string,
    body: GetTimezoneOffsetRequestBody,
  ): Promise<GetTimezoneOffsetResponse>;
}
