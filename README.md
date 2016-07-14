# Failure Example - Radium and TypeScript
This React sample is taken from https://www.typescriptlang.org/docs/handbook/react-&-webpack.html


## Run
    npm install
    webpack

Then open `index.html` in browser.


## Error
When rendering a Radium enchanced component like this:

```js
@Radium
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
```

or this

```js
export class HelloComponent extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
export const Hello = Radium(HelloComponent);

```

The same error occurs at runtime:

![error](https://cloud.githubusercontent.com/assets/185555/16833121/e94ea95e-4a01-11e6-8957-50dd8e262c94.png)

If the Radium aspect of this is commented out the component renders fine.

![works](https://cloud.githubusercontent.com/assets/185555/16833189/3f0613e6-4a02-11e6-9ce2-7994223213f8.png)
