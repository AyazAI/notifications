/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCompanyUser = /* GraphQL */ `
  subscription OnCreateCompanyUser {
    onCreateCompanyUser {
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
export const onUpdateCompanyUser = /* GraphQL */ `
  subscription OnUpdateCompanyUser {
    onUpdateCompanyUser {
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
export const onDeleteCompanyUser = /* GraphQL */ `
  subscription OnDeleteCompanyUser {
    onDeleteCompanyUser {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
export const onCreateSpUser = /* GraphQL */ `
  subscription OnCreateSpUser {
    onCreateSpUser {
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
export const onUpdateSpUser = /* GraphQL */ `
  subscription OnUpdateSpUser {
    onUpdateSpUser {
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
export const onDeleteSpUser = /* GraphQL */ `
  subscription OnDeleteSpUser {
    onDeleteSpUser {
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
export const onCreateIdentity = /* GraphQL */ `
  subscription OnCreateIdentity {
    onCreateIdentity {
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
export const onUpdateIdentity = /* GraphQL */ `
  subscription OnUpdateIdentity {
    onUpdateIdentity {
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
export const onDeleteIdentity = /* GraphQL */ `
  subscription OnDeleteIdentity {
    onDeleteIdentity {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument {
    onCreateDocument {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument {
    onUpdateDocument {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument {
    onDeleteDocument {
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
export const onCreateFinderUser = /* GraphQL */ `
  subscription OnCreateFinderUser {
    onCreateFinderUser {
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
export const onUpdateFinderUser = /* GraphQL */ `
  subscription OnUpdateFinderUser {
    onUpdateFinderUser {
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
export const onDeleteFinderUser = /* GraphQL */ `
  subscription OnDeleteFinderUser {
    onDeleteFinderUser {
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
export const onCreateAdminUser = /* GraphQL */ `
  subscription OnCreateAdminUser {
    onCreateAdminUser {
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
export const onUpdateAdminUser = /* GraphQL */ `
  subscription OnUpdateAdminUser {
    onUpdateAdminUser {
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
export const onDeleteAdminUser = /* GraphQL */ `
  subscription OnDeleteAdminUser {
    onDeleteAdminUser {
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
export const onCreateSubscribedService = /* GraphQL */ `
  subscription OnCreateSubscribedService {
    onCreateSubscribedService {
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
export const onUpdateSubscribedService = /* GraphQL */ `
  subscription OnUpdateSubscribedService {
    onUpdateSubscribedService {
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
export const onDeleteSubscribedService = /* GraphQL */ `
  subscription OnDeleteSubscribedService {
    onDeleteSubscribedService {
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
export const onCreateSpAssignedService = /* GraphQL */ `
  subscription OnCreateSpAssignedService {
    onCreateSpAssignedService {
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
export const onUpdateSpAssignedService = /* GraphQL */ `
  subscription OnUpdateSpAssignedService {
    onUpdateSpAssignedService {
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
export const onDeleteSpAssignedService = /* GraphQL */ `
  subscription OnDeleteSpAssignedService {
    onDeleteSpAssignedService {
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
export const onCreateSms = /* GraphQL */ `
  subscription OnCreateSms {
    onCreateSMS {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSms = /* GraphQL */ `
  subscription OnUpdateSms {
    onUpdateSMS {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSms = /* GraphQL */ `
  subscription OnDeleteSms {
    onDeleteSMS {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBussinessHours = /* GraphQL */ `
  subscription OnCreateBussinessHours {
    onCreateBussinessHours {
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
export const onUpdateBussinessHours = /* GraphQL */ `
  subscription OnUpdateBussinessHours {
    onUpdateBussinessHours {
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
export const onDeleteBussinessHours = /* GraphQL */ `
  subscription OnDeleteBussinessHours {
    onDeleteBussinessHours {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateSubCategory = /* GraphQL */ `
  subscription OnCreateSubCategory {
    onCreateSubCategory {
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
export const onUpdateSubCategory = /* GraphQL */ `
  subscription OnUpdateSubCategory {
    onUpdateSubCategory {
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
export const onDeleteSubCategory = /* GraphQL */ `
  subscription OnDeleteSubCategory {
    onDeleteSubCategory {
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
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService {
    onCreateService {
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService {
    onUpdateService {
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService {
    onDeleteService {
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
export const onCreatePaymentMethod = /* GraphQL */ `
  subscription OnCreatePaymentMethod {
    onCreatePaymentMethod {
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
export const onUpdatePaymentMethod = /* GraphQL */ `
  subscription OnUpdatePaymentMethod {
    onUpdatePaymentMethod {
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
export const onDeletePaymentMethod = /* GraphQL */ `
  subscription OnDeletePaymentMethod {
    onDeletePaymentMethod {
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
