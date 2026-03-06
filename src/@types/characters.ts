type ICharacter = {
  id: number;
  original_character_id: number;
  name: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  status: string;
  user_id: number;
  user: IUser;
  created_at: Date;
  updated_at: Date;
};
