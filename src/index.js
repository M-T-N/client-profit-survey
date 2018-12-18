import React from "react";
import { render } from 'react-dom';
import "./css/style.css";

class SurveySubmit extends React.Component {
    render() {
        return <p>Hello World</p>
    }
}

render(<SurveySubmit />, document.querySelector('#main'));