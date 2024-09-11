import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface SyncMeterReadingRequestBody {
  seasonId?: string,
  /* Incremented milliseconds. */
  watchTimeMs?: number,
}

export let SYNC_METER_READING_REQUEST_BODY: MessageDescriptor<SyncMeterReadingRequestBody> = {
  name: 'SyncMeterReadingRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SyncMeterReadingResponse {
}

export let SYNC_METER_READING_RESPONSE: MessageDescriptor<SyncMeterReadingResponse> = {
  name: 'SyncMeterReadingResponse',
  fields: [],
};

export let SYNC_METER_READING: WebRemoteCallDescriptor = {
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
