class Content extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.prompt = '이메일을 입력해주세요!';
    }
    submit(event) {
        let emailAddress = this.refs.emailAddress;
        let comments = this.refs.comments;
        console.log(ReactDOM.findDOMNode(emailAddress).value);
        console.log(ReactDOM.findDOMNode(comments).value);
    }
    render() {
        return React.createElement(
            "div",
            { className: "well" },
            React.createElement(
                "p",
                null,
                this.prompt
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                "Email: ",
                React.createElement("input", { ref: "emailAddress", className: "form-control", type: "text", placeholder: "visveryver2@gmail.com" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                "Comment: ",
                React.createElement("textarea", { ref: "comments", className: "form-control", placeholder: "I love your Website!!" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "a",
                    { className: "btn btn-primary", value: "submit", onClick: this.submit },
                    "Submit"
                )
            )
        );
    }
}
