import {BtnWrapper, Button} from "./Pagecomps.jsx";
import { useNavigate } from "react-router-dom";

function Btnlist() {
    const navigate = useNavigate();

    const BtnHandler = (path) => {
        navigate(path);
    }

    return (
        <BtnWrapper>
            <Button onClick={() => BtnHandler("/nav1")}>
                nav1
            </Button>
            <Button onClick={() => BtnHandler("/nav2")}>
                nav2
            </Button>
            <Button onClick={() => BtnHandler("/nav3")}>
                nav3
            </Button>
        </BtnWrapper>
    );
}

export default Btnlist;