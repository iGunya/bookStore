import React, { Component } from "react";
import Props from "../../types/types";

import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends React.Component<Props> {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState( { hasError: true } );
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator errorText="Произошла фатальная ошибка" />;
        }
        return this.props.children;
    }
}