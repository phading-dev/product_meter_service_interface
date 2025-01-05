import { RecordUploadedRequestBody, RecordUploadedResponse, RECORD_UPLOADED, RecordStorageStartRequestBody, RecordStorageStartResponse, RECORD_STORAGE_START, RecordStorageEndRequestBody, RecordStorageEndResponse, RECORD_STORAGE_END, GetDailyWatchBatchRequestBody, GetDailyWatchBatchResponse, GET_DAILY_WATCH_BATCH, ProcessDailyWatchReadingRequestBody, ProcessDailyWatchReadingResponse, PROCESS_DAILY_WATCH_READING, GetDailyStorageBatchRequestBody, GetDailyStorageBatchResponse, GET_DAILY_STORAGE_BATCH, ProcessDailyStorageReadingRequestBody, ProcessDailyStorageReadingResponse, PROCESS_DAILY_STORAGE_READING, GetMonthlyBatchRequestBody, GetMonthlyBatchResponse, GET_MONTHLY_BATCH, ProcessMonthlyMeterReadingRequestBody, ProcessMonthlyMeterReadingResponse, PROCESS_MONTHLY_METER_READING } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function recordUploaded(
  client: NodeClientInterface,
  body: RecordUploadedRequestBody,
  options?: NodeClientOptions,
): Promise<RecordUploadedResponse> {
  return client.send(
    {
      descriptor: RECORD_UPLOADED,
      body,
    },
    options,
  );
}

export function recordStorageStart(
  client: NodeClientInterface,
  body: RecordStorageStartRequestBody,
  options?: NodeClientOptions,
): Promise<RecordStorageStartResponse> {
  return client.send(
    {
      descriptor: RECORD_STORAGE_START,
      body,
    },
    options,
  );
}

export function recordStorageEnd(
  client: NodeClientInterface,
  body: RecordStorageEndRequestBody,
  options?: NodeClientOptions,
): Promise<RecordStorageEndResponse> {
  return client.send(
    {
      descriptor: RECORD_STORAGE_END,
      body,
    },
    options,
  );
}

export function getDailyWatchBatch(
  client: NodeClientInterface,
  body: GetDailyWatchBatchRequestBody,
  options?: NodeClientOptions,
): Promise<GetDailyWatchBatchResponse> {
  return client.send(
    {
      descriptor: GET_DAILY_WATCH_BATCH,
      body,
    },
    options,
  );
}

export function processDailyWatchReading(
  client: NodeClientInterface,
  body: ProcessDailyWatchReadingRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessDailyWatchReadingResponse> {
  return client.send(
    {
      descriptor: PROCESS_DAILY_WATCH_READING,
      body,
    },
    options,
  );
}

export function getDailyStorageBatch(
  client: NodeClientInterface,
  body: GetDailyStorageBatchRequestBody,
  options?: NodeClientOptions,
): Promise<GetDailyStorageBatchResponse> {
  return client.send(
    {
      descriptor: GET_DAILY_STORAGE_BATCH,
      body,
    },
    options,
  );
}

export function processDailyStorageReading(
  client: NodeClientInterface,
  body: ProcessDailyStorageReadingRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessDailyStorageReadingResponse> {
  return client.send(
    {
      descriptor: PROCESS_DAILY_STORAGE_READING,
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
