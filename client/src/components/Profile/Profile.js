import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = props => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const { platform, username } = props.match.params;

  useEffect(() => {
    fetchProfileData();
    // eslint-disable-next-line
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        `/api/v1/profile/${platform}/${username}`
      );

      setProfileData(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  let profile = null;
  if (loading) {
    profile = (
      <div className="profile-container">
        <h1>Loading...</h1>
      </div>
    );
  } else if (error) {
    profile = (
      <div className="profile-container">
        <h1>{error}</h1>
        <Link to="/">Go Back</Link>
      </div>
    );
  } else if (profileData) {
    profile = (
      <section className="profile-container">
        <h1 className="username">
          <img
            src={profileData.platformInfo.avatarUrl}
            class="platform-avatar"
            alt=""
          />
          {profileData.platformInfo.platformUserId}
        </h1>
        <div className="grid">
          <div>
            <img src={profileData.segments[1].metadata.imageUrl} alt="" />
          </div>
          <div>
            <ul>
              {profileData.metadata.activeLegendName ? (
                <li>
                  <h2>Selected Legend</h2>
                  <p>{profileData.metadata.activeLegendName}</p>
                </li>
              ) : null}
              {profileData.segments[0].stats.season2Wins ? (
                <li>
                  <h2>Season 2 wins</h2>
                  <p>
                    {profileData.segments[0].stats.season2Wins.displayValue}
                    <span>
                      {" "}
                      ({
                        profileData.segments[0].stats.season2Wins.percentile
                      }{" "}
                      percentile)
                    </span>
                  </p>
                </li>
              ) : null}
              {profileData.segments[0].stats.level.displayValue ? (
                <li>
                  <h2>Apex Level</h2>
                  <p>
                    {profileData.segments[0].stats.level.displayValue}
                    <span>
                      {" "}
                      ({profileData.segments[0].stats.level.percentile}{" "}
                      percentile)
                    </span>
                  </p>
                </li>
              ) : null}
              {profileData.segments[0].stats.kills.value ? (
                <li>
                  <h2>Lifetime Kills</h2>
                  <p>
                    {profileData.segments[0].stats.kills.displayValue}
                    <span>
                      {" "}
                      ({profileData.segments[0].stats.kills.percentile}{" "}
                      percentile)
                    </span>
                  </p>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <Link to="/">Go Back</Link>
      </section>
    );
  }

  return profile;
};

export default Profile;
