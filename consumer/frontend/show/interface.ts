import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface StartMeterReadingRequestBody {
  seasonId?: string,
/* In second. */
  watchStart?: number,
}

export let START_METER_READING_REQUEST_BODY: MessageDescriptor<StartMeterReadingRequestBody> = {
  name: 'StartMeterReadingRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'watchStart',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface StartMeterReadingResponse {
  seasonId?: string,
/* Timestamp in second. */
  startTimestamp?: number,
}

export let START_METER_READING_RESPONSE: MessageDescriptor<StartMeterReadingResponse> = {
  name: 'StartMeterReadingResponse',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'startTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export let START_METER_READING: ServiceDescriptor = {
  name: "StartMeterReading",
  path: "/StartMeterReading",
  body: {
    messageType: START_METER_READING_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: START_METER_READING_RESPONSE,
  },
}

export interface SyncMeterReadingRequestBody {
  seasonId?: string,
/* Timestamp in second. */
  startTimestamp?: number,
/* Seconds between reading start and end. */
  watchTime?: number,
}

export let SYNC_METER_READING_REQUEST_BODY: MessageDescriptor<SyncMeterReadingRequestBody> = {
  name: 'SyncMeterReadingRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'startTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'watchTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface SyncMeterReadingResponse {
}

export let SYNC_METER_READING_RESPONSE: MessageDescriptor<SyncMeterReadingResponse> = {
  name: 'SyncMeterReadingResponse',
  fields: [
  ]
};

export let SYNC_METER_READING: ServiceDescriptor = {
  name: "SyncMeterReading",
  path: "/SyncMeterReading",
  body: {
    messageType: SYNC_METER_READING_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: SYNC_METER_READING_RESPONSE,
  },
}

export interface StopMeterReadingRequestBody {
  seasonId?: string,
/* Timestamp in second. */
  startTimestamp?: number,
}

export let STOP_METER_READING_REQUEST_BODY: MessageDescriptor<StopMeterReadingRequestBody> = {
  name: 'StopMeterReadingRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'startTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface StopMeterReadingResponse {
}

export let STOP_METER_READING_RESPONSE: MessageDescriptor<StopMeterReadingResponse> = {
  name: 'StopMeterReadingResponse',
  fields: [
  ]
};

export let STOP_METER_READING: ServiceDescriptor = {
  name: "StopMeterReading",
  path: "/StopMeterReading",
  body: {
    messageType: STOP_METER_READING_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: STOP_METER_READING_RESPONSE,
  },
}
