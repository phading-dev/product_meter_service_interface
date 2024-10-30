import { GetDailyBatchRequestBody, GetDailyBatchResponse, GET_DAILY_BATCH, ProcessDailyMeterReadingRequestBody, ProcessDailyMeterReadingResponse, PROCESS_DAILY_METER_READING, GetMonthlyBatchRequestBody, GetMonthlyBatchResponse, GET_MONTHLY_BATCH, ProcessMonthlyMeterReadingRequestBody, ProcessMonthlyMeterReadingResponse, PROCESS_MONTHLY_METER_READING } from './interface';
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

export function getMonthlyBatch(
  client: NodeClientInterface,
  body: GetMonthlyBatchRequestBody,
  options?: NodeClientOptions,
): Promise<GetMonthlyBatchResponse> {
  return client.send(
    {
      descriptor: GET_MONTHLY_BATCH,
      body,
    },
    options,
  );
}

export function processMonthlyMeterReading(
  client: NodeClientInterface,
  body: ProcessMonthlyMeterReadingRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessMonthlyMeterReadingResponse> {
  return client.send(
    {
      descriptor: PROCESS_MONTHLY_METER_READING,
      body,
    },
    options,
  );
}
