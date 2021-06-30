import { gql } from "@apollo/client";

export const MUTATION_NewsLetterForm = gql`
  mutation ($email: String!) {
    createFormNewsLetter(input: { data: { email: $email } }) {
      formNewsLetter {
        id
        email
      }
    }
  }
`;
