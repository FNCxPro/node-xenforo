import XenforoClient from '..';

export default class Route {
  client: XenforoClient;
  constructor(client: XenforoClient) {
    this.client = client;
  }
}
