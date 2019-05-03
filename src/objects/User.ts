export default class User {
  about?: string;
  activity_visible?: boolean;
  age!: number;
  alert_optout?: Object[];
  allow_post_profile?: string;
  allow_receive_news_feed?: string;
  allow_view_identities?: string;
  allow_view_profile?: string;
  avatar_urls!: Object;
  can_ban!: boolean;
  can_converse!: boolean;
  can_edit!: boolean;
  can_follow!: boolean;
  can_ignore!: boolean;
  can_post_profile!: boolean;
  can_view_profile!: boolean;
  can_view_profile_posts!: boolean;
  can_warn!: boolean;
  content_show_signature?: boolean;
  creation_watch_state?: string;
  custom_fields?: Object;
  custom_title?: string;
  dob?: Object;
  email?: string;
  email_on_conversation?: boolean;
  gravatar?: string;
  interaction_watch_state?: boolean;
  is_admin?: boolean;
  is_banned?: boolean;
  is_discouraged?: boolean;
  is_followed!: boolean;
  is_ignored!: boolean;
  is_moderator?: boolean;
  is_super_admin?: boolean;
  last_activity?: number;
  location!: string;
  push_on_conversation?: boolean;
  push_optout?: Object[];
  receive_admin_email?: boolean;
  secondary_group_ids?: number[];
  show_dob_date?: boolean;
  show_dob_year?: boolean;
  signature!: string;
  timezone?: string;
  use_tfa?: Object[];
  user_group_id?: number;
  user_state?: string;
  user_title!: string;
  visible?: boolean;
  warning_points?: number;
  website?: string;
  user_id!: number;
  username!: string;
  message_count!: number;
  register_date!: number;
  trophy_points!: number;
  is_staff!: boolean;
  reaction_score!: number;
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
