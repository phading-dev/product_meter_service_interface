import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { INCREMENT_SIZE_TIME, IncrementSizeTimeRequestBody, IncrementSizeTimeResponse } from './interface';

export abstract class IncrementSizeTimeHandlerInterface implements ServiceHandlerInterface {
  public descriptor = INCREMENT_SIZE_TIME;
  public abstract handle(
    requestId: string,
    body: IncrementSizeTimeRequestBody,
  ): Promise<IncrementSizeTimeResponse>;
}
