import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SYNC_METER_READING, SyncMeterReadingRequestBody, SyncMeterReadingResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class SyncMeterReadingHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SYNC_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: SyncMeterReadingRequestBody,
    auth: ClientSession,
  ): Promise<SyncMeterReadingResponse>;
}
