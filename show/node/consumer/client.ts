import { GetDailyBatchRequestBody, GetDailyBatchResponse, GET_DAILY_BATCH, ProcessDailyMeterReadingRequestBody, ProcessDailyMeterReadingResponse, PROCESS_DAILY_METER_READING, GetMonthlyBatchRequestBody, GetMonthlyBatchResponse, GET_MONTHLY_BATCH, ProcessMonthlyMeterReadingRequestBody, ProcessMonthlyMeterReadingResponse, PROCESS_MONTHLY_METER_READING } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetDailyBatchRequest(
  body: GetDailyBatchRequestBody,
): ClientRequestInterface<GetDailyBatchResponse> {
  return {
    descriptor: GET_DAILY_BATCH,
    body,
  };
}

export function newProcessDailyMeterReadingRequest(
  body: ProcessDailyMeterReadingRequestBody,
): ClientRequestInterface<ProcessDailyMeterReadingResponse> {
  return {
    descriptor: PROCESS_DAILY_METER_READING,
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
