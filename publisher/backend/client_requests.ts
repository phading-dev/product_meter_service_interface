import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { IncrementSizeTimeRequestBody, IncrementSizeTimeResponse, INCREMENT_SIZE_TIME } from './interface';

export function incrementSizeTime(
  client: WebServiceClientInterface,
  body: IncrementSizeTimeRequestBody,
): Promise<IncrementSizeTimeResponse> {
  return client.send({
    descriptor: INCREMENT_SIZE_TIME,
    body,
  });
}
