import { WebServiceClientInterface, WebServiceClientOptions } from '@selfage/service_descriptor/web_service_client_interface';
import { SyncProductMeterRequestBody, SyncProductMeterResponse, SYNC_PRODUCT_METER } from './interface';

export function syncProductMeter(
  client: WebServiceClientInterface,
  body: SyncProductMeterRequestBody,
  options?: WebServiceClientOptions,
): Promise<SyncProductMeterResponse> {
  return client.send(
    {
      descriptor: SYNC_PRODUCT_METER,
      body,
    },
    options,
  );
}
