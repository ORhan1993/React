// index.js

// Filename - index.js

import React from "react";
// import ReactDOM from 'react-dom/client';
//import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// Filename - index.js

import ReactDOM from "react-dom";

class App extends React.Component {
    state = { username: "", email: "" };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username: "gfg123",
            email: "abc@gfg.org",
        });
    };

    render() {  
        return (
            <div
                style={{
                    margin: "auto",
                    marginTop: "20px",
                    textAlign: "center",
                }}
            >
                <form onSubmit={this.onFormSubmit}>
                    <label> Enter username: </label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={(e) =>
                            this.setState((prev) => ({
                                ...prev,
                                username: e.target.value,
                            }))
                        }
                    />
                    <br />
                    <br />
                    <label>Enter Email Id:</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={(e) =>
                            this.setState((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                    ></input>
                    <br />
                    <br />
                    <input type="submit" value={"Submit"} />
                </form>
                <br />
                <div>
                    Entered Value: {this.state.username}
                </div>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


