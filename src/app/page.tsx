
import ViewUsers from "./components/view-users";
import { LoginForm } from "./server-components/register-form";


export default function Home() {
return (
  <div>
    <LoginForm/>
    <ViewUsers/>
  </div>
)
}
