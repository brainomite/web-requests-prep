const axios = require("axios");

const urlToFetch = "https://reqres.in/api/users?page=2";
/**
 * using the above url create a function getNameAndEmail that will
 * fetch and obtain the email and last name and
 * return one object per person in an array
 * documentation for provided url is here https://reqres.in/
 */

// this should console.log:
getNameAndEmail().then(console.log);
/**
 *[
 *  { email: 'michael.lawson@reqres.in', lastName: 'Lawson' },
 *  { email: 'lindsay.ferguson@reqres.in', lastName: 'Ferguson' },
 *  { email: 'tobias.funke@reqres.in', lastName: 'Funke' },
 *  { email: 'byron.fields@reqres.in', lastName: 'Fields' },
 *  { email: 'george.edwards@reqres.in', lastName: 'Edwards' },
 *  { email: 'rachel.howell@reqres.in', lastName: 'Howell' }
 *]
 */
