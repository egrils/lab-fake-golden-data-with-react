
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
                 <a href="./show.html" target="_blank">
                <input type="button" id="look" onClick={this.onchange}  value="预览"/>
                 </a>
                </div>
                <br /><br />
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

    }/*,
    render2(){
        return <div className="all">
                <Edit count={this.state.count} deleted={this.deleted.bind(this)} clicked={this.state.clicked}/>
        </div>

    }*/
});

ReactDOM.render(
    <App/>
    , document.getElementById('app'));
/*
ReactDOM.render2(
    <App/>
    , document.getElementById('preview'));*/