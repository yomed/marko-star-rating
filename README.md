# star-rating-marko
star rating component in marko

## Usage

Install as a dependency:
```sh
npm i star-rating-marko -S
```

Include the component css. In Lasso just include the component as a dependency
in your `browser.json`. Otherwise, reference the css file from
`star-rating-marko/style.css`.

Set the color for both inactive and active stars:
```css
.star-rating-marko__icon {
    color: gray;
}

.star-rating-marko__icon--active:before {
    color: yellow;
}
```

Invoke the component from your template:
```html
<star-rating-marko score=3.5/>
```
