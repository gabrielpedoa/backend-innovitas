interface ISchemaValidator<T> {
  isValid(data: T): string | null;
}
