//ref : reference tham chieu den doi tuong nhap lieu nhu the input ,de lay ra gia tri cua doi tuong nhap lieu
// component: like an class (Temp is a component)
//props : thuoc tinh danh cho 1 component,co the co nhieu props va props co gia tri khong doi trong suot chuong trinh
// co thuoc tinh key de khong bi warning

/*
//global function
function getName(name){
    alert(name);
}

//component show information
var Temp = React.createClass({
    getInfo: function(){
        alert(this.props.children);
    },
   render: function(){
    return(
        <div>
        <h1>hello {this.props.ten} - {this.props.children}</h1>
        <p>{this.props.children}</p>
        <button onClick={()=>{
            var str = this.props.children + this.props.ten;
            getName(str);
        }}>thong tin</button>
        <Temp1 />
        <InputTag />
        </div>
    );
   }
});

//nest component
var Temp1 = React.createClass({
    render(){
        return <h2>hi, i am ducky</h2>
    }
})

// component to get the value of input tag
var InputTag = React.createClass({
    show(){
        var temp = this.refs.txt.value;
        alert(temp);
    },
    render(){
        return (
            <div>
                <input type="text" ref="txt" />
                <button onClick={this.show}>show</button>
            </div>
        );
    }
});
ReactDOM.render(
    <div>
    <Temp ten="1">nice to meet you</Temp>
    <Temp ten="2">glad to meet you</Temp>
    
    </div>
    ,document.getElementById("reactText"));

    */
/*
    //component to increase number
    var IncreaseNum = React.createClass({
        add(){
            this.setState({num:this.state.num + 1})
        },
        getInitialState(){
            return {num:0};
        },
        render(){
            return (
                <div>
                    <button onClick={this.add}>Hello {this.state.num}</button>
                </div>
            );
        }
    })
   ReactDOM.render(
    <div>
    <IncreaseNum />
    
    </div>
    ,document.getElementById("reactText"));
    
    */
// component to increase number
/*var IncreaseNum = React.createClass({
    add(){
        this.setState({num:this.state.num + 1});
    },
    getInitialState(){
        return {num:0}
    },
    render(){
        return (
            <div>
                <button onClick={this.add}>Hello {this.state.num}</button>
            </div>
        )
    }
})
    ReactDOM.render(
        <div>
           <IncreaseNum />
        </div>,
        document.getElementById("reactText")
    ); */
    // create component
   function getName(name){
       alert(name);
   }
        var Temp = React.createClass({
            //them hoc vien
            addStudent(){
                this.setState({tonghocvien : this.state.tonghocvien+1});
            },
            // xoa hoc vien
            deleteStudent(){
                this.setState({tonghocvien: this.state.tonghocvien -1});
            },
            // khoi tao so hoc vien
            getInitialState(){
                return {tonghocvien: 10};
            },
            // hien thi thong tin
            show:function(){
                alert(this.props.ten);
            },
            render : function(){
                return(
                    <div>
                        <Input></Input>
                    <h2>{this.props.ten}</h2>
                    <h2>so hoc vien: {this.state.tonghocvien}</h2>
                    <button onClick={()=>{
                        this.show();
                        getName(this.props.children);
                    }}>showInfor</button>
                    <button onClick={this.addStudent}>them hoc vien</button>
                    <button onClick={this.deleteStudent}>xoa hoc vien</button>
                    </div>
                )
            }
        })

        // tao 1 componet nhap lieu moi
        var Input = React.createClass({
            // lop hien thi noi dung input text
            showText(){
                var temp = this.refs.sl.value;
                alert(temp);
            },
            render(){
                return(
                    <div>
                        <select ref="sl">
                        <option value="a">aaa</option>
                        <option value="b">bbb</option>
                        <option value="c">ccc</option>
                        </select>
                        <input type="text" ref="txtInput" />
                        <button onClick={this.showText}>Hien thi</button>
                    </div>
                )
            }
        })
    ReactDOM.render(
        <div>
            <Temp ten="reactjs"> hoc lap trinh</Temp>
        </div>,
        document.getElementById("reactText")
    );

    // click vao thi tu dong increase number
    // khoi tao component
    var Number = React.createClass({
        //click vao thi tang number
        addNumber(){
            this.setState({number: this.state.number+1});
        },
        // khoi tao state
        getInitialState(){
            return {number : 0};
        },
        render: function(){
            return(
                <div>
                    <button onClick={this.addNumber}> click {this.state.number}</button>
                </div>
            )
        }
    });
    // hien thi component 
    ReactDOM.render(
       // RSX
       <div>
           <Number></Number>
        </div>,
        document.getElementById("reactBtn")
    );

    // click chuyen hinh anh
    // tao 1 component moi
    var Album = React.createClass({
        // chuyen anh next
        next(){
            this.setState({hinh: this.state.hinh==6?6:this.state.hinh+1});
        },
        // chuyen anh truoc
        prev(){
            this.setState({hinh: this.state.hinh==1?1:this.state.hinh-1});
        },
        // khoi tao aanh
        getInitialState(){
            return {hinh : 1};
        },
        render(){
            return(
                <div className="wrap">
                    <img className="image" src={"images/"+this.state.hinh+".png"} />
                    <br></br>
                    <button onClick={this.next}>Tiep theo</button>
                    <button onClick={this.prev}>Quay lai</button>
                </div>
            )
        }
    })
    ReactDOM.render(
        //RSX
        <div>
            <hr></hr>
            <Album/>
        </div>,
        document.getElementById("reactPic")
    );

    // tao 1 component moi
    var Picture = React.createClass({
        //thay doi hinh anh
        changeState(){
            this.setState({anh:(this.state.anh%6)+1})
        },
        // khoi tao hinh anh
        getInitialState(){
            return {anh:1};
        },
        render(){
            return(
                <div>
                    <img className="image" src={"images/"+this.state.anh+".png"} />
                </div>
            )
        },
        componentDidMount(){
            setInterval(this.changeState,2000);
        }
    })
    // chuyen hinh anh trong 2 giay
