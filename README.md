# marko-star-rating

star rating component in [marko](https://github.com/marko-js/marko)

## Usage

Install as a dependency:
```sh
npm i marko-star-rating
```

Include the component css. In [lasso](https://github.com/lasso-js/lasso)
just include the component as a dependency in your `browser.json`.
Otherwise, reference the css file from `marko-star-rating/style.css`.

Set the color for both inactive and active stars:
```css
.star-rating__icon {
    color: gray;
}

.star-rating__icon--active:before {
    color: purple;
}
```

Invoke the component from your template with a score from 0 to 5.
The component will render 5 stars using the html star entity,
filled in according to the score rounded to the nearest quarter.
```marko
<star-rating score=3.5 />
```

## Example
<img src="example.png?raw=true" width="199" alt="example screenshot" />
