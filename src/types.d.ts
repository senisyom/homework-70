export interface IContact {
  id: string;
  name: string;
  number: string;
  email: string;
  picture: string;
}

export interface IContactApi {
  [key: string]: {
    number: string;
    name: string;
    email: string;
    picture: string;
  };
}
