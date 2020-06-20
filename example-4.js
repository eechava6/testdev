import {cleanConsole, createAll} from './data';
const companies = createAll();

export const mergeUsers = ( companies ) => {
  const usersMerged = [];
  const newProperty = 'company';
  for (const company of companies) {
    usersMerged.push(...addProperty(company.users, newProperty, company.name));
  }
  return usersMerged.sort(compareAge);
};

const addProperty = (users, propertyName, propertyValue) => {
  return users.map((user) =>{
    user[propertyName] = propertyValue;
    return user;
  });
};


const compareAge = (userA, userB) => {
  // Use toUpperCase() to ignore character casing
  if (userA.age === undefined) return -1;
  if (userB.age === undefined) return 1;

  const ageA = userA.age;
  const ageB = userB.age;

  let comparison = 0;
  if (ageA > ageB) {
    comparison = -1;
  } else if (ageA < ageB) {
    comparison = 1;
  }
  return comparison;
};

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', mergeUsers(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest).

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et regroupant
// tous les "users" de toutes les "companies" dans un seul tableau. Chaque "user"
// doit avoir un nouvel attribut "company" ayant pour valeur le nom de la "company"
// à laquelle il appartient. Les "users" doivent être triés en fonction de leur
// âge (du plus vieux au plus jeune).
