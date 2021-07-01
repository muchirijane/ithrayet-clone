import { gql } from "@apollo/client";

export const MUTATION_FeedBackForm = gql`
  mutation ($email: String!, $name: String!, $message: String!) {
    createFormFeedback(
      input: { data: { emailAddress: $email, name: $name, message: $message } }
    ) {
      formFeedback {
        id
        name
        emailAddress
        message
      }
    }
  }
`;
