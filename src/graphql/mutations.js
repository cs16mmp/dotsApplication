/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookingSystemDb = /* GraphQL */ `
  mutation CreateBookingSystemDb(
    $input: CreateBookingSystemDBInput!
    $condition: ModelBookingSystemDBConditionInput
  ) {
    createBookingSystemDB(input: $input, condition: $condition) {
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
export const updateBookingSystemDb = /* GraphQL */ `
  mutation UpdateBookingSystemDb(
    $input: UpdateBookingSystemDBInput!
    $condition: ModelBookingSystemDBConditionInput
  ) {
    updateBookingSystemDB(input: $input, condition: $condition) {
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
export const deleteBookingSystemDb = /* GraphQL */ `
  mutation DeleteBookingSystemDb(
    $input: DeleteBookingSystemDBInput!
    $condition: ModelBookingSystemDBConditionInput
  ) {
    deleteBookingSystemDB(input: $input, condition: $condition) {
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
export const createAppointmentDb = /* GraphQL */ `
  mutation CreateAppointmentDb(
    $input: CreateAppointmentDBInput!
    $condition: ModelAppointmentDBConditionInput
  ) {
    createAppointmentDB(input: $input, condition: $condition) {
      id
      clinic_id
      name
      description
      phone
      created_at
    }
  }
`;
export const updateAppointmentDb = /* GraphQL */ `
  mutation UpdateAppointmentDb(
    $input: UpdateAppointmentDBInput!
    $condition: ModelAppointmentDBConditionInput
  ) {
    updateAppointmentDB(input: $input, condition: $condition) {
      id
      clinic_id
      name
      description
      phone
      created_at
    }
  }
`;
export const deleteAppointmentDb = /* GraphQL */ `
  mutation DeleteAppointmentDb(
    $input: DeleteAppointmentDBInput!
    $condition: ModelAppointmentDBConditionInput
  ) {
    deleteAppointmentDB(input: $input, condition: $condition) {
      id
      clinic_id
      name
      description
      phone
      created_at
    }
  }
`;
export const createClinicsDb = /* GraphQL */ `
  mutation CreateClinicsDb(
    $input: CreateClinicsDBInput!
    $condition: ModelClinicsDBConditionInput
  ) {
    createClinicsDB(input: $input, condition: $condition) {
      id
      name
      address
      phone
      description
      website
    }
  }
`;
export const updateClinicsDb = /* GraphQL */ `
  mutation UpdateClinicsDb(
    $input: UpdateClinicsDBInput!
    $condition: ModelClinicsDBConditionInput
  ) {
    updateClinicsDB(input: $input, condition: $condition) {
      id
      name
      address
      phone
      description
      website
    }
  }
`;
export const deleteClinicsDb = /* GraphQL */ `
  mutation DeleteClinicsDb(
    $input: DeleteClinicsDBInput!
    $condition: ModelClinicsDBConditionInput
  ) {
    deleteClinicsDB(input: $input, condition: $condition) {
      id
      name
      address
      phone
      description
      website
    }
  }
`;
export const createInfectionsDb = /* GraphQL */ `
  mutation CreateInfectionsDb(
    $input: CreateInfectionsDBInput!
    $condition: ModelInfectionsDBConditionInput
  ) {
    createInfectionsDB(input: $input, condition: $condition) {
      id
      name
      description
      webiste
    }
  }
`;
export const updateInfectionsDb = /* GraphQL */ `
  mutation UpdateInfectionsDb(
    $input: UpdateInfectionsDBInput!
    $condition: ModelInfectionsDBConditionInput
  ) {
    updateInfectionsDB(input: $input, condition: $condition) {
      id
      name
      description
      webiste
    }
  }
`;
export const deleteInfectionsDb = /* GraphQL */ `
  mutation DeleteInfectionsDb(
    $input: DeleteInfectionsDBInput!
    $condition: ModelInfectionsDBConditionInput
  ) {
    deleteInfectionsDB(input: $input, condition: $condition) {
      id
      name
      description
      webiste
    }
  }
`;
export const createOrganiationsDb = /* GraphQL */ `
  mutation CreateOrganiationsDb(
    $input: CreateOrganiationsDBInput!
    $condition: ModelOrganiationsDBConditionInput
  ) {
    createOrganiationsDB(input: $input, condition: $condition) {
      id
      name
      description
      website
    }
  }
`;
export const updateOrganiationsDb = /* GraphQL */ `
  mutation UpdateOrganiationsDb(
    $input: UpdateOrganiationsDBInput!
    $condition: ModelOrganiationsDBConditionInput
  ) {
    updateOrganiationsDB(input: $input, condition: $condition) {
      id
      name
      description
      website
    }
  }
`;
export const deleteOrganiationsDb = /* GraphQL */ `
  mutation DeleteOrganiationsDb(
    $input: DeleteOrganiationsDBInput!
    $condition: ModelOrganiationsDBConditionInput
  ) {
    deleteOrganiationsDB(input: $input, condition: $condition) {
      id
      name
      description
      website
    }
  }
`;
