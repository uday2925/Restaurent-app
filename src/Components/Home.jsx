import Card from "./Card"
import Filter from "./Filter"
import Table from "./Table"


export const Home=()=>{
    return(
        <div>
            <center>
            <h1>Welcome to Home page</h1>            
            <Table/>
            <Filter/>
            <Card/>
            </center>
           
        </div>
    )
}