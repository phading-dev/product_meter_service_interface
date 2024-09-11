import { SyncMeterReadingRequestBody, SYNC_METER_READING, SyncMeterReadingResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class SyncMeterReadingHandlerInterface implements WebHandlerInterface {
  public descriptor = SYNC_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: SyncMeterReadingRequestBody,
    auth: ClientSession,
  ): Promise<SyncMeterReadingResponse>;
}
