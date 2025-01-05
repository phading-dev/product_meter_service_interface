import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface MeterReadingPerSeason {
  seasonId?: string,
  watchTimeSec?: number,
  watchTimeSecGraded?: number,
}

export let METER_READING_PER_SEASON: MessageDescriptor<MeterReadingPerSeason> = {
  name: 'MeterReadingPerSeason',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeSec',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'watchTimeSecGraded',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerDay {
  date?: string,
  watchTimeSecGraded?: number,
}

export let METER_READING_PER_DAY: MessageDescriptor<MeterReadingPerDay> = {
  name: 'MeterReadingPerDay',
  fields: [{
    name: 'date',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeSecGraded',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerMonth {
  month?: string,
  watchTimeSecGraded?: number,
}

export let METER_READING_PER_MONTH: MessageDescriptor<MeterReadingPerMonth> = {
  name: 'MeterReadingPerMonth',
  fields: [{
    name: 'month',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeSecGraded',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
