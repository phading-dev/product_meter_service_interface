import { GetDailyBatchRequestBody, GetDailyBatchResponse, GET_DAILY_BATCH, ProcessDailyMeterReadingRequestBody, ProcessDailyMeterReadingResponse, PROCESS_DAILY_METER_READING, GetUnprocessedDateRequestBody, GetUnprocessedDateResponse, GET_UNPROCESSED_DATE } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getDailyBatch(
  client: NodeClientInterface,
  body: GetDailyBatchRequestBody,
  options?: NodeClientOptions,
): Promise<GetDailyBatchResponse> {
  return client.send(
    {
      descriptor: GET_DAILY_BATCH,
      body,
    },
    options,
  );
}

export function processDailyMeterReading(
  client: NodeClientInterface,
  body: ProcessDailyMeterReadingRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessDailyMeterReadingResponse> {
  return client.send(
    {
      descriptor: PROCESS_DAILY_METER_READING,
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
