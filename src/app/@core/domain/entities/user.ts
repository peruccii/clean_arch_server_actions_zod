export type UserProps = {
  id?: number;
  email: string;
  password: string;
};

export class User {
  constructor(public props: UserProps) {
    props.email = this.formatName(props.email)
  }

  private formatName(name: string): string {
    return name.toUpperCase()
  }

  get id() {
    return this.props.id;
  }

  get email() {
    return this.props.email;
  }
  get password() {
    return this.props.password;
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
    };
  }
}
