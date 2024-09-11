import { SyncMeterReadingRequestBody, SyncMeterReadingResponse, SYNC_METER_READING } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function syncMeterReading(
  client: WebClientInterface,
  body: SyncMeterReadingRequestBody,
  options?: WebClientOptions,
): Promise<SyncMeterReadingResponse> {
  return client.send(
    {
      descriptor: SYNC_METER_READING,
      body,
    },
    options,
  );
}
