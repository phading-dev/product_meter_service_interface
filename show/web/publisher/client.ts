import { ListMeterReadingPerSeasonRequestBody, ListMeterReadingPerSeasonResponse, LIST_METER_READING_PER_SEASON, ListMeterReadingsPerDayRequestBody, ListMeterReadingsPerDayResponse, LIST_METER_READINGS_PER_DAY, ListMeterReadingsPerMonthRequestBody, ListMeterReadingsPerMonthResponse, LIST_METER_READINGS_PER_MONTH } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newListMeterReadingPerSeasonRequest(
  body: ListMeterReadingPerSeasonRequestBody,
): ClientRequestInterface<ListMeterReadingPerSeasonResponse> {
  return {
    descriptor: LIST_METER_READING_PER_SEASON,
    body,
  };
}

export function newListMeterReadingsPerDayRequest(
  body: ListMeterReadingsPerDayRequestBody,
): ClientRequestInterface<ListMeterReadingsPerDayResponse> {
  return {
    descriptor: LIST_METER_READINGS_PER_DAY,
    body,
  };
}

export function newListMeterReadingsPerMonthRequest(
  body: ListMeterReadingsPerMonthRequestBody,
): ClientRequestInterface<ListMeterReadingsPerMonthResponse> {
  return {
    descriptor: LIST_METER_READINGS_PER_MONTH,
    body,
  };
}
