declare namespace AuthTypes {
  interface User {
    token: string;
    username: string;
    image: string;
  }

  interface Payload {
    username: string;
    password: string;
    image?: string;
  }
}
