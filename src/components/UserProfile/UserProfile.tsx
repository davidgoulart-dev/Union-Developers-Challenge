import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../api/api";


interface UserParams extends Record<string, string | undefined> {
    uuid: string;
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

    return (
        <div>
            <h1>Perfil</h1>
            {userData && (
                <div>
                    <p>Name: {userData.name.first} {userData.name.last}</p>
                    <p>Email: {userData.email}</p>
                </div>
            )}
        </div>
    );
}

export default UserProfile;

