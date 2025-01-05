import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetDailyWatchBatchRequestBody {
  cursor?: string,
}

export let GET_DAILY_WATCH_BATCH_REQUEST_BODY: MessageDescriptor<GetDailyWatchBatchRequestBody> = {
  name: 'GetDailyWatchBatchRequestBody',
  fields: [{
    name: 'cursor',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetDailyWatchBatchResponse {
  rowKeys?: Array<string>,
  cursor?: string,
}

export let GET_DAILY_WATCH_BATCH_RESPONSE: MessageDescriptor<GetDailyWatchBatchResponse> = {
  name: 'GetDailyWatchBatchResponse',
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

export interface ProcessDailyWatchReadingRequestBody {
  rowKey?: string,
}

export let PROCESS_DAILY_WATCH_READING_REQUEST_BODY: MessageDescriptor<ProcessDailyWatchReadingRequestBody> = {
  name: 'ProcessDailyWatchReadingRequestBody',
  fields: [{
    name: 'rowKey',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessDailyWatchReadingResponse {
}

export let PROCESS_DAILY_WATCH_READING_RESPONSE: MessageDescriptor<ProcessDailyWatchReadingResponse> = {
  name: 'ProcessDailyWatchReadingResponse',
  fields: [],
};

export interface GetDailyStorageBatchRequestBody {
  cursor?: string,
}

export let GET_DAILY_STORAGE_BATCH_REQUEST_BODY: MessageDescriptor<GetDailyStorageBatchRequestBody> = {
  name: 'GetDailyStorageBatchRequestBody',
  fields: [{
    name: 'cursor',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetDailyStorageBatchResponse {
  rowKeys?: Array<string>,
  cursor?: string,
}

export let GET_DAILY_STORAGE_BATCH_RESPONSE: MessageDescriptor<GetDailyStorageBatchResponse> = {
  name: 'GetDailyStorageBatchResponse',
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

export interface ProcessDailyStorageReadingRequestBody {
  rowKey?: string,
}

export let PROCESS_DAILY_STORAGE_READING_REQUEST_BODY: MessageDescriptor<ProcessDailyStorageReadingRequestBody> = {
  name: 'ProcessDailyStorageReadingRequestBody',
  fields: [{
    name: 'rowKey',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessDailyStorageReadingResponse {
}

export let PROCESS_DAILY_STORAGE_READING_RESPONSE: MessageDescriptor<ProcessDailyStorageReadingResponse> = {
  name: 'ProcessDailyStorageReadingResponse',
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

export let GET_DAILY_WATCH_BATCH: NodeRemoteCallDescriptor = {
  name: "GetDailyWatchBatch",
  path: "/GetDailyWatchBatch",
  body: {
    messageType: GET_DAILY_WATCH_BATCH_REQUEST_BODY,
  },
  response: {
    messageType: GET_DAILY_WATCH_BATCH_RESPONSE,
  },
}

export let PROCESS_DAILY_WATCH_READING: NodeRemoteCallDescriptor = {
  name: "ProcessDailyWatchReading",
  path: "/ProcessDailyWatchReading",
  body: {
    messageType: PROCESS_DAILY_WATCH_READING_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_DAILY_WATCH_READING_RESPONSE,
  },
}

export let GET_DAILY_STORAGE_BATCH: NodeRemoteCallDescriptor = {
  name: "GetDailyStorageBatch",
  path: "/GetDailyStorageBatch",
  body: {
    messageType: GET_DAILY_STORAGE_BATCH_REQUEST_BODY,
  },
  response: {
    messageType: GET_DAILY_STORAGE_BATCH_RESPONSE,
  },
}

export let PROCESS_DAILY_STORAGE_READING: NodeRemoteCallDescriptor = {
  name: "ProcessDailyStorageReading",
  path: "/ProcessDailyStorageReading",
  body: {
    messageType: PROCESS_DAILY_STORAGE_READING_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_DAILY_STORAGE_READING_RESPONSE,
  },
}

export let GET_MONTHLY_BATCH: NodeRemoteCallDescriptor = {
  name: "GetMonthlyBatch",
  path: "/GetMonthlyBatch",
  body: {
    messageType: GET_MONTHLY_BATCH_REQUEST_BODY,
  },
  response: {
    messageType: GET_MONTHLY_BATCH_RESPONSE,
  },
}

export let PROCESS_MONTHLY_METER_READING: NodeRemoteCallDescriptor = {
  name: "ProcessMonthlyMeterReading",
  path: "/ProcessMonthlyMeterReading",
  body: {
    messageType: PROCESS_MONTHLY_METER_READING_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_MONTHLY_METER_READING_RESPONSE,
  },
}
