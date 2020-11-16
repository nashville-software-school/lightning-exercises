## querySelector vs querySelectorAll

Paste this between the `body` tags of your index.html file:

```html
<section class="blogPosts">
  <article class="blogArticle">
    <h3>My Capstone Projects</h3>
    <p>
      lorem ipsum stuff about capstones
    </p>
  </article>
  <article class="blogArticle">
    <h3>My Capstone Projects</h3>
    <p>
      lorem ipsum stuff about capstones
    </p>
  </article>
  <article class="blogArticle">
    <h3>My Capstone Projects</h3>
    <p>
      lorem ipsum stuff about capstones
    </p>
  </article>
</section>
```

1. Use `document.querySelector('.blogPosts')` to create a variable called `blogContainer`

1. Use `document.querySelectorAll('.blogArticle')` to create variable called `myArticles`

console.log each variable. How are they different? Try adding an additional class of "currentBlog" to the elements using `classList.add`. Does it work? Why or why not? If not, what do you need to do to meet the requirement of adding a class?
