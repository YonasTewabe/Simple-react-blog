import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFOund = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>The Page you requested could not found</p>
            <Link to ="/">Back to home...</Link>
        </div>
     );
}
 
export default NotFOund;