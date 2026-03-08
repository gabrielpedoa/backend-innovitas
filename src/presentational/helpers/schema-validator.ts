import { ZodSchema } from "zod";

export class SchemaValidator<T> implements ISchemaValidator<T> {
  private schema: ZodSchema<T>;

  constructor(schema: ZodSchema<T>) {
    this.schema = schema;
  }

  public isValid(data: T): string | null {
    const result = this.schema.safeParse(data);

    if (result.success) return null;

    return JSON.parse(result.error.message);
  }
}
