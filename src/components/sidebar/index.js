import useUser from './../../hooks/use-user';
import User from './user';
import Suggestion from './suggestions';

export default function Sidebar() {
    const {
        user: { username, fullName, userId } = {}
    } = useUser();

    return <div className="p-4">
        <User username={username} fullName={fullName} />
        <Suggestion userId={userId} />
    </div>
}
Sidebar.whyDidYouRender = true;