import queryString, { ParsedUrlQueryInput } from 'querystring';
import fetch, { RequestInit, Headers } from 'node-fetch';
import Constants from '../constants';
import Auth from './routes/Auth';
import Users from './routes/Users';
import Attachments from './routes/Attachments';

interface HttpOptions {
  method?: string;
  body?: ParsedUrlQueryInput;
}

export default class XenforoClient {
  baseUrl: string;
  apiKey: string;
  apiUser: string;

  Attachments: Attachments;
  Auth: Auth;
  Users: Users;

  constructor(baseUrl: string, apiKey: string, apiUser: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.apiUser = apiUser;

    if (!this.baseUrl.endsWith('/')) this.baseUrl = this.baseUrl + '/';

    this.Attachments = new Attachments(this);
    this.Auth = new Auth(this);
    this.Users = new Users(this);
  }

  async http(endpoint: string, options: HttpOptions) {
    if (endpoint.startsWith('/')) endpoint = endpoint.substr(1);
    const headers = new Headers();
    headers.set('XF-Api-Key', this.apiKey);
    headers.set('XF-Api-User', this.apiUser);
    headers.set('User-Agent', Constants.USER_AGENT);
    const init: RequestInit = {
      method: options.method,
      headers
    };
    options = { ...Constants.DEFAULT_HTTP_OPTIONS, ...options };
    if (
      options.method !== 'GET' &&
      options.method !== 'HEAD' &&
      options.body !== undefined
    ) {
      (init.headers! as Headers).set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      );
      init.body = queryString.stringify(options.body);
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, init);
    if (response.headers.get('Content-Type')!.startsWith('application/json')) {
      const json = await response.json();
      return json;
    }
  }
  async get(endpoint: string) {
    return this.http(endpoint, {
      method: 'GET'
    });
  }
  async post(endpoint: string, body: ParsedUrlQueryInput) {
    return this.http(endpoint, {
      method: 'POST',
      body
    });
  }
  async delete(endpoint: string) {
    return this.http(endpoint, {
      method: 'DELETE'
    });
  }
}
