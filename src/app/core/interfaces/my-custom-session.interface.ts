import { DefaultSession } from '@ionic-enterprise/identity-vault';

export interface MyCustomSession extends DefaultSession {
  // username & token are inherited
  email: string;
  age: number;
  nicknames: string[];
}
