import { ZodSchema } from "zod";

export interface ISchemaValidator<T> {
  isValid(data: T): string | null;
}

export class SchemaValidator<T> implements ISchemaValidator<T> {
  private schema: ZodSchema<T>;

  constructor(schema: ZodSchema<T>) {
    this.schema = schema;
  }

  public isValid(data: T): string | null {
    const result = this.schema.safeParse(data);

    if (result.success) return null;

    return result.error.issues[0]?.message;
  }
}
