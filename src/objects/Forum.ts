export default class Forum {
  allow_posting!: boolean;
  allow_poll!: boolean;
  require_prefix!: boolean;
  min_tags!: number;
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
