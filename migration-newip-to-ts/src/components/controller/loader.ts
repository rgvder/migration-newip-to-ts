import { Config, Method, Options } from "../base/base";

class Loader {
  public baseLink: string;
  public options: Options;

  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp<T>(config: Config<T>): void {
    this.load<T>("GET", config);
  }

  private static errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(endpoint: string, options: Options) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load<T>(method: Method, { endpoint, callback, options = {} }: Config<T>) {
    fetch(this.makeUrl(endpoint, options), { method })
      .then((res: Response) => Loader.errorHandler(res))
      .then<T>((res: Response) => res.json())
      .then((data: T) => {
        if (!callback) {
          console.error(`No callback for ${method} response`);
          return;
        }
        callback(data);
      })
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
