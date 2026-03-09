type IUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  characters: ICharacter[];
  created_at: Date;
  updated_at: Date;
};
