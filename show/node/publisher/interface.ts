import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetTimezoneOffsetRequestBody {
}

export let GET_TIMEZONE_OFFSET_REQUEST_BODY: MessageDescriptor<GetTimezoneOffsetRequestBody> = {
  name: 'GetTimezoneOffsetRequestBody',
  fields: [],
};

export interface GetTimezoneOffsetResponse {
  negativeOffset?: number,
}

export let GET_TIMEZONE_OFFSET_RESPONSE: MessageDescriptor<GetTimezoneOffsetResponse> = {
  name: 'GetTimezoneOffsetResponse',
  fields: [{
    name: 'negativeOffset',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

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

export interface LoadPublishersToProcessMonthlyRequestBody {
}

export let LOAD_PUBLISHERS_TO_PROCESS_MONTHLY_REQUEST_BODY: MessageDescriptor<LoadPublishersToProcessMonthlyRequestBody> = {
  name: 'LoadPublishersToProcessMonthlyRequestBody',
  fields: [],
};

export interface LoadPublishersToProcessMonthlyResponse {
}

export let LOAD_PUBLISHERS_TO_PROCESS_MONTHLY_RESPONSE: MessageDescriptor<LoadPublishersToProcessMonthlyResponse> = {
  name: 'LoadPublishersToProcessMonthlyResponse',
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

export let GET_TIMEZONE_OFFSET: NodeRemoteCallDescriptor = {
  name: "GetTimezoneOffset",
  path: "/GetTimezoneOffset",
  body: {
    messageType: GET_TIMEZONE_OFFSET_REQUEST_BODY,
  },
  response: {
    messageType: GET_TIMEZONE_OFFSET_RESPONSE,
  },
}

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

export let LOAD_PUBLISHERS_TO_PROCESS_MONTHLY: NodeRemoteCallDescriptor = {
  name: "LoadPublishersToProcessMonthly",
  path: "/LoadPublishersToProcessMonthly",
  body: {
    messageType: LOAD_PUBLISHERS_TO_PROCESS_MONTHLY_REQUEST_BODY,
  },
  response: {
    messageType: LOAD_PUBLISHERS_TO_PROCESS_MONTHLY_RESPONSE,
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
