export const digDownCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      category
      sub_category {
        items {
          name
          services {
            items {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export const listCurrentCategory = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        category
        sub_category {
          items {
            name
          }
        }
        color_code
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listCurrentSubCategories = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        services {
          items {
            name
            basis
            min_price
            max_price
            duration
          }
        }
      }
      nextToken
    }
  }
`;

export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        basis
        duration
        min_price
        max_price
      }
      nextToken
    }
  }
`;
export const getUserCompany = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      company {
        id
        name
        registration_number
        date_of_establish
        country
        city
        office_address
        secp
        fbr
        createdAt
        updatedAt
      }
    }
  }
`;
export const getCompanyOfUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      company {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const getSubscribedServiceOfUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      subscribed_services {
        items {
          id
          service
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
