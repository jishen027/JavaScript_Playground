const companies = [
  { name: "Company one", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1982, end: 2005 },
  { name: "Company Three", category: "Auto", start: 1903, end: 2006 },
  { name: "Company Four", category: "Retail", start: 1984, end: 2002 },
  { name: "Company Five", category: "IT", start: 1985, end: 2003 },
  { name: "Company Six", category: "Technology", start: 1986, end: 2004 },
  { name: "Company Seven", category: "Finance", start: 1982, end: 2002 },
]

const ages = [33, 12, 20, 16, 5, 25, 54, 21, 44, 61, 13, 12, 24, 25, 64, 64, 21, 12, 32]

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i])
}

// forEach
companies.forEach(company => console.log(company.category))

//filter
const FinanceCompany = companies.filter(company => company.category === "Finance")
const adult = ages.filter(age => age >= 25)

console.log(...FinanceCompany)
console.log(...adult)

// map
const detailedCompanyName = companies.map(company => company.name = company.category + " " + company.name)
console.log(...detailedCompanyName)

// different between map and foreach is there is no return value in foreach methods
// map could return a value
const foreachCompanyName = companies.forEach(company => company.name = company.category + " " + company.name)
console.log(foreachCompanyName)

// sort 
const sortedCompaniesByStart = companies.sort((companyOne, companyTwo) => (companyTwo.start - companyOne.start))
console.log(...sortedCompaniesByStart)

const sortedCompaniesByName = companies.sort((companyOne, companyTwo) => {
  const nameOne = companyOne.category.toLocaleLowerCase()
  const nameTwo = companyTwo.category.toLocaleLowerCase()

  return (nameOne > nameTwo ? 1 : -1)
})

console.log(...sortedCompaniesByName)

// recude 
const totalAges = ages.reduce((sum, age) => sum + age, 0)
console.log(totalAges)
