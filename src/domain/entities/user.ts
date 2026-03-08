export class UserEntity {
  private props: IUser;

  constructor(props: IUser) {
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
      updated_at: props.updated_at ?? new Date(),
    };

    this.validate();
  }

  private validate() {
    if (!this.props.name) throw new Error("Name is required");
    if (!this.props.email.includes("@")) throw new Error("Invalid email");
    if (!this.props.password) throw new Error("Password hash is required");
    if (this.props.password.length < 60) throw new Error("Invalid password hash");
  }

  public changeName(name: string) {
    if (!name) throw new Error("Name cannot be empty");
    this.props.name = name;
    this.setUpdateAt();
  }

  public changePassword(password: string) {
    if (password.length < 6) throw new Error("Password too short");
    this.props.password = password;
    this.setUpdateAt();
  }

  private setUpdateAt() {
    this.props.updated_at = new Date();
  }

  public getProps() {
    return {
      ...this.props,
    };
  }
}
