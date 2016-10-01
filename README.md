# star-rating-marko

star rating component in [marko](https://github.com/marko-js/marko)

## Usage

Install as a dependency:
```sh
npm i star-rating-marko -S
```

Include the component css. In [lasso](https://github.com/lasso-js/lasso)
just include the component as a dependency in your `browser.json`.
Otherwise, reference the css file from `star-rating-marko/style.css`.

Set the color for both inactive and active stars:
```css
.star-rating-marko__icon {
    color: gray;
}

.star-rating-marko__icon--active:before {
    color: yellow;
}
```

Invoke the component from your template with a score from 0 to 5.
The component will render 5 stars using the html star entity,
filled in according to the score rounded to the nearest quarter.
```xml
<star-rating-marko score=3.5 />
```
