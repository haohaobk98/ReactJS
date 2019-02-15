// tao bien de luu tru cac note
var list;
// tao 1 component Note de hien thi cac chu thich
var Note = React.createClass({
    delete(){
        $.post("/deleteNote",{note:this.props.id},function(data){
            list.setState({array:data});
        })
    },
    getInitialState(){
        return {onEdit: false};
    },
    edit(){
        this.setState({onEdit:true});
    },
    cancel(){
        this.setState({onEdit: false});
    },
    save(){
        $.post("/saveNote",{id:this.props.id, noidung:this.refs.textChange.value},function(data){
            list.setState({array: data});
        })
        this.setState({onEdit: false});
    },
    render(){
        if(this.state.onEdit){
            return(
                <div className="div-note">
                    <input type="text" defaultValue={this.props.children} ref="textChange" />
                    <br></br>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            )
        }else{
            return(
                <div className="div-note">
                    <h2>{this.props.children}</h2>
                    <button onClick={this.delete}>Delete</button>
                    <button onClick={this.edit}>Edit</button>
                </div>
            )
        }
    }
})
// tao 1 component List de chua cac Note
var List = React.createClass({
    add(){
        ReactDOM.render(
            <Input/>
            ,
            document.getElementById("div-Input")
        );
    },
    getInitialState(){
        list = this;
        return{ array:[]};
    },
    render(){
        return(
            <div className="div-list">
            <button onClick={this.add}> Add</button>
            <div id="div-Input"></div>
                 {
                     this.state.array.map(function(note,index){
                         return <Note key={index} id={index}>{note}</Note>
                     })
                 }
            </div>
        )
    },
    componentDidMount(){
        var that = this;
        $.post("/getNotes",function(data){
            that.setState({array: data});
        })
    }
})
// tao component Input de chua note nhap vao va gui
var Input = React.createClass({
    send(){
       $.post("/addNotes",{note:this.refs.inputText.value},function(data){
        list.setState({array:data});
       })
        ReactDOM.unmountComponentAtNode(document.getElementById("div-Input"));
    },
    render(){
        return(
            <div className="div-input">
                <input id="input-tag" type="text" ref="inputText" placeholder="enter your note"/>
                <button onClick={this.send}>Send</button>
            </div>
        )
    }

})
ReactDOM.render(
    <div>
       <List/>
    </div>,
    document.getElementById("appNote-text")
);
// push() tra ve chieu dai cua mang
// concat() tra ve 1 mang moi
// pop() : xoa di phan tu cuoi cung cua mang
// splice() : thay doi phan tu cua mang bang cach
// them hoac xoa phan tu
// splice(2,1): xoa 1 phan tu o vi tri thu 2
// slice(): cat cac phan tu cua mang thanh 1 mang con moi, tra ve 1 ban tham chieu moi ma khong lam thay doi mang cu
// slide(1,3) dua ra 1 mang moi gom 2 phan tu co chi so 1 va 2. Nho la khong bao gom 3
// map() dung de lap cac phan tu trong mang va thuc hien mot chuc nang nao do voi cac phan tu do, trong do ta co the truyen vao 2 tham so. tham so thu nhat la doi tuong chi tung phan tu trong mang va tham so thu 2 chi chi so cua cac phan tu do
// body-parser: giup lay duoc du lieu gui tu form thong qua req.body va du lieu gui len server