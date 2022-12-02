class Content extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.prompt = '이메일을 입력해주세요!'
    }
    submit(event) {
        let emailAddress = this.refs.emailAddress
        let comments = this.refs.comments
        console.log(ReactDOM.findDOMNode(emailAddress).value)
        console.log(ReactDOM.findDOMNode(comments).value)
    }
}