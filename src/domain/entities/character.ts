export class CharacterEntity {
  constructor(private props: ICharacter) {
    this.validate();
  }

  private validate() {
    if (!this.props.name) throw new Error("Character name is required");
    if (!this.props.species) throw new Error("Species is required");
    if (!this.props.gender) throw new Error("Gender is required");
    if (!this.props.status) throw new Error("Status is required");
    if (!this.props.user_id) throw new Error("Character must belong to a user");
  }

  public getCharacterDomainEntity() {
    return { ...this.props, created_at: this.props.created_at ?? new Date() };
  }
}
