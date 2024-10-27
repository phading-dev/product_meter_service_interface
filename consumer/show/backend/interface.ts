import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface DateAndAccount {
  date?: string,
  accountId?: string,
}

export let DATE_AND_ACCOUNT: MessageDescriptor<DateAndAccount> = {
  name: 'DateAndAccount',
  fields: [{
    name: 'date',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
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
  dateAndAccounts?: Array<DateAndAccount>,
  cursor?: string,
}

export let GET_DAILY_BATCH_RESPONSE: MessageDescriptor<GetDailyBatchResponse> = {
  name: 'GetDailyBatchResponse',
  fields: [{
    name: 'dateAndAccounts',
    index: 1,
    messageType: DATE_AND_ACCOUNT,
    isArray: true,
  }, {
    name: 'cursor',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AggregateDailyMeterReadingRequestBody {
  dateAndAccount?: DateAndAccount,
}

export let AGGREGATE_DAILY_METER_READING_REQUEST_BODY: MessageDescriptor<AggregateDailyMeterReadingRequestBody> = {
  name: 'AggregateDailyMeterReadingRequestBody',
  fields: [{
    name: 'dateAndAccount',
    index: 1,
    messageType: DATE_AND_ACCOUNT,
  }],
};

export interface AggregateDailyMeterReadingResponse {
}

export let AGGREGATE_DAILY_METER_READING_RESPONSE: MessageDescriptor<AggregateDailyMeterReadingResponse> = {
  name: 'AggregateDailyMeterReadingResponse',
  fields: [],
};

export interface GetUnprocessedDateRequestBody {
}

export let GET_UNPROCESSED_DATE_REQUEST_BODY: MessageDescriptor<GetUnprocessedDateRequestBody> = {
  name: 'GetUnprocessedDateRequestBody',
  fields: [],
};

export interface GetUnprocessedDateResponse {
  date?: string,
}

export let GET_UNPROCESSED_DATE_RESPONSE: MessageDescriptor<GetUnprocessedDateResponse> = {
  name: 'GetUnprocessedDateResponse',
  fields: [{
    name: 'date',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
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

export let AGGREGATE_DAILY_METER_READING: NodeRemoteCallDescriptor = {
  name: "AggregateDailyMeterReading",
  path: "/AggregateDailyMeterReading",
  body: {
    messageType: AGGREGATE_DAILY_METER_READING_REQUEST_BODY,
  },
  response: {
    messageType: AGGREGATE_DAILY_METER_READING_RESPONSE,
  },
}

export let GET_UNPROCESSED_DATE: NodeRemoteCallDescriptor = {
  name: "GetUnprocessedDate",
  path: "/GetUnprocessedDate",
  body: {
    messageType: GET_UNPROCESSED_DATE_REQUEST_BODY,
  },
  response: {
    messageType: GET_UNPROCESSED_DATE_RESPONSE,
  },
}
