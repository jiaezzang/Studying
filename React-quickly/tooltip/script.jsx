class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }
    
    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) +20,
            left: (this.state.left || 0) -30
        }
        return (
            <div style={{display: 'inline'}}>
                <span style={{color: 'blue'}}
                onMouseEnter={this.toggle}
                onMouseOut={this.toggle}>
                    {this.props.children}
                </span>
                <div className="tooltip bottom"
                style={style}
                role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                    {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<div>
    <Tooltip text="Tooltip 텍스트 입니다! 마우스 커서를 올리면 나타나요.">안녕하세요 JIAEZZANG입니다!</Tooltip>
    개발을 하고 기록 합니다. 저의 블로그(https://jiaezzang.github.io)에 놀러오세요!
    
</div>,
document.getElementById('tooltip'))