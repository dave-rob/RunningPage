import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

const mockRuns = [
  {
    "resource_state": 2,
    "athlete": {
      "id": 124407344,
      "resource_state": 1
    },
    "name": "Night Weight Training",
    "distance": 0,
    "moving_time": 2846,
    "elapsed_time": 2846,
    "total_elevation_gain": 0,
    "type": "WeightTraining",
    "sport_type": "WeightTraining",
    "workout_type": 30,
    "device_name": "Garmin Forerunner 570",
    "id": 17458808959,
    "start_date": "2026-02-20T08:49:52Z",
    "start_date_local": "2026-02-20T01:49:52Z",
    "timezone": "(GMT-07:00) America/Boise",
    "utc_offset": -25200,
    "location_city": null,
    "location_state": null,
    "location_country": null,
    "achievement_count": 0,
    "kudos_count": 0,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a17458808959",
      "summary_polyline": "",
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "visibility": "followers_only",
    "flagged": false,
    "gear_id": null,
    "start_latlng": [],
    "end_latlng": [],
    "average_speed": 0,
    "max_speed": 0,
    "average_temp": 25,
    "has_heartrate": true,
    "average_heartrate": 84.1,
    "max_heartrate": 125,
    "heartrate_opt_out": false,
    "display_hide_heartrate_option": true,
    "elev_high": 0,
    "elev_low": 0,
    "upload_id": 18555967004,
    "upload_id_str": "18555967004",
    "external_id": "garmin_ping_537512065952",
    "from_accepted_tag": false,
    "pr_count": 0,
    "total_photo_count": 0,
    "has_kudoed": false
  },
  {
    "resource_state": 2,
    "athlete": {
      "id": 124407344,
      "resource_state": 1
    },
    "name": "Afternoon Run",
    "distance": 8867,
    "moving_time": 3045,
    "elapsed_time": 3215,
    "total_elevation_gain": 59,
    "type": "Run",
    "sport_type": "Run",
    "workout_type": null,
    "device_name": "Garmin Forerunner 570",
    "id": 17466192740,
    "start_date": "2026-02-20T22:50:13Z",
    "start_date_local": "2026-02-10T15:50:13Z",
    "timezone": "(GMT-07:00) America/Denver",
    "utc_offset": -25200,
    "location_city": null,
    "location_state": null,
    "location_country": null,
    "achievement_count": 1,
    "kudos_count": 1,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a17466192740",
      "summary_polyline": "wxeqFzor~RAfBBtACnF@\\DHFDT@f@A~AB`AEHBDDBJ@t@BRFDR@`@RRFPA@D@dB@RFRPPRJ~@FNFDJJf@DBHAdA_ApAm@hA}@|@yAjA{B~@cAxAs@fBiA`@Mv@OVKfBy@TOb@[X_@HW@S?iBCoA?KFKb@GRAHDFrDFh@Ld@LJRFR?|@G`@@BBBLFhAGHc@Dw@Ny@^c@Zo@bAMLi@@aAIa@FIFSXcAr@WJ_@F[TaAf@k@n@YVYLc@HGFGHCR@hBG`@Ob@m@~@Sd@aA~@W`@Ml@G`@ExAGNOAWKiBaAWIYAUBYJa@h@_@Zi@NY@cAeAEKQw@G_D@yCB{AC_EIMu@QOAoCAMOBaBGiA?kCCSQi@?aCAw@BcBGKy@?@A^GN?HDN^D^@tAAv@?bB@pECpADfCEv@a@xDCrC@dFHn@Rl@ALOZUPo@x@u@v@]ReAd@i@JEH@t@CfB?tO@LD@R@t@GVK\\[zBcCHQFg@J]v@mAd@Yt@SxAcAhAg@j@Gl@@b@CX@`Bj@ZDRAr@Ub@Ih@Cr@@bAH`ANf@Nb@XF?BCDULsBJeAF[`@iAFY?KGg@GWm@mAOi@_@kCe@kA?m@Jk@?[KqD?i@DSLQXG`@Qt@u@ZUdAm@l@Sr@_@^WZ_@FEXIF?z@HT@NAPMp@_A`@]`@Uj@W~@GLGDKCmAGISA_BBOEKIO[I{@GeDAGICw@BGHA^@vDK\\SVUR_@V{BfA{A\\s@h@i@ZiBz@gAhAcB`Da@j@_Ax@a@To@ZsA`ACJDlBJlANdA?TCHa@?[HWPY^URYLu@Hk@Za@P_@D_@GO@e@Hq@T{At@g@XsAvAc@\\kAd@c@TG@OCCKCsABKHKNMvBcA`@c@`@o@p@i@@E@UQyACeA?oBAs@JYLSNGLAb@CbA@\\CpABTEBKBqAAgA",
      "resource_state": 2
    },
    "trainer": false,
    "commute": false,
    "manual": false,
    "private": false,
    "visibility": "followers_only",
    "flagged": false,
    "gear_id": null,
    "start_latlng": [
      39.68,
      -104.79
    ],
    "end_latlng": [
      39.68,
      -104.8
    ],
    "average_speed": 2.912,
    "max_speed": 3.4,
    "average_cadence": 82.9,
    "average_watts": 306.6,
    "max_watts": 421,
    "weighted_average_watts": 302,
    "device_watts": true,
    "kilojoules": 933.7,
    "has_heartrate": true,
    "average_heartrate": 152.5,
    "max_heartrate": 174,
    "heartrate_opt_out": false,
    "display_hide_heartrate_option": true,
    "elev_high": 1706,
    "elev_low": 1674.2,
    "upload_id": 18563369843,
    "upload_id_str": "18563369843",
    "external_id": "garmin_ping_537739369526",
    "from_accepted_tag": false,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false
  },
   {
    "resource_state": 2,
    "athlete": {
      "id": 124407344,
      "resource_state": 1
    },
    "name": "Night Weight Training",
    "distance": 0,
    "moving_time": 2846,
    "elapsed_time": 2846,
    "total_elevation_gain": 0,
    "type": "WeightTraining",
    "sport_type": "WeightTraining",
    "workout_type": 30,
    "device_name": "Garmin Forerunner 570",
    "id": 17458808959,
    "start_date": "2026-02-20T08:49:52Z",
    "start_date_local": "2026-02-25T01:49:52Z",
    "timezone": "(GMT-07:00) America/Boise",
    "utc_offset": -25200,
    "location_city": null,
    "location_state": null,
    "location_country": null,
    "achievement_count": 0,
    "kudos_count": 0,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a17458808959",
      "summary_polyline": "",
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "visibility": "followers_only",
    "flagged": false,
    "gear_id": null,
    "start_latlng": [],
    "end_latlng": [],
    "average_speed": 0,
    "max_speed": 0,
    "average_temp": 25,
    "has_heartrate": true,
    "average_heartrate": 84.1,
    "max_heartrate": 125,
    "heartrate_opt_out": false,
    "display_hide_heartrate_option": true,
    "elev_high": 0,
    "elev_low": 0,
    "upload_id": 18555967004,
    "upload_id_str": "18555967004",
    "external_id": "garmin_ping_537512065952",
    "from_accepted_tag": false,
    "pr_count": 0,
    "total_photo_count": 0,
    "has_kudoed": false
  },
   {
    "resource_state": 2,
    "athlete": {
      "id": 124407344,
      "resource_state": 1
    },
    "name": "Night Weight Training",
    "distance": 0,
    "moving_time": 2846,
    "elapsed_time": 2846,
    "total_elevation_gain": 0,
    "type": "Run",
    "sport_type": "WeightTraining",
    "workout_type": 30,
    "device_name": "Garmin Forerunner 570",
    "id": 17458808959,
    "start_date": "2026-02-20T08:49:52Z",
    "start_date_local": "2026-02-20T01:49:52Z",
    "timezone": "(GMT-07:00) America/Boise",
    "utc_offset": -25200,
    "location_city": null,
    "location_state": null,
    "location_country": null,
    "achievement_count": 0,
    "kudos_count": 0,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a17458808959",
      "summary_polyline": "",
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "visibility": "followers_only",
    "flagged": false,
    "gear_id": null,
    "start_latlng": [],
    "end_latlng": [],
    "average_speed": 0,
    "max_speed": 0,
    "average_temp": 25,
    "has_heartrate": true,
    "average_heartrate": 84.1,
    "max_heartrate": 125,
    "heartrate_opt_out": false,
    "display_hide_heartrate_option": true,
    "elev_high": 0,
    "elev_low": 0,
    "upload_id": 18555967004,
    "upload_id_str": "18555967004",
    "external_id": "garmin_ping_537512065952",
    "from_accepted_tag": false,
    "pr_count": 0,
    "total_photo_count": 0,
    "has_kudoed": false
  },
]

