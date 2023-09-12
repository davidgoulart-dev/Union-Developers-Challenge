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

            <UserAvatar  user={userData} />
            <div className="Profile">
                <div className="tabs">
                    <button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>Info</button>
                    <button className={activeTab === 'location' ? 'active' : ''} onClick={() => setActiveTab('location')}>Location</button>
                    <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>Login</button>
                </div>
                <div className="tab-content">
                    {activeTab === 'info' && (
                        <div>
                            <p>Name: {userData.name.first} {userData.name.last}</p>
                            <p>Email: {userData.email}</p>
                        </div>
                    )}
                    {activeTab === 'location' && (
                        <div>
                            <p>Street: {userData.location.street.number} {userData.location.street.name}</p>
                            <p>City: {userData.location.city}</p>
                            <p>State: {userData.location.state}</p>
                            <p>Country: {userData.location.country}</p>
                            <p>Postcode: {userData.location.postcode}</p>
                            <p>Coordinates: {userData.location.coordinates.latitude}, {userData.location.coordinates.longitude}</p>
                            <p>Timezone: {userData.location.timezone.offset} - {userData.location.timezone.description}</p>
                        </div>
                    )}
                    {activeTab === 'login' && (
                        <div>
                            <p>Username: {userData.login.username}</p>
                            <p>Email: {userData.email}</p>
                            <p>MD5: {userData.login.md5}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

