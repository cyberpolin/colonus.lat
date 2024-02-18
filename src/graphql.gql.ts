import { gql } from "@apollo/client"

// export const RECOVERY_PASSWORD = gql`
//   query RECOVERY_PASSWORD($email: String!) {
//     getRecoveryEmail(email: $email)
//   }
// `

// export const IS_LOGGED = gql`
//   query IS_LOGGED {
//     authenticatedItem {
//       ... on User {
//         id
//         isAdmin
//         isSecurity
//         needsBill
//         name
//         isVerified
//         rfc {
//           publicUrl
//         }
//       }
//     }
//   }
// `
// export const LOG_IN = gql`
//   mutation LOG_IN($email: String!, $password: String!) {
//     authenticateUserWithPassword(email: $email, password: $password) {
//       ... on UserAuthenticationWithPasswordSuccess {
//         sessionToken
//         item {
//           id
//           email
//           properties {
//             square
//             lot
//           }
//         }
//       }
//       ... on UserAuthenticationWithPasswordFailure {
//         message
//       }
//     }
//   }
// `

// export const LOG_OUT = gql`
//   mutation {
//     endSession
//   }
// `

// export const CREATE_USER = gql`
//   mutation CREATE_USER(
//     $name: String!
//     $phone: String!
//     $email: String!
//     $password: String!
//   ) {
//     createUser(
//       data: { name: $name, phone: $phone, email: $email, password: $password }
//     ) {
//       name
//       email
//     }
//   }
// `

// export const DEACTIVATE_USER = gql`
//   mutation DEACTIVATE_USER($id: ID!, $email: String!) {
//     updateUser(where: { id: $id }, data: { email: $email }) {
//       id
//     }
//   }
// `
export const DELETE_ACCOUNT = gql`
  mutation DELETE_ACCOUNT($email: String!, $password: String!) {
    deleteAccount(email: $email, password: $password)
  }
`

// export const GET_BALANCE = gql`
//   query GET_BALANCE($userId: ID!) {
//     getBalance(userId: $userId) {
//       id
//       status
//       dueAmount
//     }
//   }
// `

// export const GET_PAYMENTS = gql`
//   query GET_PAYMENTS($id: ID!) {
//     user(where: { id: $id }) {
//       properties {
//         id
//         square
//         lot
//         name
//         payments {
//           id
//           dueAt
//           submittedAt
//           aprovedAt
//           status
//           dueAmount
//           image {
//             publicUrl
//             mimetype
//           }
//         }
//       }
//     }
//   }
// `
