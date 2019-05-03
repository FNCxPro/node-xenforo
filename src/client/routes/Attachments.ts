import Route from './Route';
import Attachment from '../../objects/Attachment';

export default class Attachments extends Route {
  async getAll(): Promise<Attachment[]> {
    const res = await this.client.get('/attachments');
    const attachments = res.attachments.map(
      (item: Object) => new Attachment(item)
    );
    return attachments;
  }
}
