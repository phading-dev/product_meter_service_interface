import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { PRODUCT_METER_NODE_SERVICE } from '../../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

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

export interface GetMonthlyBatchRequestBody {
  cursor?: string,
}

export let GET_MONTHLY_BATCH_REQUEST_BODY: MessageDescriptor<GetMonthlyBatchRequestBody> = {
  name: 'GetMonthlyBatchRequestBody',
  fields: [{
    name: 'cursor',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetMonthlyBatchResponse {
  rowKeys?: Array<string>,
  cursor?: string,
}

export let GET_MONTHLY_BATCH_RESPONSE: MessageDescriptor<GetMonthlyBatchResponse> = {
  name: 'GetMonthlyBatchResponse',
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

export interface ProcessMonthlyMeterReadingRequestBody {
  rowKey?: string,
}

export let PROCESS_MONTHLY_METER_READING_REQUEST_BODY: MessageDescriptor<ProcessMonthlyMeterReadingRequestBody> = {
  name: 'ProcessMonthlyMeterReadingRequestBody',
  fields: [{
    name: 'rowKey',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessMonthlyMeterReadingResponse {
}

export let PROCESS_MONTHLY_METER_READING_RESPONSE: MessageDescriptor<ProcessMonthlyMeterReadingResponse> = {
  name: 'ProcessMonthlyMeterReadingResponse',
  fields: [],
};

export let GET_DAILY_BATCH: RemoteCallDescriptor = {
  name: "GetDailyBatch",
  service: PRODUCT_METER_NODE_SERVICE,
  path: "/GetDailyBatch",
  body: {
    messageType: GET_DAILY_BATCH_REQUEST_BODY,
  },
  response: {
    messageType: GET_DAILY_BATCH_RESPONSE,
  },
}

export let PROCESS_DAILY_METER_READING: RemoteCallDescriptor = {
  name: "ProcessDailyMeterReading",
  service: PRODUCT_METER_NODE_SERVICE,
  path: "/ProcessDailyMeterReading",
  body: {
    messageType: PROCESS_DAILY_METER_READING_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_DAILY_METER_READING_RESPONSE,
  },
}

export let GET_MONTHLY_BATCH: RemoteCallDescriptor = {
  name: "GetMonthlyBatch",
  service: PRODUCT_METER_NODE_SERVICE,
  path: "/GetMonthlyBatch",
  body: {
    messageType: GET_MONTHLY_BATCH_REQUEST_BODY,
  },
  response: {
    messageType: GET_MONTHLY_BATCH_RESPONSE,
  },
}

export let PROCESS_MONTHLY_METER_READING: RemoteCallDescriptor = {
  name: "ProcessMonthlyMeterReading",
  service: PRODUCT_METER_NODE_SERVICE,
  path: "/ProcessMonthlyMeterReading",
  body: {
    messageType: PROCESS_MONTHLY_METER_READING_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_MONTHLY_METER_READING_RESPONSE,
  },
}
