/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
              profile_picture
              aboutyou
              video
              virtualloc
              approved
              jobs
              status
              rating
              earning
              lat
              lng
              convince_type
              convinc_number_plate
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
        payment_methods {
          items {
            id
            company_user_ID
            name
            email
            number
            valid_thru
            cvc
            type
            primary
            createdAt
            updatedAt
          }
          nextToken
        }
        first_name
        last_name
        phone_number
        email
        cnic_front
        cnic_back
        image
        location
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
        profile_picture
        aboutyou
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
        lat
        lng
        convince_type
        convinc_number_plate
        identity {
          id
          cnic
          cnic_front
          cnic_back
          cnic_with_face
          police_verification
          createdAt
          updatedAt
        }
        documents {
          items {
            id
            spID
            certificate
            certificate_date_of_completion
            certificate_institute
            certificate_image
            createdAt
            updatedAt
          }
          nextToken
        }
        category {
          id
          category
          sub_category {
            items {
              id
              categoryID
              name
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
        sub_category {
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
              max_price
              min_price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
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
        location
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
              profile_picture
              aboutyou
              video
              virtualloc
              approved
              jobs
              status
              rating
              earning
              lat
              lng
              convince_type
              convinc_number_plate
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
        payment_methods {
          items {
            id
            company_user_ID
            name
            email
            number
            valid_thru
            cvc
            type
            primary
            createdAt
            updatedAt
          }
          nextToken
        }
        first_name
        last_name
        phone_number
        email
        cnic_front
        cnic_back
        image
        location
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
        profile_picture
        aboutyou
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
        lat
        lng
        convince_type
        convinc_number_plate
        identity {
          id
          cnic
          cnic_front
          cnic_back
          cnic_with_face
          police_verification
          createdAt
          updatedAt
        }
        documents {
          items {
            id
            spID
            certificate
            certificate_date_of_completion
            certificate_institute
            certificate_image
            createdAt
            updatedAt
          }
          nextToken
        }
        category {
          id
          category
          sub_category {
            items {
              id
              categoryID
              name
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
        sub_category {
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
              max_price
              min_price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
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
        location
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
              profile_picture
              aboutyou
              video
              virtualloc
              approved
              jobs
              status
              rating
              earning
              lat
              lng
              convince_type
              convinc_number_plate
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
        payment_methods {
          items {
            id
            company_user_ID
            name
            email
            number
            valid_thru
            cvc
            type
            primary
            createdAt
            updatedAt
          }
          nextToken
        }
        first_name
        last_name
        phone_number
        email
        cnic_front
        cnic_back
        image
        location
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
        profile_picture
        aboutyou
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
        lat
        lng
        convince_type
        convinc_number_plate
        identity {
          id
          cnic
          cnic_front
          cnic_back
          cnic_with_face
          police_verification
          createdAt
          updatedAt
        }
        documents {
          items {
            id
            spID
            certificate
            certificate_date_of_completion
            certificate_institute
            certificate_image
            createdAt
            updatedAt
          }
          nextToken
        }
        category {
          id
          category
          sub_category {
            items {
              id
              categoryID
              name
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
        sub_category {
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
              max_price
              min_price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
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
        location
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
export const createCompanyUser = /* GraphQL */ `
  mutation CreateCompanyUser(
    $input: CreateCompanyUserInput!
    $condition: ModelCompanyUserConditionInput
  ) {
    createCompanyUser(input: $input, condition: $condition) {
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
            profile_picture
            aboutyou
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
            lat
            lng
            convince_type
            convinc_number_plate
            identity {
              id
              cnic
              cnic_front
              cnic_back
              cnic_with_face
              police_verification
              createdAt
              updatedAt
            }
            documents {
              nextToken
            }
            category {
              id
              category
              color_code
              image
              createdAt
              updatedAt
            }
            sub_category {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
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
      payment_methods {
        items {
          id
          company_user_ID
          name
          email
          number
          valid_thru
          cvc
          type
          primary
          createdAt
          updatedAt
        }
        nextToken
      }
      first_name
      last_name
      phone_number
      email
      cnic_front
      cnic_back
      image
      location
      createdAt
      updatedAt
    }
  }
`;
export const updateCompanyUser = /* GraphQL */ `
  mutation UpdateCompanyUser(
    $input: UpdateCompanyUserInput!
    $condition: ModelCompanyUserConditionInput
  ) {
    updateCompanyUser(input: $input, condition: $condition) {
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
            profile_picture
            aboutyou
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
            lat
            lng
            convince_type
            convinc_number_plate
            identity {
              id
              cnic
              cnic_front
              cnic_back
              cnic_with_face
              police_verification
              createdAt
              updatedAt
            }
            documents {
              nextToken
            }
            category {
              id
              category
              color_code
              image
              createdAt
              updatedAt
            }
            sub_category {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
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
      payment_methods {
        items {
          id
          company_user_ID
          name
          email
          number
          valid_thru
          cvc
          type
          primary
          createdAt
          updatedAt
        }
        nextToken
      }
      first_name
      last_name
      phone_number
      email
      cnic_front
      cnic_back
      image
      location
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompanyUser = /* GraphQL */ `
  mutation DeleteCompanyUser(
    $input: DeleteCompanyUserInput!
    $condition: ModelCompanyUserConditionInput
  ) {
    deleteCompanyUser(input: $input, condition: $condition) {
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
            profile_picture
            aboutyou
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
            lat
            lng
            convince_type
            convinc_number_plate
            identity {
              id
              cnic
              cnic_front
              cnic_back
              cnic_with_face
              police_verification
              createdAt
              updatedAt
            }
            documents {
              nextToken
            }
            category {
              id
              category
              color_code
              image
              createdAt
              updatedAt
            }
            sub_category {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
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
      payment_methods {
        items {
          id
          company_user_ID
          name
          email
          number
          valid_thru
          cvc
          type
          primary
          createdAt
          updatedAt
        }
        nextToken
      }
      first_name
      last_name
      phone_number
      email
      cnic_front
      cnic_back
      image
      location
      createdAt
      updatedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
          profile_picture
          aboutyou
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
          lat
          lng
          convince_type
          convinc_number_plate
          identity {
            id
            cnic
            cnic_front
            cnic_back
            cnic_with_face
            police_verification
            createdAt
            updatedAt
          }
          documents {
            items {
              id
              spID
              certificate
              certificate_date_of_completion
              certificate_institute
              certificate_image
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            category
            sub_category {
              nextToken
            }
            color_code
            image
            createdAt
            updatedAt
          }
          sub_category {
            id
            categoryID
            name
            services {
              nextToken
            }
            createdAt
            updatedAt
          }
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
          profile_picture
          aboutyou
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
          lat
          lng
          convince_type
          convinc_number_plate
          identity {
            id
            cnic
            cnic_front
            cnic_back
            cnic_with_face
            police_verification
            createdAt
            updatedAt
          }
          documents {
            items {
              id
              spID
              certificate
              certificate_date_of_completion
              certificate_institute
              certificate_image
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            category
            sub_category {
              nextToken
            }
            color_code
            image
            createdAt
            updatedAt
          }
          sub_category {
            id
            categoryID
            name
            services {
              nextToken
            }
            createdAt
            updatedAt
          }
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
          profile_picture
          aboutyou
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
          lat
          lng
          convince_type
          convinc_number_plate
          identity {
            id
            cnic
            cnic_front
            cnic_back
            cnic_with_face
            police_verification
            createdAt
            updatedAt
          }
          documents {
            items {
              id
              spID
              certificate
              certificate_date_of_completion
              certificate_institute
              certificate_image
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            category
            sub_category {
              nextToken
            }
            color_code
            image
            createdAt
            updatedAt
          }
          sub_category {
            id
            categoryID
            name
            services {
              nextToken
            }
            createdAt
            updatedAt
          }
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
export const createSpUser = /* GraphQL */ `
  mutation CreateSpUser(
    $input: CreateSpUserInput!
    $condition: ModelSpUserConditionInput
  ) {
    createSpUser(input: $input, condition: $condition) {
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
      profile_picture
      aboutyou
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
      lat
      lng
      convince_type
      convinc_number_plate
      identity {
        id
        cnic
        cnic_front
        cnic_back
        cnic_with_face
        police_verification
        createdAt
        updatedAt
      }
      documents {
        items {
          id
          spID
          certificate
          certificate_date_of_completion
          certificate_institute
          certificate_image
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
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
      sub_category {
        id
        categoryID
        name
        services {
          items {
            id
            subCategoryID
            subcategory {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
            name
            type
            basis
            duration
            max_price
            min_price
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSpUser = /* GraphQL */ `
  mutation UpdateSpUser(
    $input: UpdateSpUserInput!
    $condition: ModelSpUserConditionInput
  ) {
    updateSpUser(input: $input, condition: $condition) {
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
      profile_picture
      aboutyou
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
      lat
      lng
      convince_type
      convinc_number_plate
      identity {
        id
        cnic
        cnic_front
        cnic_back
        cnic_with_face
        police_verification
        createdAt
        updatedAt
      }
      documents {
        items {
          id
          spID
          certificate
          certificate_date_of_completion
          certificate_institute
          certificate_image
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
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
      sub_category {
        id
        categoryID
        name
        services {
          items {
            id
            subCategoryID
            subcategory {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
            name
            type
            basis
            duration
            max_price
            min_price
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpUser = /* GraphQL */ `
  mutation DeleteSpUser(
    $input: DeleteSpUserInput!
    $condition: ModelSpUserConditionInput
  ) {
    deleteSpUser(input: $input, condition: $condition) {
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
      profile_picture
      aboutyou
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
      lat
      lng
      convince_type
      convinc_number_plate
      identity {
        id
        cnic
        cnic_front
        cnic_back
        cnic_with_face
        police_verification
        createdAt
        updatedAt
      }
      documents {
        items {
          id
          spID
          certificate
          certificate_date_of_completion
          certificate_institute
          certificate_image
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
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
      sub_category {
        id
        categoryID
        name
        services {
          items {
            id
            subCategoryID
            subcategory {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
            name
            type
            basis
            duration
            max_price
            min_price
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createIdentity = /* GraphQL */ `
  mutation CreateIdentity(
    $input: CreateIdentityInput!
    $condition: ModelIdentityConditionInput
  ) {
    createIdentity(input: $input, condition: $condition) {
      id
      cnic
      cnic_front
      cnic_back
      cnic_with_face
      police_verification
      createdAt
      updatedAt
    }
  }
`;
export const updateIdentity = /* GraphQL */ `
  mutation UpdateIdentity(
    $input: UpdateIdentityInput!
    $condition: ModelIdentityConditionInput
  ) {
    updateIdentity(input: $input, condition: $condition) {
      id
      cnic
      cnic_front
      cnic_back
      cnic_with_face
      police_verification
      createdAt
      updatedAt
    }
  }
`;
export const deleteIdentity = /* GraphQL */ `
  mutation DeleteIdentity(
    $input: DeleteIdentityInput!
    $condition: ModelIdentityConditionInput
  ) {
    deleteIdentity(input: $input, condition: $condition) {
      id
      cnic
      cnic_front
      cnic_back
      cnic_with_face
      police_verification
      createdAt
      updatedAt
    }
  }
`;
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
      id
      spID
      certificate
      certificate_date_of_completion
      certificate_institute
      certificate_image
      createdAt
      updatedAt
    }
  }
`;
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
      id
      spID
      certificate
      certificate_date_of_completion
      certificate_institute
      certificate_image
      createdAt
      updatedAt
    }
  }
`;
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
      id
      spID
      certificate
      certificate_date_of_completion
      certificate_institute
      certificate_image
      createdAt
      updatedAt
    }
  }
`;
export const createFinderUser = /* GraphQL */ `
  mutation CreateFinderUser(
    $input: CreateFinderUserInput!
    $condition: ModelFinderUserConditionInput
  ) {
    createFinderUser(input: $input, condition: $condition) {
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
      location
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const updateFinderUser = /* GraphQL */ `
  mutation UpdateFinderUser(
    $input: UpdateFinderUserInput!
    $condition: ModelFinderUserConditionInput
  ) {
    updateFinderUser(input: $input, condition: $condition) {
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
      location
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const deleteFinderUser = /* GraphQL */ `
  mutation DeleteFinderUser(
    $input: DeleteFinderUserInput!
    $condition: ModelFinderUserConditionInput
  ) {
    deleteFinderUser(input: $input, condition: $condition) {
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
      location
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const createAdminUser = /* GraphQL */ `
  mutation CreateAdminUser(
    $input: CreateAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    createAdminUser(input: $input, condition: $condition) {
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
export const updateAdminUser = /* GraphQL */ `
  mutation UpdateAdminUser(
    $input: UpdateAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    updateAdminUser(input: $input, condition: $condition) {
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
export const deleteAdminUser = /* GraphQL */ `
  mutation DeleteAdminUser(
    $input: DeleteAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    deleteAdminUser(input: $input, condition: $condition) {
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
export const createSubscribedService = /* GraphQL */ `
  mutation CreateSubscribedService(
    $input: CreateSubscribedServiceInput!
    $condition: ModelSubscribedServiceConditionInput
  ) {
    createSubscribedService(input: $input, condition: $condition) {
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
export const updateSubscribedService = /* GraphQL */ `
  mutation UpdateSubscribedService(
    $input: UpdateSubscribedServiceInput!
    $condition: ModelSubscribedServiceConditionInput
  ) {
    updateSubscribedService(input: $input, condition: $condition) {
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
export const deleteSubscribedService = /* GraphQL */ `
  mutation DeleteSubscribedService(
    $input: DeleteSubscribedServiceInput!
    $condition: ModelSubscribedServiceConditionInput
  ) {
    deleteSubscribedService(input: $input, condition: $condition) {
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
export const createSpAssignedService = /* GraphQL */ `
  mutation CreateSpAssignedService(
    $input: CreateSpAssignedServiceInput!
    $condition: ModelSpAssignedServiceConditionInput
  ) {
    createSpAssignedService(input: $input, condition: $condition) {
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
export const updateSpAssignedService = /* GraphQL */ `
  mutation UpdateSpAssignedService(
    $input: UpdateSpAssignedServiceInput!
    $condition: ModelSpAssignedServiceConditionInput
  ) {
    updateSpAssignedService(input: $input, condition: $condition) {
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
export const deleteSpAssignedService = /* GraphQL */ `
  mutation DeleteSpAssignedService(
    $input: DeleteSpAssignedServiceInput!
    $condition: ModelSpAssignedServiceConditionInput
  ) {
    deleteSpAssignedService(input: $input, condition: $condition) {
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
export const createSms = /* GraphQL */ `
  mutation CreateSms(
    $input: CreateSMSInput!
    $condition: ModelSMSConditionInput
  ) {
    createSMS(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateSms = /* GraphQL */ `
  mutation UpdateSms(
    $input: UpdateSMSInput!
    $condition: ModelSMSConditionInput
  ) {
    updateSMS(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteSms = /* GraphQL */ `
  mutation DeleteSms(
    $input: DeleteSMSInput!
    $condition: ModelSMSConditionInput
  ) {
    deleteSMS(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const createBussinessHours = /* GraphQL */ `
  mutation CreateBussinessHours(
    $input: CreateBussinessHoursInput!
    $condition: ModelBussinessHoursConditionInput
  ) {
    createBussinessHours(input: $input, condition: $condition) {
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
export const updateBussinessHours = /* GraphQL */ `
  mutation UpdateBussinessHours(
    $input: UpdateBussinessHoursInput!
    $condition: ModelBussinessHoursConditionInput
  ) {
    updateBussinessHours(input: $input, condition: $condition) {
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
export const deleteBussinessHours = /* GraphQL */ `
  mutation DeleteBussinessHours(
    $input: DeleteBussinessHoursInput!
    $condition: ModelBussinessHoursConditionInput
  ) {
    deleteBussinessHours(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
              max_price
              min_price
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
              max_price
              min_price
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
              max_price
              min_price
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
export const createSubCategory = /* GraphQL */ `
  mutation CreateSubCategory(
    $input: CreateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    createSubCategory(input: $input, condition: $condition) {
      id
      categoryID
      name
      services {
        items {
          id
          subCategoryID
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
          name
          type
          basis
          duration
          max_price
          min_price
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
export const updateSubCategory = /* GraphQL */ `
  mutation UpdateSubCategory(
    $input: UpdateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    updateSubCategory(input: $input, condition: $condition) {
      id
      categoryID
      name
      services {
        items {
          id
          subCategoryID
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
          name
          type
          basis
          duration
          max_price
          min_price
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
export const deleteSubCategory = /* GraphQL */ `
  mutation DeleteSubCategory(
    $input: DeleteSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    deleteSubCategory(input: $input, condition: $condition) {
      id
      categoryID
      name
      services {
        items {
          id
          subCategoryID
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
          name
          type
          basis
          duration
          max_price
          min_price
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
      id
      subCategoryID
      subcategory {
        id
        categoryID
        name
        services {
          items {
            id
            subCategoryID
            subcategory {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
            name
            type
            basis
            duration
            max_price
            min_price
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      type
      basis
      duration
      max_price
      min_price
      createdAt
      updatedAt
    }
  }
`;
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
      id
      subCategoryID
      subcategory {
        id
        categoryID
        name
        services {
          items {
            id
            subCategoryID
            subcategory {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
            name
            type
            basis
            duration
            max_price
            min_price
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      type
      basis
      duration
      max_price
      min_price
      createdAt
      updatedAt
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
      id
      subCategoryID
      subcategory {
        id
        categoryID
        name
        services {
          items {
            id
            subCategoryID
            subcategory {
              id
              categoryID
              name
              createdAt
              updatedAt
            }
            name
            type
            basis
            duration
            max_price
            min_price
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      type
      basis
      duration
      max_price
      min_price
      createdAt
      updatedAt
    }
  }
`;
export const createPaymentMethod = /* GraphQL */ `
  mutation CreatePaymentMethod(
    $input: CreatePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    createPaymentMethod(input: $input, condition: $condition) {
      id
      company_user_ID
      name
      email
      number
      valid_thru
      cvc
      type
      primary
      createdAt
      updatedAt
    }
  }
`;
export const updatePaymentMethod = /* GraphQL */ `
  mutation UpdatePaymentMethod(
    $input: UpdatePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    updatePaymentMethod(input: $input, condition: $condition) {
      id
      company_user_ID
      name
      email
      number
      valid_thru
      cvc
      type
      primary
      createdAt
      updatedAt
    }
  }
`;
export const deletePaymentMethod = /* GraphQL */ `
  mutation DeletePaymentMethod(
    $input: DeletePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    deletePaymentMethod(input: $input, condition: $condition) {
      id
      company_user_ID
      name
      email
      number
      valid_thru
      cvc
      type
      primary
      createdAt
      updatedAt
    }
  }
`;
