
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
            return <div>
                <input type="input" />
                <input type="button" onClick={this.handelDelete.bind(this)} value="-"/>
            </div>
        } else {
            return <div>
                <input type="date"/>
                <input type="button" onClick={this.handelDelete.bind(this)} value="-"/>
            </div>
        }

    }
});

const Itemview = React.createClass({
    render(){
        if (this.props.text === 'text') {
            return <div className="preview">
                <input type="input" />
            </div>
        } else {
            return <div className="preview">
                <input type="date"/>
            </div>
        }

    }

});

const Preview = React.createClass({
    render(){
        return <div>
            <Itemview />
        </div>
    }
});


const App = React.createClass({

    getInitialState(){
        return {count: [], clicked: true}
    },
    checktext(){

        document.getElementById("text").checked=true
    },
    unchecktext(){
        document.getElementById("text").checked=false
    },
    addChange(e){
        if(document.getElementById("text").checked===true) {
            this.state.count.push('text');
            this.setState({count: this.state.count})
        }else {
            this.state.count.push('date');
            this.setState({count: this.state.count})
        }

    },
    deleted(index){
        this.state.count.splice(index, 1);
        this.setState({count: this.state.count})
    },
    onchange(){
        this.setState({clicked: !this.state.clicked});
    },


    render(){
        return <div className="all">
            <div className="look"></div>
            <div float="left">
                <input type="button" id="look" onClick={this.onchange}  value={this.state.clicked ? "预览": "编辑"}/>
            </div>
            <br /><br />
            <div className={this.state.clicked ? "" : "hidden"}>
                <div className="Edit">

                    <form selectedValue={this.state.selectedValue}>
                        <input type="radio" name="item" id="text" value="text" onClick={this.checktext}/>文本框
                        <br />
                        <input type="radio" name="item" id="date" value="date" onClick={this.unchecktext}/>日期

                        <br />
                        <input type="button" id="add" onClick={this.addChange} value="add"/>
                    </form>

                </div>
                <div className="design" value="design">
                    <div className="dleft"></div>
                    <Edit count={this.state.count} deleted={this.deleted.bind(this)} clicked={this.state.clicked}/>
                </div>
            </div>
            <div className={this.state.clicked ? "hidden" : ""}>
                <Preview />
                <input type="button" id="submit" value="提交"/>
            </div>

        </div>

    }
});

ReactDOM.render(
    <App/>
    , document.getElementById('app'));