import { gql } from "@apollo/client";

export const MUTATION_writeToUsForm = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $nameEntityInstitution: String!
    $emailAddress: String!
    $contact: String!
    $jobTitle: String!
    $commentLetter: String!
  ) {
    createFormWriteToUs(
      input: {
        data: {
          firstName: $firstName
          lastName: $lastName
          nameEntityInstitution: $nameEntityInstitution
          emailAddress: $emailAddress
          contact: $contact
          jobTitle: $jobTitle
          commentLetter: $commentLetter
        }
      }
    ) {
      formWriteToUs {
        firstName
        lastName
        emailAddress
        nameEntityInstitution
        contact
        jobTitle
        commentLetter
      }
    }
  }
`;
