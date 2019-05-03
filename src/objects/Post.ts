export default class Post {
  username!: string;
  is_first_post!: boolean;
  is_last_post!: boolean;
  can_edit!: boolean;
  can_soft_delete!: boolean;
  can_hard_delete!: boolean;
  can_react!: boolean;
  can_view_attachments!: boolean;
  Thread!: Object;
  Attachments!: Object[];
  is_reacted_to!: boolean;
  visitor_reaction_id!: number;
  post_id!: number;
  thread_id!: number;
  user_id!: number;
  post_date!: number;
  message!: string;
  message_state!: string;
  attach_count!: number;
  warning_message!: string;
  position!: number;
  last_edit_date!: number;
  reaction_score!: number;
  User!: Object;

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
