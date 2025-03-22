import { buildSchema } from "graphql";

// Definir esquema
export const schema = buildSchema(`
  type Query {
    hello: String
    sum(a: Int!, b: Int!): Int
  }
`);

// Resolver funciones
export const root = {
  hello: () => "¡Hola desde GraphQL sin servidor!",
  sum: ({ a, b }) => a + b,
};
