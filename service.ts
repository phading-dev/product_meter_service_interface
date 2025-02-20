import { ServiceDescriptor } from '@selfage/service_descriptor';

export let PRODUCT_METER_NODE_SERVICE: ServiceDescriptor = {
  name: "ProductMeterNodeService",
  path: "/pm/n",
}

export let PRODUCT_METER_WEB_SERVICE: ServiceDescriptor = {
  name: "ProductMeterWebService",
  path: "/pm/w",
}
