import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetDailyBatchRequestBody {
  cursor?: string,
}

export let GET_DAILY_BATCH_REQUEST_BODY: MessageDescriptor<GetDailyBatchRequestBody> = {
  name: 'GetDailyBatchRequestBody',
  fields: [{
    name: 'cursor',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetDailyBatchResponse {
  rowKeys?: Array<string>,
  cursor?: string,
}

export let GET_DAILY_BATCH_RESPONSE: MessageDescriptor<GetDailyBatchResponse> = {
  name: 'GetDailyBatchResponse',
  fields: [{
    name: 'rowKeys',
    index: 1,
    primitiveType: PrimitiveType.STRING,
    isArray: true,
  }, {
    name: 'cursor',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessDailyMeterReadingRequestBody {
  rowKey?: string,
}

export let PROCESS_DAILY_METER_READING_REQUEST_BODY: MessageDescriptor<ProcessDailyMeterReadingRequestBody> = {
  name: 'ProcessDailyMeterReadingRequestBody',
  fields: [{
    name: 'rowKey',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessDailyMeterReadingResponse {
}

export let PROCESS_DAILY_METER_READING_RESPONSE: MessageDescriptor<ProcessDailyMeterReadingResponse> = {
  name: 'ProcessDailyMeterReadingResponse',
  fields: [],
};

export let GET_DAILY_BATCH: NodeRemoteCallDescriptor = {
  name: "GetDailyBatch",
  path: "/GetDailyBatch",
  body: {
    messageType: GET_DAILY_BATCH_REQUEST_BODY,
  },
  response: {
    messageType: GET_DAILY_BATCH_RESPONSE,
  },
}

export let PROCESS_DAILY_METER_READING: NodeRemoteCallDescriptor = {
  name: "ProcessDailyMeterReading",
  path: "/ProcessDailyMeterReading",
  body: {
    messageType: PROCESS_DAILY_METER_READING_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_DAILY_METER_READING_RESPONSE,
  },
}
