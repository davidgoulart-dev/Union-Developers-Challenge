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
                        <div>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">First Name:</span> {userData.name.first}
                                </span>
                            </p>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">Last Name:</span> {userData.name.last}
                                </span>
                            </p>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">Email:</span> {userData.email}
                                </span>
                            </p>
                        </div>
                    )}
                    {activeTab === 'location' && (
                        <div>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">Street:</span>{' '}
                                    {userData.location.street.number} {userData.location.street.name}
                                </span>
                            </p>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">City:</span> {userData.location.city}
                                </span>
                            </p>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">State:</span> {userData.location.state}
                                </span>
                            </p>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">Country:</span> {userData.location.country}
                                </span>
                            </p>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">Postcode:</span> {userData.location.postcode}
                                </span>
                            </p>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">Coordinates:</span>{' '}
                                    {userData.location.coordinates.latitude}, {userData.location.coordinates.longitude}
                                </span>
                            </p>
                            <p>
                                <span className="api-info">
                                    <span className="info-label">Timezone:</span>{' '}
                                    {userData.location.timezone.offset} - {userData.location.timezone.description}
                                </span>
                            </p>
                        </div>
                    )}
                    {activeTab === 'login' && (
                        <div>
                            <p>
                                <span className="user-info">
                                    <span className="info-label">Username:</span> {userData.login.username}
                                </span>
                            </p>
                            <p>
                                <span className="user-info">
                                    <span className="info-label">Email:</span> {userData.email}
                                </span>
                            </p>
                            <p>
                                <span className="user-info">
                                    <span className="info-label">MD5:</span> {userData.login.md5}
                                </span>
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default UserProfile;

