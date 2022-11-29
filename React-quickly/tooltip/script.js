class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opacity: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this);
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        });
    }

    render() {
        const style = {
            zIndex: this.state.opacity ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        };
        return React.createElement(
            'div',
            { style: { display: 'inline' } },
            React.createElement(
                'span',
                { style: { color: 'blue' },
                    onMouseEnter: this.toggle,
                    onMouseOut: this.toggle },
                this.props.children
            ),
            React.createElement(
                'div',
                { className: 'tooltip bottom',
                    style: style,
                    role: 'tooltip' },
                React.createElement('div', { className: 'tooltip-arrow' }),
                React.createElement(
                    'div',
                    { className: 'tooltip-inner' },
                    this.props.text
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
        Tooltip,
        { text: 'Tooltip \uD14D\uC2A4\uD2B8 \uC785\uB2C8\uB2E4! \uB9C8\uC6B0\uC2A4 \uCEE4\uC11C\uB97C \uC62C\uB9AC\uBA74 \uB098\uD0C0\uB098\uC694.' },
        '\uC548\uB155\uD558\uC138\uC694 JIAEZZANG\uC785\uB2C8\uB2E4!'
    ),
    '\uAC1C\uBC1C\uC744 \uD558\uACE0 \uAE30\uB85D \uD569\uB2C8\uB2E4. \uC800\uC758 \uBE14\uB85C\uADF8(https://jiaezzang.github.io)\uC5D0 \uB180\uB7EC\uC624\uC138\uC694!'
), document.getElementById('tooltip'));
