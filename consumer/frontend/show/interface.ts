import { MessageDescriptor } from '@selfage/message/descriptor';
import { MeterReading, METER_READING } from './meter_reading';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface SyncProductMeterRequestBody {
  reading?: MeterReading,
}

export let SYNC_PRODUCT_METER_REQUEST_BODY: MessageDescriptor<SyncProductMeterRequestBody> = {
  name: 'SyncProductMeterRequestBody',
  fields: [
    {
      name: 'reading',
      messageType: METER_READING,
    },
  ]
};

export interface SyncProductMeterResponse {
}

export let SYNC_PRODUCT_METER_RESPONSE: MessageDescriptor<SyncProductMeterResponse> = {
  name: 'SyncProductMeterResponse',
  fields: [
  ]
};

export let SYNC_PRODUCT_METER: ServiceDescriptor = {
  name: "SyncProductMeter",
  path: "/SyncProductMeter",
  body: {
    messageType: SYNC_PRODUCT_METER_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: SYNC_PRODUCT_METER_RESPONSE,
  },
}
