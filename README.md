# About
Replaces placeholders wrapped in double curly braces in HTML files. 

# Install
`npm install @lobal/html-render`

## Setup

```js
//...
import htmlRender from '@lobal/html-render';
//...

//...
app.engine('html', htmlRender);
app.set('view engine', 'html');
//...
```

## Basic usage

### index.html
```html
<html>
    <head>
        <title>{{title}}</title>
    </head>

    <body>
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </body>
</html>
```

### End of middleware
```js
// ...
res.render('path/to/index.html', {title: 'Hello World', message: 'Lorem ipsum.'});
// ...
```

### Output
```html
<html>
    <head>
        <title>Hello World</title>
    </head>

    <body>
        <h1>Hello World</h1>
        <p>Lorem ipsum.</p>
    </body>
</html>
```
