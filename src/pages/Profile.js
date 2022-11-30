import React from "react";
import { useParams } from "react-router-dom";
const data = {
  velopert: {
    name: "김민준씨",
    description: "개발 잘하는 사람임..",
  },
  robbins: {
    name: "건형박..",
    description: "일본 다녀온 사람임..",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
