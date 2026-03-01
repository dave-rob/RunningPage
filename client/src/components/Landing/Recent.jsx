import "../../styles/Landing.css";
import { useState, useEffect } from "react";
import RunMap from "../Runmap";
import {
  Card,
  Image,
  Text,
  Stack,
  Flex,
  Box,
  Container,
} from "@chakra-ui/react";
// const mockRuns = [
//   {
//     "resource_state": 2,
//     "athlete": {
//       "id": 124407344,
//       "resource_state": 1
//     },
//     "name": "Night Weight Training",
//     "distance": 0,
//     "moving_time": 2846,
//     "elapsed_time": 2846,
//     "total_elevation_gain": 0,
//     "type": "WeightTraining",
//     "sport_type": "WeightTraining",
//     "workout_type": 30,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17458808959,
//     "start_date": "2026-02-20T08:49:52Z",
//     "start_date_local": "2026-02-20T01:49:52Z",
//     "timezone": "(GMT-07:00) America/Boise",
//     "utc_offset": -25200,
//     "location_city": null,
//     "location_state": null,
//     "location_country": null,
//     "achievement_count": 0,
//     "kudos_count": 0,
//     "comment_count": 0,
//     "athlete_count": 1,
//     "photo_count": 0,
//     "map": {
//       "id": "a17458808959",
//       "summary_polyline": "",
//       "resource_state": 2
//     },
//     "trainer": true,
//     "commute": false,
//     "manual": false,
//     "private": false,
//     "visibility": "followers_only",
//     "flagged": false,
//     "gear_id": null,
//     "start_latlng": [],
//     "end_latlng": [],
//     "average_speed": 0,
//     "max_speed": 0,
//     "average_temp": 25,
//     "has_heartrate": true,
//     "average_heartrate": 84.1,
//     "max_heartrate": 125,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 0,
//     "elev_low": 0,
//     "upload_id": 18555967004,
//     "upload_id_str": "18555967004",
//     "external_id": "garmin_ping_537512065952",
//     "from_accepted_tag": false,
//     "pr_count": 0,
//     "total_photo_count": 0,
//     "has_kudoed": false
//   },
//   {
//     "resource_state": 2,
//     "athlete": {
//       "id": 124407344,
//       "resource_state": 1
//     },
//     "name": "Afternoon Run",
//     "distance": 8867,
//     "moving_time": 3045,
//     "elapsed_time": 3215,
//     "total_elevation_gain": 59,
//     "type": "Run",
//     "sport_type": "Run",
//     "workout_type": null,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17466192740,
//     "start_date": "2026-02-20T22:50:13Z",
//     "start_date_local": "2026-02-20T15:50:13Z",
//     "timezone": "(GMT-07:00) America/Denver",
//     "utc_offset": -25200,
//     "location_city": null,
//     "location_state": null,
//     "location_country": null,
//     "achievement_count": 1,
//     "kudos_count": 1,
//     "comment_count": 0,
//     "athlete_count": 1,
//     "photo_count": 0,
//     "map": {
//       "id": "a17466192740",
//       "summary_polyline": "wxeqFzor~RAfBBtACnF@\\DHFDT@f@A~AB`AEHBDDBJ@t@BRFDR@`@RRFPA@D@dB@RFRPPRJ~@FNFDJJf@DBHAdA_ApAm@hA}@|@yAjA{B~@cAxAs@fBiA`@Mv@OVKfBy@TOb@[X_@HW@S?iBCoA?KFKb@GRAHDFrDFh@Ld@LJRFR?|@G`@@BBBLFhAGHc@Dw@Ny@^c@Zo@bAMLi@@aAIa@FIFSXcAr@WJ_@F[TaAf@k@n@YVYLc@HGFGHCR@hBG`@Ob@m@~@Sd@aA~@W`@Ml@G`@ExAGNOAWKiBaAWIYAUBYJa@h@_@Zi@NY@cAeAEKQw@G_D@yCB{AC_EIMu@QOAoCAMOBaBGiA?kCCSQi@?aCAw@BcBGKy@?@A^GN?HDN^D^@tAAv@?bB@pECpADfCEv@a@xDCrC@dFHn@Rl@ALOZUPo@x@u@v@]ReAd@i@JEH@t@CfB?tO@LD@R@t@GVK\\[zBcCHQFg@J]v@mAd@Yt@SxAcAhAg@j@Gl@@b@CX@`Bj@ZDRAr@Ub@Ih@Cr@@bAH`ANf@Nb@XF?BCDULsBJeAF[`@iAFY?KGg@GWm@mAOi@_@kCe@kA?m@Jk@?[KqD?i@DSLQXG`@Qt@u@ZUdAm@l@Sr@_@^WZ_@FEXIF?z@HT@NAPMp@_A`@]`@Uj@W~@GLGDKCmAGISA_BBOEKIO[I{@GeDAGICw@BGHA^@vDK\\SVUR_@V{BfA{A\\s@h@i@ZiBz@gAhAcB`Da@j@_Ax@a@To@ZsA`ACJDlBJlANdA?TCHa@?[HWPY^URYLu@Hk@Za@P_@D_@GO@e@Hq@T{At@g@XsAvAc@\\kAd@c@TG@OCCKCsABKHKNMvBcA`@c@`@o@p@i@@E@UQyACeA?oBAs@JYLSNGLAb@CbA@\\CpABTEBKBqAAgA",
//       "resource_state": 2
//     },
//     "trainer": false,
//     "commute": false,
//     "manual": false,
//     "private": false,
//     "visibility": "followers_only",
//     "flagged": false,
//     "gear_id": null,
//     "start_latlng": [
//       39.68,
//       -104.79
//     ],
//     "end_latlng": [
//       39.68,
//       -104.8
//     ],
//     "average_speed": 2.912,
//     "max_speed": 3.4,
//     "average_cadence": 82.9,
//     "average_watts": 306.6,
//     "max_watts": 421,
//     "weighted_average_watts": 302,
//     "device_watts": true,
//     "kilojoules": 933.7,
//     "has_heartrate": true,
//     "average_heartrate": 152.5,
//     "max_heartrate": 174,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 1706,
//     "elev_low": 1674.2,
//     "upload_id": 18563369843,
//     "upload_id_str": "18563369843",
//     "external_id": "garmin_ping_537739369526",
//     "from_accepted_tag": false,
//     "pr_count": 0,
//     "total_photo_count": 1,
//     "has_kudoed": false
//   },

