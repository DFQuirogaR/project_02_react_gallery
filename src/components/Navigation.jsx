import { Link } from "react-router-dom";
import { Space1 } from "./Space1";
import { Space2 } from "./Space2";
import { Space3 } from "./Space3";
import { Space4 } from "./Space4";
import { Space5 } from "./Space5";
import { Space6 } from "./Space6";

export const Navigation = () => {
    return (
        <div className="container mt-4 father">
            <Link to="/space1" className="links">
            <figure className="image-size">
                <Space1/>
                <figcaption>Space 1</figcaption>
            </figure>
            </Link>
            <Link to="/space2" className="links">
            <figure className="image-size">
                <Space2/>
                <figcaption>Space 2</figcaption>
            </figure>
            </Link>
            <Link to="/space3" className="links">
            <figure className="image-size">
                <Space3/>
                <figcaption>Space 3</figcaption>
            </figure>
            </Link>
            <Link to="/space4" className="links">
            <figure className="image-size">
                <Space4/>
                <figcaption>Space 4</figcaption>
            </figure>
            </Link>
            <Link to="/space5" className="links">
            <figure className="image-size">
                <Space5/>
                <figcaption>Space 5</figcaption>
            </figure>
            </Link>
            <Link to="/space6" className="links">
            <figure className="image-size">
                <Space6/>
                <figcaption>Space 6</figcaption>
            </figure>
            </Link>
        </div>
     );
}