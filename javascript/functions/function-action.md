## Functions can perform actions, even calling other functions


1. Create a function called `contactFactory`

* `contactFactory` should return an object with three properties: name, title, email.
* Make `contactFactory` take a single argument, which will be treated as an array.
* In the body of the function, loop over that array to set the values of the object's properties.


2. Create a second function called `createContact`
* createContact should take three arguments: name, title, email.
* Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.
* console.table the results

```js

function contactFactory(contactData) {
  let contact = {
    name: null,
    title: null,
    email: null
  }

  for (let i=0; i < contactData.length; i++) {
     ///add each arry item to contact
   }

  return contact
}

function createContact(name, title, email) {
  let newContact = /// pass name, title, email to contactFactory as an array
  console.table(Contact)
}
