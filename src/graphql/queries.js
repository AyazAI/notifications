/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      companyuser {
        id
        company {
          id
          sps {
            items {
              id
              companyID
              first_name
              last_name
              phone_number
              email
              password
              gender
              date_of_birth
              address
              cnic_front
              cnic_back
              profile_picture
              aboutyou
              certificate
              video
              virtualloc
              approved
              jobs
              status
              rating
              earning
              createdAt
              updatedAt
            }
            nextToken
          }
          subscribed_services {
            items {
              id
              companyID
              category
              sub_category
              service
              location
              type
              duration
              price
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          name
          registration_number
          date_of_establish
          country
          city
          office_address
          secp
          fbr
          image
          createdAt
          updatedAt
        }
        first_name
        last_name
        phone_number
        email
        cnic_front
        cnic_back
        image
        createdAt
        updatedAt
      }
      spuser {
        id
        companyID
        first_name
        last_name
        phone_number
        email
        password
        gender
        date_of_birth
        address
        cnic_front
        cnic_back
        profile_picture
        aboutyou
        certificate
        video
        hours {
          id
          spID
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          createdAt
          updatedAt
        }
        services {
          items {
            id
            sID
            category
            sub_category
            service
            location
            type
            duration
            price
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        virtualloc
        approved
        jobs
        status
        rating
        earning
        createdAt
        updatedAt
      }
      finderuser {
        id
        first_name
        last_name
        phone_number
        email
        password
        gender
        date_of_birth
        address
        cnic_front
        cnic_back
        profile_picture
        createdAt
        updatedAt
      }
      adminuser {
        id
        first_name
        last_name
        phone_number
        email
        password
        gender
        date_of_birth
        address
        cnic_front
        cnic_back
        profile_picture
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyuser {
          id
          company {
            id
            sps {
              nextToken
            }
            subscribed_services {
              nextToken
            }
            name
            registration_number
            date_of_establish
            country
            city
            office_address
            secp
            fbr
            image
            createdAt
            updatedAt
          }
          first_name
          last_name
          phone_number
          email
          cnic_front
          cnic_back
          image
          createdAt
          updatedAt
        }
        spuser {
          id
          companyID
          first_name
          last_name
          phone_number
          email
          password
          gender
          date_of_birth
          address
          cnic_front
          cnic_back
          profile_picture
          aboutyou
          certificate
          video
          hours {
            id
            spID
            monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
            createdAt
            updatedAt
          }
          services {
            items {
              id
              sID
              category
              sub_category
              service
              location
              type
              duration
              price
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          virtualloc
          approved
          jobs
          status
          rating
          earning
          createdAt
          updatedAt
        }
        finderuser {
          id
          first_name
          last_name
          phone_number
          email
          password
          gender
          date_of_birth
          address
          cnic_front
          cnic_back
          profile_picture
          createdAt
          updatedAt
        }
        adminuser {
          id
          first_name
          last_name
          phone_number
          email
          password
          gender
          date_of_birth
          address
          cnic_front
          cnic_back
          profile_picture
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompanyUser = /* GraphQL */ `
  query GetCompanyUser($id: ID!) {
    getCompanyUser(id: $id) {
      id
      company {
        id
        sps {
          items {
            id
            companyID
            first_name
            last_name
            phone_number
            email
            password
            gender
            date_of_birth
            address
            cnic_front
            cnic_back
            profile_picture
            aboutyou
            certificate
            video
            hours {
              id
              spID
              monday
              tuesday
              wednesday
              thursday
              friday
              saturday
              sunday
              createdAt
              updatedAt
            }
            services {
              nextToken
            }
            virtualloc
            approved
            jobs
            status
            rating
            earning
            createdAt
            updatedAt
          }
          nextToken
        }
        subscribed_services {
          items {
            id
            companyID
            category
            sub_category
            service
            location
            type
            duration
            price
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        name
        registration_number
        date_of_establish
        country
        city
        office_address
        secp
        fbr
        image
        createdAt
        updatedAt
      }
      first_name
      last_name
      phone_number
      email
      cnic_front
      cnic_back
      image
      createdAt
      updatedAt
    }
  }
`;
export const listCompanyUsers = /* GraphQL */ `
  query ListCompanyUsers(
    $filter: ModelCompanyUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        company {
          id
          sps {
            items {
              id
              companyID
              first_name
              last_name
              phone_number
              email
              password
              gender
              date_of_birth
              address
              cnic_front
              cnic_back
              profile_picture
              aboutyou
              certificate
              video
              virtualloc
              approved
              jobs
              status
              rating
              earning
              createdAt
              updatedAt
            }
            nextToken
          }
          subscribed_services {
            items {
              id
              companyID
              category
              sub_category
              service
              location
              type
              duration
              price
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          name
          registration_number
          date_of_establish
          country
          city
          office_address
          secp
          fbr
          image
          createdAt
          updatedAt
        }
        first_name
        last_name
        phone_number
        email
        cnic_front
        cnic_back
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      sps {
        items {
          id
          companyID
          first_name
          last_name
          phone_number
          email
          password
          gender
          date_of_birth
          address
          cnic_front
          cnic_back
          profile_picture
          aboutyou
          certificate
          video
          hours {
            id
            spID
            monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
            createdAt
            updatedAt
          }
          services {
            items {
              id
              sID
              category
              sub_category
              service
              location
              type
              duration
              price
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          virtualloc
          approved
          jobs
          status
          rating
          earning
          createdAt
          updatedAt
        }
        nextToken
      }
      subscribed_services {
        items {
          id
          companyID
          category
          sub_category
          service
          location
          type
          duration
          price
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      registration_number
      date_of_establish
      country
      city
      office_address
      secp
      fbr
      image
      createdAt
      updatedAt
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sps {
          items {
            id
            companyID
            first_name
            last_name
            phone_number
            email
            password
            gender
            date_of_birth
            address
            cnic_front
            cnic_back
            profile_picture
            aboutyou
            certificate
            video
            hours {
              id
              spID
              monday
              tuesday
              wednesday
              thursday
              friday
              saturday
              sunday
              createdAt
              updatedAt
            }
            services {
              nextToken
            }
            virtualloc
            approved
            jobs
            status
            rating
            earning
            createdAt
            updatedAt
          }
          nextToken
        }
        subscribed_services {
          items {
            id
            companyID
            category
            sub_category
            service
            location
            type
            duration
            price
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        name
        registration_number
        date_of_establish
        country
        city
        office_address
        secp
        fbr
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpUser = /* GraphQL */ `
  query GetSpUser($id: ID!) {
    getSpUser(id: $id) {
      id
      companyID
      first_name
      last_name
      phone_number
      email
      password
      gender
      date_of_birth
      address
      cnic_front
      cnic_back
      profile_picture
      aboutyou
      certificate
      video
      hours {
        id
        spID
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
        createdAt
        updatedAt
      }
      services {
        items {
          id
          sID
          category
          sub_category
          service
          location
          type
          duration
          price
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      virtualloc
      approved
      jobs
      status
      rating
      earning
      createdAt
      updatedAt
    }
  }
`;
export const listSpUsers = /* GraphQL */ `
  query ListSpUsers(
    $filter: ModelSpUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyID
        first_name
        last_name
        phone_number
        email
        password
        gender
        date_of_birth
        address
        cnic_front
        cnic_back
        profile_picture
        aboutyou
        certificate
        video
        hours {
          id
          spID
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          createdAt
          updatedAt
        }
        services {
          items {
            id
            sID
            category
            sub_category
            service
            location
            type
            duration
            price
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        virtualloc
        approved
        jobs
        status
        rating
        earning
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFinderUser = /* GraphQL */ `
  query GetFinderUser($id: ID!) {
    getFinderUser(id: $id) {
      id
      first_name
      last_name
      phone_number
      email
      password
      gender
      date_of_birth
      address
      cnic_front
      cnic_back
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const listFinderUsers = /* GraphQL */ `
  query ListFinderUsers(
    $filter: ModelFinderUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFinderUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        phone_number
        email
        password
        gender
        date_of_birth
        address
        cnic_front
        cnic_back
        profile_picture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdminUser = /* GraphQL */ `
  query GetAdminUser($id: ID!) {
    getAdminUser(id: $id) {
      id
      first_name
      last_name
      phone_number
      email
      password
      gender
      date_of_birth
      address
      cnic_front
      cnic_back
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const listAdminUsers = /* GraphQL */ `
  query ListAdminUsers(
    $filter: ModelAdminUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        phone_number
        email
        password
        gender
        date_of_birth
        address
        cnic_front
        cnic_back
        profile_picture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubscribedService = /* GraphQL */ `
  query GetSubscribedService($id: ID!) {
    getSubscribedService(id: $id) {
      id
      companyID
      category
      sub_category
      service
      location
      type
      duration
      price
      description
      createdAt
      updatedAt
    }
  }
`;
export const listSubscribedServices = /* GraphQL */ `
  query ListSubscribedServices(
    $filter: ModelSubscribedServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribedServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        category
        sub_category
        service
        location
        type
        duration
        price
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpAssignedService = /* GraphQL */ `
  query GetSpAssignedService($id: ID!) {
    getSpAssignedService(id: $id) {
      id
      sID
      category
      sub_category
      service
      location
      type
      duration
      price
      description
      createdAt
      updatedAt
    }
  }
`;
export const listSpAssignedServices = /* GraphQL */ `
  query ListSpAssignedServices(
    $filter: ModelSpAssignedServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpAssignedServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sID
        category
        sub_category
        service
        location
        type
        duration
        price
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSms = /* GraphQL */ `
  query GetSms($id: ID!) {
    getSMS(id: $id) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const listSmSs = /* GraphQL */ `
  query ListSmSs(
    $filter: ModelSMSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSMSs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBussinessHours = /* GraphQL */ `
  query GetBussinessHours($id: ID!) {
    getBussinessHours(id: $id) {
      id
      spID
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      sunday
      createdAt
      updatedAt
    }
  }
`;
export const listBussinessHourss = /* GraphQL */ `
  query ListBussinessHourss(
    $filter: ModelBussinessHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBussinessHourss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        spID
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      category
      sub_category {
        items {
          id
          categoryID
          name
          services {
            items {
              id
              subCategoryID
              name
              type
              basis
              duration
              min_price
              max_price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      color_code
      image
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        sub_category {
          items {
            id
            categoryID
            name
            services {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
export const getSubCategory = /* GraphQL */ `
  query GetSubCategory($id: ID!) {
    getSubCategory(id: $id) {
      id
      categoryID
      name
      services {
        items {
          id
          subCategoryID
          name
          subcategory {
            id
            categoryID
            name
            services {
              nextToken
            }
            createdAt
            updatedAt
          }
          type
          basis
          duration
          min_price
          max_price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSubCategorys = /* GraphQL */ `
  query ListSubCategorys(
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryID
        name
        services {
          items {
            id
            subCategoryID
            name
            subcategory {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
            type
            basis
            duration
            min_price
            max_price
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      subCategoryID
      name
      subcategory {
        id
        categoryID
        name
        services {
          items {
            id
            subCategoryID
            name
            subcategory {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
            type
            basis
            duration
            min_price
            max_price
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      basis
      duration
      min_price
      max_price
      createdAt
      updatedAt
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
        subCategoryID
        name
        subcategory {
          id
          categoryID
          name
          services {
            items {
              id
              subCategoryID
              name
              type
              basis
              duration
              min_price
              max_price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        type
        basis
        duration
        min_price
        max_price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
