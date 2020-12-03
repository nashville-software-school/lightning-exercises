## Representing a collection of data as HTML often involves loops

1. Add a `<section>` element with an id of `family` to your `index.html`  
1. Use a good old `for` loop to iterate over this array of objects to pull out the names of the family members and represent them as HTML by wrapping each in an `<h3>` tag. Append them to the DOM.
1. Achieve the same result using `.map()`


```js
let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
]
```
