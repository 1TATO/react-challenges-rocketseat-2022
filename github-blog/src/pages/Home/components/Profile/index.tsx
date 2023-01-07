import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { ProfileContainer, ProfileDescription } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

const profileUsername = '1TATO';

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );

  const fetchProfileData = useCallback(async () => {
    const response = await api.get(`/users/${profileUsername}`);

    setProfileData(response.data);
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />

      <ProfileDescription>
        <header>
          <h1>{profileData.name}</h1>

          <a href={profileData.html_url} target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </header>

        <p>{profileData.bio}</p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {profileData.login}
          </li>
          {profileData.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {profileData.company}
            </li>
          )}

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {profileData.followers} seguidores
          </li>
        </ul>
      </ProfileDescription>
    </ProfileContainer>
  );
}