function groupRunsByWeek(runs) {
  const weeks = {};

  runs.forEach(run => {
    const date = new Date(run.start_date_local);

    // Convert JS day (0=Sun) into Monday-based index
    const day = date.getDay();
    const diffToMonday = (day === 0 ? -6 : 1 - day);

    const monday = new Date(date);
    monday.setDate(date.getDate() + diffToMonday);
    monday.setHours(0, 0, 0, 0);

    const weekKey = monday.toISOString().split("T")[0];

    if (!weeks[weekKey]) {
      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);

      weeks[weekKey] = {
        weekStart: weekKey, // Monday
        weekEnd: sunday.toISOString().split("T")[0], // Sunday
        runs: []
      };
    }

    weeks[weekKey].runs.push(run);
  });

  return Object.values(weeks).sort(
    (a, b) => new Date(a.weekStart) - new Date(b.weekStart)
  );
}


const milesPerWeek= (week) =>{
  const mileage = week.runs.reduce(
  (sum, run) => sum + run.distance,
  0
) / 1609.34;
return mileage.toFixed(2);
}

export default function Colfax(){
     const chart = useChart({
    data: [
      { miles: 10, month: "January" },
      {miles: 95, month: "February" },
      { miles: 87, month: "March" },
      {miles: 88, month: "May" },
      {miles: 65, month: "June" },
      { miles: 90, month: "August" },
    ],
    series: [{ name: "miles", color: "teal.solid" }],
  })
 const onlyRuns = mockRuns.filter((activity) => activity.type === "Run");
  return (
    <>
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
    <div color="gray">
  {groupRunsByWeek(onlyRuns).map((week) => (
    <div key={week.weekStart} >
      <h3>
        {week.weekStart} → {week.weekEnd}
      </h3>
      <p>Total Runs: {week.runs.length}</p>
      <p>distance: {milesPerWeek(week)}</p>
    </div>
  ))}
</div>
    </>
    )
}