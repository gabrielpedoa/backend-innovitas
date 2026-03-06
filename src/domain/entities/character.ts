export class CharacterEntity {
  private props: ICharacter;

  constructor(props: ICharacter) {
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
      updated_at: props.updated_at ?? new Date(),
    };

    this.validate();
  }

  private validate() {
    if (!this.props.original_character_id)
      throw new Error("original_character_id is required");
    if (!this.props.name) throw new Error("Character name is required");
    if (!this.props.species) throw new Error("Species is required");
    if (!this.props.gender) throw new Error("Gender is required");
    if (!this.props.status) throw new Error("Status is required");
    if (!this.props.user_id) throw new Error("Character must belong to a user");
  }

  public getCharacterDomainEntity() {
    return {
      ...this.props,
    };
  }
}
