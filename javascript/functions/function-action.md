## Functions can perform actions, even calling other functions

1. Complete the function below called `contactFactory`:
* `contactFactory` returns an object with three properties: name, title, email.
* Make `contactFactory` take a single argument, which will be treated as an array.
* In the body of the function, loop over that array to set the values of the object's properties.

```js
const contactFactory = (contactData) => {
  let contact = {
    name: null,
    title: null,
    email: null
  }
  for (let item in contactData) {
     ///add each array item to contact
   }
  return contact
}
```
2. Complete the second function called `createContact`:
* createContact takes three arguments: name, title, email.
* Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.

```js
const createContact = (name, title, email) => {
  let newContact = /// pass name, title, email to contactFactory as an array
  console.table(Contact)
}
```
3. Execute createContact and pass in a name, a title, and an email address. Check out your dev tools console for the resulting table of data.
