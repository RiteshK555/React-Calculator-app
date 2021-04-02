// import Click from "./click.jsx"

function Numbers(props){
    function Handleclick(){
        // props.expression=123;
    }
    return(<button onClick={Handleclick} style={{height:'40px', width:'200px'}} >{props.number}</button>);
}
export default Numbers