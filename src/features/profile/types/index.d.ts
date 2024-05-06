declare namespace SettingsTypes {
  type User = {
    username?: string;
    password?: string;
    image?: string;
  };

  type UpdateUser = {
    token: string;
    username: string;
    image?: string;
    id: string;
  };
}
