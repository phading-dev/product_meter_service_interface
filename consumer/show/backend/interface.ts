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

export interface GetBatchRequestBody {
  cursor?: string,
}

export let GET_BATCH_REQUEST_BODY: MessageDescriptor<GetBatchRequestBody> = {
  name: 'GetBatchRequestBody',
  fields: [{
    name: 'cursor',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetBatchResponse {
  dateAndAccounts?: Array<DateAndAccount>,
  cursor?: string,
}

export let GET_BATCH_RESPONSE: MessageDescriptor<GetBatchResponse> = {
  name: 'GetBatchResponse',
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

export interface AggregateMeterReadingRequestBody {
  dateAndAccount?: DateAndAccount,
}

export let AGGREGATE_METER_READING_REQUEST_BODY: MessageDescriptor<AggregateMeterReadingRequestBody> = {
  name: 'AggregateMeterReadingRequestBody',
  fields: [{
    name: 'dateAndAccount',
    index: 1,
    messageType: DATE_AND_ACCOUNT,
  }],
};

export interface AggregateMeterReadingResponse {
}

export let AGGREGATE_METER_READING_RESPONSE: MessageDescriptor<AggregateMeterReadingResponse> = {
  name: 'AggregateMeterReadingResponse',
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

export let GET_BATCH: NodeRemoteCallDescriptor = {
  name: "GetBatch",
  path: "/GetBatch",
  body: {
    messageType: GET_BATCH_REQUEST_BODY,
  },
  response: {
    messageType: GET_BATCH_RESPONSE,
  },
}

export let AGGREGATE_METER_READING: NodeRemoteCallDescriptor = {
  name: "AggregateMeterReading",
  path: "/AggregateMeterReading",
  body: {
    messageType: AGGREGATE_METER_READING_REQUEST_BODY,
  },
  response: {
    messageType: AGGREGATE_METER_READING_RESPONSE,
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
