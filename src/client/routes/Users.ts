import Route from './Route';
import User from '../../objects/User';

export default class Users extends Route {
  async getAll(): Promise<User[]> {
    const res = await this.client.get('/users');
    const users = res.users.map((item: Object) => new User(item));
    return users;
  }
  async get(userId: number) {
    const res = await this.client.get(`/users/${userId}`);
    return new User(res.user);
  }
  async update(userId: number, user: User) {
    const res = await this.client.post(`/users/${userId}`, {
      option: {
        creation_watch_state: user.creation_watch_state,
        interaction_watch_state: user.interaction_watch_state,
        content_show_signature: user.content_show_signature,
        email_on_conversation: user.email_on_conversation,
        push_on_conversation: user.push_on_conversation,
        receive_admin_email: user.receive_admin_email,
        show_dob_year: user.show_dob_year,
        show_dob_date: user.show_dob_date,
        is_discouraged: user.is_discouraged
      },
      profile: {
        location: user.location,
        website: user.website,
        about: user.about,
        signature: user.signature
      },
      privacy: {
        allow_view_profile: user.allow_view_profile,
        allow_post_profile: user.allow_post_profile,
        allow_receive_news_feed: user.allow_receive_news_feed,
        //allow_send_personal_conversation: user.allow_send_personal_conversation,
        allow_view_identities: user.allow_view_identities
      },
      visible: user.visible,
      activity_visible: user.activity_visible,
      timezone: user.timezone,
      custom_title: user.custom_title,
      username: user.username,
      email: user.email,
      user_group_id: user.user_group_id,
      secondary_group_ids: user.secondary_group_ids,
      user_state: user.user_state,
      is_staff: user.is_staff,
      message_count: user.message_count,
      reaction_score: user.reaction_score,
      trophy_points: user.trophy_points,
      //password: user.password
      dob: user.dob,
      custom_fields: user.custom_fields
    });
    return new User(res.user);
  }
}
