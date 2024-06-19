import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SYNC_PRODUCT_METER, SyncProductMeterRequestBody, SyncProductMeterResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class SyncProductMeterHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SYNC_PRODUCT_METER;
  public abstract handle(
    loggingPrefix: string,
    body: SyncProductMeterRequestBody,
    auth: ClientSession,
  ): Promise<SyncProductMeterResponse>;
}
