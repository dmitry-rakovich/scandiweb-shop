import { gql } from "@apollo/client";

const ALL_CATEGORIES = gql`
query AllCategories {
  categories {
    name
  }
}
`

const ALL_PRODUCTS = gql`
query Products($input: CategoryInput) {
  category(input:$input){
    name
    products{
      id
      name
      description
      category
      prices{
        currency{
          label
          symbol
        }
        amount
      } 
      brand
    }
  }
}
`
const ALL_CURRENCIES = gql`
query AllCurrencies {
  currencies {
    label
    symbol
  }
}
`

export {ALL_PRODUCTS, ALL_CATEGORIES, ALL_CURRENCIES}