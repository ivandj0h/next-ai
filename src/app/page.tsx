import TasksComponent from "@/components/todos/tasks";
import {Button} from "@/components/ui/button";
import {signInAction} from "../../actions/auth-action";

export default function Home() {

    return (
        <>
            <form action={signInAction}>
                {/*<TasksComponent />*/}
                <Button>Login</Button>
            </form>
        </>
    );
}
