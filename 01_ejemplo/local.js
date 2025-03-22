import { graphql, buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
    sum(a: Int!, b: Int!): Int
  }
`);

const rootValue = {
  hello: () => "¡Hola desde GraphQL sin servidor!",
  sum: ({ a, b }) => a + b,
};

const query = `{ 
	hello 
	sum(a: 5, b: 10) 
}`;

graphql({ schema, source: query, rootValue }).then((response) => {
  console.log(response);
  console.log(JSON.stringify(response, null, 2));
});
