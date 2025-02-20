import { RecordUploadedRequestBody, RecordUploadedResponse, RECORD_UPLOADED, RecordStorageStartRequestBody, RecordStorageStartResponse, RECORD_STORAGE_START, RecordStorageEndRequestBody, RecordStorageEndResponse, RECORD_STORAGE_END, GetDailyWatchBatchRequestBody, GetDailyWatchBatchResponse, GET_DAILY_WATCH_BATCH, ProcessDailyWatchReadingRequestBody, ProcessDailyWatchReadingResponse, PROCESS_DAILY_WATCH_READING, GetDailyStorageBatchRequestBody, GetDailyStorageBatchResponse, GET_DAILY_STORAGE_BATCH, ProcessDailyStorageReadingRequestBody, ProcessDailyStorageReadingResponse, PROCESS_DAILY_STORAGE_READING, GetMonthlyBatchRequestBody, GetMonthlyBatchResponse, GET_MONTHLY_BATCH, ProcessMonthlyMeterReadingRequestBody, ProcessMonthlyMeterReadingResponse, PROCESS_MONTHLY_METER_READING } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newRecordUploadedRequest(
  body: RecordUploadedRequestBody,
): ClientRequestInterface<RecordUploadedResponse> {
  return {
    descriptor: RECORD_UPLOADED,
    body,
  };
}

export function newRecordStorageStartRequest(
  body: RecordStorageStartRequestBody,
): ClientRequestInterface<RecordStorageStartResponse> {
  return {
    descriptor: RECORD_STORAGE_START,
    body,
  };
}

export function newRecordStorageEndRequest(
  body: RecordStorageEndRequestBody,
): ClientRequestInterface<RecordStorageEndResponse> {
  return {
    descriptor: RECORD_STORAGE_END,
    body,
  };
}

export function newGetDailyWatchBatchRequest(
  body: GetDailyWatchBatchRequestBody,
): ClientRequestInterface<GetDailyWatchBatchResponse> {
  return {
    descriptor: GET_DAILY_WATCH_BATCH,
    body,
  };
}

export function newProcessDailyWatchReadingRequest(
  body: ProcessDailyWatchReadingRequestBody,
): ClientRequestInterface<ProcessDailyWatchReadingResponse> {
  return {
    descriptor: PROCESS_DAILY_WATCH_READING,
    body,
  };
}

export function newGetDailyStorageBatchRequest(
  body: GetDailyStorageBatchRequestBody,
): ClientRequestInterface<GetDailyStorageBatchResponse> {
  return {
    descriptor: GET_DAILY_STORAGE_BATCH,
    body,
  };
}

export function newProcessDailyStorageReadingRequest(
  body: ProcessDailyStorageReadingRequestBody,
): ClientRequestInterface<ProcessDailyStorageReadingResponse> {
  return {
    descriptor: PROCESS_DAILY_STORAGE_READING,
    body,
  };
}

export function newGetMonthlyBatchRequest(
  body: GetMonthlyBatchRequestBody,
): ClientRequestInterface<GetMonthlyBatchResponse> {
  return {
    descriptor: GET_MONTHLY_BATCH,
    body,
  };
}

export function newProcessMonthlyMeterReadingRequest(
  body: ProcessMonthlyMeterReadingRequestBody,
): ClientRequestInterface<ProcessMonthlyMeterReadingResponse> {
  return {
    descriptor: PROCESS_MONTHLY_METER_READING,
    body,
  };
}
