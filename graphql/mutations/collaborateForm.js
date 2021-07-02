import { gql } from "@apollo/client";

export const MUTATION_collaborateForm = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $nameEntityInstitution: String!
    $emailAddress: String!
    $contact: String!
    $jobTitle: String!
    $commentLetter: String!
  ) {
    createFormCollaborateWithUs(
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
      formCollaborateWithUs {
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
