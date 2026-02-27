import axios from "axios";

export const getAccessToken = async () => {
  const response = await axios.post(
    "https://www.strava.com/api/v3/oauth/token",
    {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }
  );

  return response.data.access_token;
};

export const getActivities = async () => {
  const token = await getAccessToken();

  const response = await axios.get(
    "https://www.strava.com/api/v3/athlete/activities",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      },
      params: {
        per_page: 20,
      },
    }
  );
  return response.data;
};