ReactDOM.render(
    //RSX
    <div>
        <hr></hr>
        <Picture></Picture>
    </div>,
    document.getElementById("reactAlbum")
);

// render html tu string
var Note = React.createClass({
    render(){
        return(
            <div>
                <img className="image" src={this.props.src} />
                <h2>{this.props.children}</h2>
            </div>
        )
    }
})
var List = React.createClass({
    // khoi tao mang
    getInitialState(){
        return {mang:[{srcHinh:"images/1.png",noidung:"reactjs"},{srcHinh:"images/2.png",noidung:"nodejs"},{srcHinh:"images/3.png",noidung:"jquery"}]};
    },
    add(){
        this.state.mang.push({srcHinh:"images/4.png",noidung:"javascript"});
        this.setState(this.state.mang);
    },
    render(){
        return(
            <div>
                <button onClick={this.add}>Them</button>
                {
                    this.state.mang.map(function(note,index){
                      return  <Note  key={index} src={note.srcHinh}>{note.noidung}</Note>
                    })
                }
            </div>
        )
    }
})
ReactDOM.render(
    <div>
        <hr></hr>
        <List/>
    </div>,
    document.getElementById("reactString")
);
// tao 1 cai list chua note
var list;
// tao component Note1
var Note1 = React.createClass({
    edit(){
        this.setState({onEdit:true});
    },
    save(){
        $.post("/save",{noidung:this.refs.inputNote.value,id:this.props.children},function(data){
            list.setState({array: data});
        })
        this.setState({onEdit:false});
    },
    cancel(){
        this.setState({onEdit:false});
    },
    delete(){
        $.post("/delete",{note:this.props.children},function(data){
            list.setState({array: data});
        })
    },
    getInitialState(){
        return {onEdit : false};
    },
    render(){
        if(this.state.onEdit){
            return(
                <div className="div-note">
                 <input defaultValue={this.props.children} ref="inputNote"/>
                  <button onClick={this.save}>Save</button>
                  <button onClick={this.cancel}>Cancel</button>
                </div>
            )
        }else{
            return(
                <div className="div-note">
                  <h2> {this.props.children}</h2>
                  <button onClick={this.delete}>Delete</button>
                  <button onClick={this.edit}>Edit</button>
                </div>
            )
        }
        
    }
})
// tao 1 bien de tro den mang array

var List1 = React.createClass({
    // tao mang chua cac chu thich
    getInitialState(){
        list = this;
        return {array:["hello","hi","learn"]}
    },
    addNote(){
        ReactDOM.render(
            <InputTxt/>,
            document.getElementById("idList")
        )
    },
    render(){
        return(
            
            <div className="div-list" >
            <button onClick={this.addNote}>Add Note</button>
            <div id="idList"></div>
               {
                   this.state.array.map(function(note,index){
                    return   <Note1 key={index}>{note}</Note1>
                   })
               }
            </div>
        )
    },
    componentDidMount(){
        var that = this;
        $.post("/getNotes",function(data){
            
            that.setState({array:data});
        })
    }
})
// tao input tag
var InputTxt = React.createClass({
    send(){
        $.post("/add",{note:this.refs.txtNote.value},function(data){
            list.setState({array:data});
        })
        // ham unmountComponentAtNode(): bo di cac copmponent dang dinh vao 1 diem nao do tren html
        ReactDOM.unmountComponentAtNode(document.getElementById("idList"));
    },
    render(){
        return(
            <div>
                <input type="text" ref="txtNote" placeholder="input your note"/>
                <button onClick={this.send}>send</button>
            </div>
        )
    }
})
// tao ung sung them note 
ReactDOM.render(
    <div>
        
       <List1/>
    </div>,
    document.getElementById("reactNote")
);