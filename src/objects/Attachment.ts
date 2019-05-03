export default class Attachment {
  filename!: string;
  file_size!: number;
  height!: number;
  width!: number;
  thumbnail_url!: string;
  video_url!: string;
  attachment_id!: string;
  content_type!: string;
  content_id!: string;
  attach_date!: string;
  view_count!: string;
  [key: string]: any;

  constructor(info: { [x: string]: any }) {
    this.constructWithInfo(info);
  }
  constructWithInfo(info: { [x: string]: any }) {
    Object.keys(info).forEach(key => {
      this[key] = info[key];
    });
  }
}
