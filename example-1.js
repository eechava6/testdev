import {createAll, cleanConsole} from './data';
const companies = createAll();

const formatCompanies = ( companies ) => {
  for (const company of companies) {
    company.users = formatUsers(company.users);
    company.name = capitalize(company.name);
  }
  companies.sort(compareLength);
  return companies;
};

const formatUsers = ( users ) => {
  return users.map((user) => {
    // If undefined empty string
    (user.firstName !== undefined) ? user.firstName = capitalize(user.firstName) : user.firstName = '';
    (user.lastName !== undefined) ? user.lastName = capitalize(user.lastName) : user.lastName = '';
    return user;
  }).sort(compareNames);
};

const compareLength = (companyA, companyB) => {
  // Use toUpperCase() to ignore character casing
  if (companyA === undefined) return -1;
  if (companyB === undefined) return 1;

  const usersA = companyA.usersLength;
  const usersB = companyB.usersLength;

  let comparison = 0;
  if (usersA > usersB) {
    comparison = -1;
  } else if (usersA < usersB) {
    comparison = 1;
  }
  return comparison;
};

const compareNames = (userA, userB) => {
  if (userA.firstName === '' || userA.lastName === '') return 1;
  if (userB.firstName === '' || userB.lastName === '') return -1;


  const nameA = `${userA.firstName.charAt(0)}${userA.lastName.charAt(0)}`;
  const nameB = `${userB.firstName.charAt(0)}${userB.lastName.charAt(0)}`;

  const comparison = 0;
  if (nameA < nameB ) {
    return -1;
  } else if (nameA > nameB ) {
    return 1;
  }
  return comparison;
};

// Since we don't have to verify if string is in
// pascal case, converting first char is enough
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', formatCompanies(companies));


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
