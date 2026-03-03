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

// export const getActivities = async (req, res) => {
//   const token = await getAccessToken();
//   const { after, before, per_page } = req.query;

//     const params = {
//       per_page: per_page ? Number(per_page) : 50,
//     };

//     if (after) params.after = Number(after);
//     if (before) params.before = Number(before);
//   const response = await axios.get(
//     "https://www.strava.com/api/v3/athlete/activities",
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: 'application/json'
//       },
//       params: {
//        params,
//       },
//     }
//   );
//   return response.data;
// };

const STRAVA_BASE_URL = "https://www.strava.com/api/v3";

async function getActivities(filters = {}) {
  const token = await getAccessToken();
  const {
    after,
    before,
    per_page = 50,
    type,
  } = filters;

  const params = {
    per_page: Number(per_page),
  };

  if (after) params.after = Number(after);
  if (before) params.before = Number(before);

  const response = await axios.get(
    `${STRAVA_BASE_URL}/athlete/activities`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`,
      },
      params,
    }
  );

  let activities = response.data;

  // Optional filtering by type (Run, Ride, etc.)
  if (type) {
    activities = activities.filter(
      (activity) => activity.type === type
    );
  }

  return activities;
}

module.exports = { getActivities };