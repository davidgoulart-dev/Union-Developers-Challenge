import "./UserProfile.scss"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../api/api";
import UserAvatar from "./UserAvatar";
import { Link } from 'react-router-dom';

interface UserParams extends Record<string, string | undefined> {
    uuid?: string;
}

const UserProfile: React.FC = () => {
    const { uuid } = useParams<UserParams>();
    const [activeTab, setActiveTab] = useState<'info' | 'location' | 'login'>('info');
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        async function fetchUserData() {
            if (uuid) {
                const user = await api.getUserByUUID(uuid);
                setUserData(user);
            }
        }

        fetchUserData();
    }, [uuid]);

    if (!uuid || !userData) return null;

    return (

        <div>

            <Link className="back-button" to={`/`}>Back</Link>

            <UserAvatar user={userData} />
            <div className="Profile">
                <div className="tabs">
                    <button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>Info</button>
                    <button className={activeTab === 'location' ? 'active' : ''} onClick={() => setActiveTab('location')}>Location</button>
                    <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>Login</button>
                </div>
                <div className="tab-content">
  {activeTab === 'info' && (
    <div className="user-info-container">
      <p className="info">
        <span className="info-label">First Name</span><br />
         {userData.name.first}
      </p>
      <p>
        <span className="info-label">Last Name</span><br /> {userData.name.last}
      </p>
      <p>
        <span className="info-label">Email</span><br /> {userData.email}
      </p>
    </div>
  )}
  {activeTab === 'location' && (
    <div className="api-info-container">
      <p>
        <span className="info-label">Street</span><br />
        {userData.location.street.number} {userData.location.street.name}
      </p>
      <p>
        <span className="info-label">City</span> <br />{userData.location.city}
      </p>
      <p>
        <span className="info-label">State</span> <br />{userData.location.state}
      </p>
      <p>
        <span className="info-label">Country</span><br /> {userData.location.country}
      </p>
      <p>
        <span className="info-label">Postcode</span><br /> {userData.location.postcode}
      </p>
      <p>
        <span className="info-label">Coordinates</span><br />
        {userData.location.coordinates.latitude}, {userData.location.coordinates.longitude}
      </p>
      <p>
        <span className="info-label">Timezone</span><br />
        {userData.location.timezone.offset} - {userData.location.timezone.description}
      </p>
    </div>
  )}
  {activeTab === 'login' && (
    <div className="user-info-container">
      <p>
        <span className="info-label">Username</span> <br />{userData.login.username}
      </p>
      <p>
        <span className="info-label">Email</span><br /> {userData.email}
      </p>
      <p>
        <span className="info-label">MD5</span> <br /> {userData.login.md5}
      </p>
    </div>
  )}
</div>

            </div>
        </div>
    );
}

export default UserProfile;

