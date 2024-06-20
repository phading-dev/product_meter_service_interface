import { WebServiceClientInterface, WebServiceClientOptions } from '@selfage/service_descriptor/web_service_client_interface';
import { SyncMeterReadingRequestBody, SyncMeterReadingResponse, SYNC_METER_READING } from './interface';

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
