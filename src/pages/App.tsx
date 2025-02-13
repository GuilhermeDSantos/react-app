import {Form} from "../components/form";
import {List} from "../components/list";
import style from "./app.module.scss"

function App() {
    return (
        <div className={style.AppStyle}>
            <Form></Form>
            <List></List>
        </div>
    );
}

export default App
