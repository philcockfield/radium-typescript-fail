import * as React from "react";
import * as Radium from 'radium';


export interface HelloProps { compiler: string; framework: string; }


@Radium
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
