import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Money, MONEY } from '@phading/price/money';

export interface SeasonSummary {
  seasonId?: string,
  seasonName?: string,
}

export let SEASON_SUMMARY: MessageDescriptor<SeasonSummary> = {
  name: 'SeasonSummary',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface MeterReadingPerSeason {
  season?: SeasonSummary,
  watchTimeSec?: number,
}

export let METER_READING_PER_SEASON: MessageDescriptor<MeterReadingPerSeason> = {
  name: 'MeterReadingPerSeason',
  fields: [{
    name: 'season',
    index: 1,
    messageType: SEASON_SUMMARY,
  }, {
    name: 'watchTimeSec',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerDay {
  date?: string,
  watchTimeSec?: number,
  transmittedBytes?: number,
}

export let METER_READING_PER_DAY: MessageDescriptor<MeterReadingPerDay> = {
  name: 'MeterReadingPerDay',
  fields: [{
    name: 'date',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeSec',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'transmittedBytes',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MeterReadingPerMonth {
  month?: string,
  earning?: Money,
  platformCutCost?: Money,
  networkCost?: Money,
  storageCost?: Money,
  uploadCost?: Money,
}

export let METER_READING_PER_MONTH: MessageDescriptor<MeterReadingPerMonth> = {
  name: 'MeterReadingPerMonth',
  fields: [{
    name: 'month',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'earning',
    index: 2,
    messageType: MONEY,
  }, {
    name: 'platformCutCost',
    index: 3,
    messageType: MONEY,
  }, {
    name: 'networkCost',
    index: 4,
    messageType: MONEY,
  }, {
    name: 'storageCost',
    index: 5,
    messageType: MONEY,
  }, {
    name: 'uploadCost',
    index: 6,
    messageType: MONEY,
  }],
};
