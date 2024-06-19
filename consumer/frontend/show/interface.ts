import { MessageDescriptor } from '@selfage/message/descriptor';
import { MeterReading, METER_READING } from './meter_reading';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface SyncMeterReadingRequestBody {
  reading?: MeterReading,
}

export let SYNC_METER_READING_REQUEST_BODY: MessageDescriptor<SyncMeterReadingRequestBody> = {
  name: 'SyncMeterReadingRequestBody',
  fields: [
    {
      name: 'reading',
      messageType: METER_READING,
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
