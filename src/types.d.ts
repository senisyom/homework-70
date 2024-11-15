export interface IContact {
  id: string;
  number: string;
  email: string;
  picture: string;
}

export interface IContactApi {
  [key: string]: {
    number: string;
    email: string;
    picture: string;
  };
}