const formatPace = (speed) => {
  const pace = 26.8224 / speed;
  const minutes = Math.floor(pace);
  const seconds = Math.round((pace - minutes) * 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const formatDate = (startDate) => {
  return startDate.split("T", 1)
}

const RecentRuns = () => {
  const [runs, setRuns] = useState([]);
  useEffect(() => {
    const fetchActivities = async () => {
      // const response = await fetch("http://localhost:5000/api/activities");
      const response = await fetch(
        import.meta.env.VITE_API_URL + "api/activities",
      );
      const activities = await response.json();

      const onlyRuns = activities.filter((activity) => activity.type === "Run");

      const lastFiveRuns = onlyRuns.slice(0, 5)
      setRuns(lastFiveRuns);
    };

    fetchActivities();
  }, []);
  return (
    <div className="recent-runs">
      <Text fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }} color={"gray.200"} padding={"2rem 0 0 0"}>
        Recent Runs
      </Text>
      <div className="run-container">
        <Stack
          justify={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 15, md: 25 }}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex wrap={"wrap"} gap={"10"} justify={"center"}>
            {runs.map((run) => (
              <Card.Root
                overflow="hidden"
                key={run.id}
                backgroundColor={"gray.800"}
                color={"white"}
              >
                <Container paddingY={"5px"}>
                  {run.map.summary_polyline.length > 0 ? (
                    <RunMap encodedPolyline={run.map.summary_polyline} />
                  ) : (
                    <Image
                      src="images/treadmill.svg"
                      width={{base:150, md:250}}
                      height={{base:150, md:250}}
                    />
                  )}
                </Container>

                <Card.Body gap="2" backgroundColor={"gray.900"}>
                <Box>
                  <Card.Title>{run.name}</Card.Title>
                  <Text fontSize={"0.75rem"} marginTop={"-1"}>{formatDate(run.start_date_local)}</Text>
                </Box>
                  
                  <Flex gap="4" wrap="wrap" width={{base:180, md:260, sm:180}}>
                    <Box width={"45%"}>
                      <Text color={"#FC4C02"} fontSize={{base:"sm", md:"md"}}>Distance</Text>
                      <Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}>
                        {(run.distance / 1609.34).toFixed(2)} miles
                      </Text>
                    </Box>
                    <Box width={"45%"}>
                      <Text color={"#FC4C02"} fontSize={{base:"sm", md:"md"}}>Time</Text>
                      <Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}>
                        {(run.moving_time / 60).toFixed(0)} min
                      </Text>
                    </Box>
                    <Box width={"45%"}>
                      <Text color={"#FC4C02"} fontSize={{base:"sm", md:"md"}}>Avg. Pace</Text>
                      <Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}>
                        {formatPace(run.average_speed)} min/mile
                      </Text>
                    </Box>
                    <Box width={"45%"}>
                      <Text color={"#FC4C02"} fontSize={{base:"sm", md:"md"}}>Avg. HR</Text>
                      
                      {run.average_heartrate > 0 ? (
                        <Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}>{run.average_heartrate} bpm</Text> ):
                        (<Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}> -- bpm</Text>
                      )}
                    </Box>
                  </Flex>
                </Card.Body>
              </Card.Root>
            ))}
          </Flex>
        </Stack>
      </div>
    </div>
  );
};

export default RecentRuns;
