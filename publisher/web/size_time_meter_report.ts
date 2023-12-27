import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AppType, APP_TYPE } from '@phading/product_service_interface/app_type';

export interface SizeTimeMeterPerApp {
  appType?: AppType,
  sizeTime?: number,
}

export let SIZE_TIME_METER_PER_APP: MessageDescriptor<SizeTimeMeterPerApp> = {
  name: 'SizeTimeMeterPerApp',
  fields: [
    {
      name: 'appType',
      enumType: APP_TYPE,
    },
    {
      name: 'sizeTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface SizeTimeMeterReport {
  totalSizeTime?: number,
  sizeTimeMetersPerApp?: Array<SizeTimeMeterPerApp>,
  startTimestamp?: number,
  endTimestamp?: number,
}

export let SIZE_TIME_METER_REPORT: MessageDescriptor<SizeTimeMeterReport> = {
  name: 'SizeTimeMeterReport',
  fields: [
    {
      name: 'totalSizeTime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'sizeTimeMetersPerApp',
      messageType: SIZE_TIME_METER_PER_APP,
      isArray: true,
    },
    {
      name: 'startTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'endTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface SizeTimeMeterReportRange {
  reportId?: string,
  startTimestamp?: number,
  endTimestamp?: number,
}

export let SIZE_TIME_METER_REPORT_RANGE: MessageDescriptor<SizeTimeMeterReportRange> = {
  name: 'SizeTimeMeterReportRange',
  fields: [
    {
      name: 'reportId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'startTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'endTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
