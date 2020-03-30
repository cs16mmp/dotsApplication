/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookingSystemDb = /* GraphQL */ `
  query GetBookingSystemDb($id: ID!) {
    getBookingSystemDB(id: $id) {
      id
      appointment_id
      clinic_id
      time
      created_at
      date
      band
    }
  }
`;
export const listBookingSystemDBs = /* GraphQL */ `
  query ListBookingSystemDBs(
    $filter: ModelBookingSystemDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingSystemDBs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        appointment_id
        clinic_id
        time
        created_at
        date
        band
      }
      nextToken
    }
  }
`;
export const getAppointmentDb = /* GraphQL */ `
  query GetAppointmentDb($id: ID!) {
    getAppointmentDB(id: $id) {
      id
      clinic_id
      name
      description
      phone
      created_at
    }
  }
`;
export const listAppointmentDBs = /* GraphQL */ `
  query ListAppointmentDBs(
    $filter: ModelAppointmentDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentDBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clinic_id
        name
        description
        phone
        created_at
      }
      nextToken
    }
  }
`;
export const getClinicsDb = /* GraphQL */ `
  query GetClinicsDb($id: ID!) {
    getClinicsDB(id: $id) {
      id
      name
      address
      phone
      description
      website
    }
  }
`;
export const listClinicsDBs = /* GraphQL */ `
  query ListClinicsDBs(
    $filter: ModelClinicsDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinicsDBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        phone
        description
        website
      }
      nextToken
    }
  }
`;
export const getInfectionsDb = /* GraphQL */ `
  query GetInfectionsDb($id: ID!) {
    getInfectionsDB(id: $id) {
      id
      name
      description
      webiste
    }
  }
`;
export const listInfectionsDBs = /* GraphQL */ `
  query ListInfectionsDBs(
    $filter: ModelInfectionsDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfectionsDBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        webiste
      }
      nextToken
    }
  }
`;
export const getOrganiationsDb = /* GraphQL */ `
  query GetOrganiationsDb($id: ID!) {
    getOrganiationsDB(id: $id) {
      id
      name
      description
      website
    }
  }
`;
export const listOrganiationsDBs = /* GraphQL */ `
  query ListOrganiationsDBs(
    $filter: ModelOrganiationsDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganiationsDBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        website
      }
      nextToken
    }
  }
`;
