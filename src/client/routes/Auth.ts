import Route from './Route';
import User from '../../objects/User';

export default class Auth extends Route {
  async auth(
    login: string,
    password: string,
    limitIp?: string
  ): Promise<User | boolean> {
    const res = await this.client.post('/auth', {
      login,
      password,
      limit_ip: limitIp
    });
    const user = res.user;
    if (!user) return false;
    return new User(user);
  }
}
