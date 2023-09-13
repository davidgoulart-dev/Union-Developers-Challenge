
import './UserAvatar.scss';

interface UserProps {
    user: any; 
}

const UserAvatar: React.FC<UserProps> = ({ user }) => {
    if (!user) return null;

    return (
        <div className="user-photo-wrapper">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="user-photo" />
            <p className="user-name">{user.name.first} {user.name.last}</p>
            <p className="user-title">{user.name.title}</p>
            <hr className="hr" />
        </div>
    );
}

export default UserAvatar;
