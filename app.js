
const Edit = React.createClass({
    render(){
        return (<div>
                {this.props.count.map((Text, Index) => {
                    if (this.props.clicked === true) {
                        return <Item index={Index} text={Text} deleted={this.props.deleted.bind(this)}/>
                    }
                })}
            </div>
        )
    }
});

const Item = React.createClass({
    handelDelete(){
        this.props.deleted(this.props.index);
    },
    render(){
        if (this.props.text === 'text') {
            return <div className="input">
                <input type="input" className="panel"/>
                <input type="button" onClick={this.handelDelete.bind(this)} value="-"/><br /><br />
            </div>
        } else {
            return <div  className="input">
                <input type="date"/>
                <input type="button" onClick={this.handelDelete.bind(this)} value="-"/><br /><br />
            </div>
        }

    }
});

const App = React.createClass({
    getInitialState(){
        return {count: [], clicked: true}
    },
    handelClickedText(e){
        this.state.count.push('text');
        this.setState({count: this.state.count})
    },
    handelClickedDate(e){
        this.state.count.push('date');
        this.setState({count: this.state.count})
    },
    deleted(index){
        this.state.count.splice(index, 1);
        this.setState({count: this.state.count})
    },
    onchange(){
        this.setState({clicked: !this.state.clicked})
    },


    render(){
        if (this.state.clicked === true) {
            return <div className="all">
                <div className="look"></div>
                <div float="left">
                <input type="button" id="look" onClick={this.onchange}  value="预览"/>
                </div>
                <br /><br />
                <div className="Edit">
                    <ul type="circle">
                        <li type="text" id="text" onClick={this.handelClickedText.bind(this)} value="文本框">文本框</li>

                        <br /><br />
                        <li type="text" id="Date" onClick={this.handelClickedDate.bind(this)} value="日期">日期</li>
                    </ul>
                </div>
                <div className="design">
                    <div className="dleft"></div>
                    <Edit count={this.state.count} deleted={this.deleted.bind(this)} clicked={this.state.clicked}/>
                </div>
            </div>
        } else {
            return <div>
                <input type="button" id="edit" onClick={this.onchange} value="编辑"/><br/>
                <div className="preview">
                </div><br />

                <input type="button" id="submit" value="提交"/>
            </div>
        }
    }
});

ReactDOM.render(
    <App/>
    , document.getElementById('app'));