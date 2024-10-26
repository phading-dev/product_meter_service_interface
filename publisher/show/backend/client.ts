import { GetDailyBatchRequestBody, GetDailyBatchResponse, GET_DAILY_BATCH, AggregateDailyMeterReadingRequestBody, AggregateDailyMeterReadingResponse, AGGREGATE_DAILY_METER_READING } from './interface';
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

export function aggregateDailyMeterReading(
  client: NodeClientInterface,
  body: AggregateDailyMeterReadingRequestBody,
  options?: NodeClientOptions,
): Promise<AggregateDailyMeterReadingResponse> {
  return client.send(
    {
      descriptor: AGGREGATE_DAILY_METER_READING,
      body,
    },
    options,
  );
}
