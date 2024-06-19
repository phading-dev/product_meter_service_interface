import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { START_METER_READING, StartMeterReadingRequestBody, StartMeterReadingResponse, SYNC_METER_READING, SyncMeterReadingRequestBody, SyncMeterReadingResponse, STOP_METER_READING, StopMeterReadingRequestBody, StopMeterReadingResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class StartMeterReadingHandlerInterface implements ServiceHandlerInterface {
  public descriptor = START_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: StartMeterReadingRequestBody,
    auth: ClientSession,
  ): Promise<StartMeterReadingResponse>;
}

export abstract class SyncMeterReadingHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SYNC_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: SyncMeterReadingRequestBody,
    auth: ClientSession,
  ): Promise<SyncMeterReadingResponse>;
}

export abstract class StopMeterReadingHandlerInterface implements ServiceHandlerInterface {
  public descriptor = STOP_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: StopMeterReadingRequestBody,
    auth: ClientSession,
  ): Promise<StopMeterReadingResponse>;
}
