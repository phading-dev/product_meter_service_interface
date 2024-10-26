import { GetBatchRequestBody, GetBatchResponse, GET_BATCH, AggregateMeterReadingRequestBody, AggregateMeterReadingResponse, AGGREGATE_METER_READING, GetUnprocessedDateRequestBody, GetUnprocessedDateResponse, GET_UNPROCESSED_DATE } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getBatch(
  client: NodeClientInterface,
  body: GetBatchRequestBody,
  options?: NodeClientOptions,
): Promise<GetBatchResponse> {
  return client.send(
    {
      descriptor: GET_BATCH,
      body,
    },
    options,
  );
}

export function aggregateMeterReading(
  client: NodeClientInterface,
  body: AggregateMeterReadingRequestBody,
  options?: NodeClientOptions,
): Promise<AggregateMeterReadingResponse> {
  return client.send(
    {
      descriptor: AGGREGATE_METER_READING,
      body,
    },
    options,
  );
}

export function getUnprocessedDate(
  client: NodeClientInterface,
  body: GetUnprocessedDateRequestBody,
  options?: NodeClientOptions,
): Promise<GetUnprocessedDateResponse> {
  return client.send(
    {
      descriptor: GET_UNPROCESSED_DATE,
      body,
    },
    options,
  );
}
