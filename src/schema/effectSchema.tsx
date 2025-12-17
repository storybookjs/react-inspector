import type { Schema as S, SchemaAST } from 'effect';

/** Symbols used by Effect Schema for annotations */
const IdentifierAnnotationId = Symbol.for('effect/annotation/Identifier');
const TitleAnnotationId = Symbol.for('effect/annotation/Title');
const DescriptionAnnotationId = Symbol.for('effect/annotation/Description');
const PrettyAnnotationId = Symbol.for('effect/annotation/Pretty');

export interface SchemaAnnotations {
  identifier?: string;
  title?: string;
  description?: string;
  pretty?: (value: unknown) => string;
}

/** Extract annotations from a Schema AST node */
export const getAnnotationsFromAST = (ast: SchemaAST.AST): SchemaAnnotations => {
  const annotations = ast.annotations;
  return {
    identifier: annotations[IdentifierAnnotationId] as string | undefined,
    title: annotations[TitleAnnotationId] as string | undefined,
    description: annotations[DescriptionAnnotationId] as string | undefined,
    pretty: annotations[PrettyAnnotationId] as ((value: unknown) => string) | undefined,
  };
};

/** Extract annotations from a Schema */
export const getAnnotations = (schema: S.Schema.All): SchemaAnnotations => {
  return getAnnotationsFromAST(schema.ast);
};

/** Get display name from schema annotations (prefer title, fallback to identifier) */
export const getDisplayName = (annotations: SchemaAnnotations): string | undefined => {
  return annotations.title ?? annotations.identifier;
};

/** Format a value using the schema's pretty annotation if available */
export const formatWithPretty = (value: unknown, annotations: SchemaAnnotations): string | undefined => {
  if (annotations.pretty) {
    try {
      const result = annotations.pretty(value);
      // Effect's built-in schemas may have pretty annotations that return functions (hooks)
      // rather than formatted strings. Only return the result if it's actually a string.
      if (typeof result === 'string') {
        return result;
      }
      return undefined;
    } catch {
      return undefined;
    }
  }
  return undefined;
};

/** Check if an object might be an Effect Schema (duck typing for optional dependency) */
export const isEffectSchema = (obj: unknown): obj is S.Schema.All => {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    'ast' in obj &&
    typeof (obj as { ast: unknown }).ast === 'object' &&
    (obj as { ast: { annotations?: unknown } }).ast !== null &&
    'annotations' in ((obj as { ast: { annotations?: unknown } }).ast ?? {})
  );
};

/** Try to find a matching schema for a Struct field */
export const getFieldSchema = (schema: S.Schema.All, fieldName: string): S.Schema.All | undefined => {
  const ast = schema.ast;

  if (ast._tag === 'TypeLiteral' && 'propertySignatures' in ast) {
    const typeLiteralAst = ast as SchemaAST.TypeLiteral;
    const propSig = typeLiteralAst.propertySignatures.find((sig) => sig.name === fieldName);
    if (propSig) {
      return { ast: propSig.type } as S.Schema.All;
    }
  }

  return undefined;
};

/** Get schema for array elements if the schema is an array/tuple */
export const getArrayElementSchema = (schema: S.Schema.All): S.Schema.All | undefined => {
  const ast = schema.ast;

  if (ast._tag === 'TupleType' && 'rest' in ast) {
    const tupleAst = ast as SchemaAST.TupleType;
    if (tupleAst.rest.length > 0) {
      return { ast: tupleAst.rest[0].type } as S.Schema.All;
    }
  }

  return undefined;
};

export type SchemaRegistry = Map<string, S.Schema.All>;

/** Create a schema registry for matching schemas to constructor names */
export const createSchemaRegistry = (): SchemaRegistry => new Map();

/** Register a schema with its identifier/title for lookup */
export const registerSchema = (registry: SchemaRegistry, schema: S.Schema.All, name?: string): void => {
  const annotations = getAnnotations(schema);
  const key = name ?? annotations.identifier ?? annotations.title;
  if (key) {
    registry.set(key, schema);
  }
};

/** Look up a schema by constructor name or other identifier */
export const lookupSchema = (registry: SchemaRegistry, name: string): S.Schema.All | undefined => {
  return registry.get(name);
};
