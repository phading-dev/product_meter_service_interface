import { WebServiceClientInterface, WebServiceClientOptions } from '@selfage/service_descriptor/web_service_client_interface';
import { StartMeterReadingRequestBody, StartMeterReadingResponse, START_METER_READING, SyncMeterReadingRequestBody, SyncMeterReadingResponse, SYNC_METER_READING, StopMeterReadingRequestBody, StopMeterReadingResponse, STOP_METER_READING } from './interface';

export function startMeterReading(
  client: WebServiceClientInterface,
  body: StartMeterReadingRequestBody,
  options?: WebServiceClientOptions,
): Promise<StartMeterReadingResponse> {
  return client.send(
    {
      descriptor: START_METER_READING,
      body,
    },
    options,
  );
}

export function syncMeterReading(
  client: WebServiceClientInterface,
  body: SyncMeterReadingRequestBody,
  options?: WebServiceClientOptions,
): Promise<SyncMeterReadingResponse> {
  return client.send(
    {
      descriptor: SYNC_METER_READING,
      body,
    },
    options,
  );
}

export function stopMeterReading(
  client: WebServiceClientInterface,
  body: StopMeterReadingRequestBody,
  options?: WebServiceClientOptions,
): Promise<StopMeterReadingResponse> {
  return client.send(
    {
      descriptor: STOP_METER_READING,
      body,
    },
    options,
  );
}
