import '../../styles/Landing.css'
import { useState, useEffect } from 'react'
import RunMap from '../Runmap';
import { Card, Image, Text, Stack, Flex, Box, Container} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
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
//   {
//     "resource_state": 2,
//     "athlete": {
//       "id": 124407344,
//       "resource_state": 1
//     },
//     "name": "Night Weight Training",
//     "distance": 0,
//     "moving_time": 3522,
//     "elapsed_time": 3522,
//     "total_elevation_gain": 0,
//     "type": "WeightTraining",
//     "sport_type": "WeightTraining",
//     "workout_type": 30,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17467998146,
//     "start_date": "2026-02-21T05:55:15Z",
//     "start_date_local": "2026-02-20T22:55:15Z",
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
//       "id": "a17467998146",
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
//     "average_temp": 24,
//     "has_heartrate": true,
//     "average_heartrate": 102.6,
//     "max_heartrate": 141,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 0,
//     "elev_low": 0,
//     "upload_id": 18565183189,
//     "upload_id_str": "18565183189",
//     "external_id": "garmin_ping_537840445387",
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
//     "distance": 22546.5,
//     "moving_time": 7030,
//     "elapsed_time": 7966,
//     "total_elevation_gain": 177,
//     "type": "Run",
//     "sport_type": "Run",
//     "workout_type": null,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17477903825,
//     "start_date": "2026-02-21T21:35:15Z",
//     "start_date_local": "2026-02-21T14:35:15Z",
//     "timezone": "(GMT-07:00) America/Denver",
//     "utc_offset": -25200,
//     "location_city": null,
//     "location_state": null,
//     "location_country": null,
//     "achievement_count": 5,
//     "kudos_count": 1,
//     "comment_count": 0,
//     "athlete_count": 2,
//     "photo_count": 0,
//     "map": {
//       "id": "a17477903825",
//       "summary_polyline": "yxeqFxor~REzKHx@XJjEAVRHnA`BTBrBLd@^VhAHPTP~@^vG`D`BvCnE~ClA]`FXd@~@\\`FShEpArE\\nCh@tGl@nAbAhDnEr@zBz@Hd@iA\\Yn@Lf@d@vAnDfE|HrE~FdKhA\\GTi@NA@vC_AnAYhACv@VvA`IlM`F|F`GtMtC`FnEpGjCdGnAxAzC`BfBbCh@dBj@jFhAxEn@l@`CCfAdAZdA@xCTrAhGtNx@dAlA`@n@QJUJoAJIIpCtBHb@p@~@NV^|@{@h@X`BmBdD{BjBMjEmAjDkBbC_@~@f@Rd@lC`A|Em@nCJv@d@z@L~@lBd@XTEbA_CfAkAxA@zDhBnAcA|AB|BbBb@fDB|AV~AMnDZb@|@HPhAr@`@JvDf@fBn@dEFlAb@ZGz@f@t@t@h@RdAf@dAz@JnCKdAOl@_@zBwCbAw@pDm@rB}AjC_AZi@QeAl@k@vAoDdDsB|AoDRqDVqBcA}BCuBYkCa@y@k@g@EuA{@i@IS?_JvCiBvAOh@y@nA[z@cAhBiAjA_@tAoAHN@fCEhPJDB_OGsDIS{AnAcDvAeAjAaAT}@bA{ATwCfB@`J~@x@JpAbAtA^`CFvC`ApBg@bHqAdDw@x@}BlAmAdDs@p@RdASd@_DfAkBvAqDp@{ArAyApBeBr@{EDw@aCeBoBJk@]]EaA]aAYwCg@aBKyDq@c@QgA}@K[]LoDUiAEgBc@oD{BkBgBEkA`AuDeBcBEs@j@mArC[Le@Wy@iBcAO_Ag@sCGgEj@kC{@eAoAWCgC`@{C`BsEnAuBPsChBoB`Cg@UcAx@M]eAWg@i@mBEEWToBIOIBYdBk@RaAWu@s@{GoOSmA@uC]oAoAiA_CBm@m@gAkEu@wG}@qBmAyAsCyAoAuAwCwGeEcGeD}FmFqLgEaFeJ_OSaA@gAVaAbAsAEuCo@j@Y@oHm@oA[sCgD_CwD_DmGw@yBw@o@g@I]Va@fAy@?SQc@iBgDmEiAaAcEu@cBCiCg@_F_@{DmA{ERu@Qc@_@TmEv@uCO{@y@eBk@oDa@cAJkBMuCB{ARU|@[zAsAhDcBr@s@hC?hBoBtC{@@eAGYsB@a@QUaAIaEiAF?lEc@dAiDhB}A`@sEdC{@~@eCtEmFlDBpB\\bDETeALiAfAmCx@wADqBp@_Bv@{BxBmC|@?kBj@g@jBy@lAwA",
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
//     "average_speed": 3.207,
//     "max_speed": 4.24,
//     "average_cadence": 84,
//     "average_watts": 330.7,
//     "max_watts": 469,
//     "weighted_average_watts": 319,
//     "device_watts": true,
//     "kilojoules": 2323.6,
//     "has_heartrate": true,
//     "average_heartrate": 164.7,
//     "max_heartrate": 190,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 1742.2,
//     "elev_low": 1672,
//     "upload_id": 18575142199,
//     "upload_id_str": "18575142199",
//     "external_id": "garmin_ping_538129132400",
//     "from_accepted_tag": false,
//     "pr_count": 5,
//     "total_photo_count": 1,
//     "has_kudoed": false
//   },
//   {
//     "resource_state": 2,
//     "athlete": {
//       "id": 124407344,
//       "resource_state": 1
//     },
//     "name": "Night Weight Training",
//     "distance": 0,
//     "moving_time": 3860,
//     "elapsed_time": 3860,
//     "total_elevation_gain": 0,
//     "type": "WeightTraining",
//     "sport_type": "WeightTraining",
//     "workout_type": 30,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17489107356,
//     "start_date": "2026-02-22T07:58:24Z",
//     "start_date_local": "2026-02-22T00:58:24Z",
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
//       "id": "a17489107356",
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
//     "average_temp": 22,
//     "has_heartrate": true,
//     "average_heartrate": 110.5,
//     "max_heartrate": 188,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 0,
//     "elev_low": 0,
//     "upload_id": 18586443759,
//     "upload_id_str": "18586443759",
//     "external_id": "garmin_ping_538492215742",
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
//     "name": "Night Weight Training",
//     "distance": 0,
//     "moving_time": 3696,
//     "elapsed_time": 3696,
//     "total_elevation_gain": 0,
//     "type": "WeightTraining",
//     "sport_type": "WeightTraining",
//     "workout_type": 30,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17491717281,
//     "start_date": "2026-02-23T08:05:11Z",
//     "start_date_local": "2026-02-23T01:05:11Z",
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
//       "id": "a17491717281",
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
//     "average_temp": 26,
//     "has_heartrate": true,
//     "average_heartrate": 96.4,
//     "max_heartrate": 135,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 0,
//     "elev_low": 0,
//     "upload_id": 18589074600,
//     "upload_id_str": "18589074600",
//     "external_id": "garmin_ping_538653210560",
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
//     "name": "Night Weight Training",
//     "distance": 0,
//     "moving_time": 3058,
//     "elapsed_time": 3058,
//     "total_elevation_gain": 0,
//     "type": "WeightTraining",
//     "sport_type": "WeightTraining",
//     "workout_type": 30,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17505414505,
//     "start_date": "2026-02-24T09:06:49Z",
//     "start_date_local": "2026-02-24T02:06:49Z",
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
//       "id": "a17505414505",
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
//     "average_heartrate": 97.8,
//     "max_heartrate": 129,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 0,
//     "elev_low": 0,
//     "upload_id": 18602811855,
//     "upload_id_str": "18602811855",
//     "external_id": "garmin_ping_539105043244",
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
//     "distance": 7254.1,
//     "moving_time": 2567,
//     "elapsed_time": 2567,
//     "total_elevation_gain": 28,
//     "type": "Run",
//     "sport_type": "Run",
//     "workout_type": null,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17511957810,
//     "start_date": "2026-02-24T22:30:06Z",
//     "start_date_local": "2026-02-24T15:30:06Z",
//     "timezone": "(GMT-07:00) America/Denver",
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
//       "id": "a17511957810",
//       "summary_polyline": "upeqFvkr~R?pDBdFATGJMFeC?wA@IBGTAl@?l@D^AhAQfB@FFD~BB`BCH?HDFR?|@JfA@fBCrCFpA?LGHaDb@i@PiAf@[VgApAYX[R{@`@WJYDMH?jBCvB?vM@DFDlAKTIPM~BiCLULy@L[j@y@RSNIVIj@OnA_Al@Yp@Sl@EVBt@C\\FhAb@d@F|Ac@|@Cj@@zBXn@T\\TH?DKZ}DJc@b@oADWEg@IWu@yAKk@e@qCWi@EQ?k@HmAGyBAsBBEPMj@QLGz@}@dAo@b@UTCVKl@]PM`@c@JILENAfAH\\CFCRQl@_AVUVOZMZI|@KJCDGAiACKEEgA?c@BIAWKM[Ie@E}AA_BAGICu@BGFCP@dEK\\]b@g@\\{Az@_AZa@DWHyBrA{Ar@k@l@UXaAlBeAdBeAv@qAn@iA~@CPHdCTdCBJzA|@`Ad@bAvAv@vAZ\\NJ`@JhAb@b@TJI\\y@J[@YEQQm@o@oAm@wDWg@GYAg@J{@?m@CMCCICE?IFe@n@Yn@o@l@e@n@Sv@QdCTn@j@v@f@~@Zb@TPl@Pf@Vl@NNHFHMpAMhCGJo@]g@OcAOwAKWAq@D_@He@PWDs@KYI[O]IY?_@@k@Ac@B]Fm@VYR{@p@MFq@PQHUPg@p@Ub@SjAeCrCSNIDk@Je@HIAIEAGBqFAcB@eGA}A@ELGx@s@h@Sf@[",
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
//     "average_speed": 2.826,
//     "max_speed": 3.66,
//     "average_cadence": 83.1,
//     "average_watts": 291.6,
//     "max_watts": 379,
//     "weighted_average_watts": 292,
//     "device_watts": true,
//     "kilojoules": 748.4,
//     "has_heartrate": true,
//     "average_heartrate": 147.3,
//     "max_heartrate": 159,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 1709.2,
//     "elev_low": 1679.4,
//     "upload_id": 18609362278,
//     "upload_id_str": "18609362278",
//     "external_id": "garmin_ping_539276626491",
//     "from_accepted_tag": false,
//     "pr_count": 0,
//     "total_photo_count": 1,
//     "has_kudoed": false
//   },
//   {
//     "resource_state": 2,
//     "athlete": {
//       "id": 124407344,
//       "resource_state": 1
//     },
//     "name": "Night Weight Training",
//     "distance": 0,
//     "moving_time": 3871,
//     "elapsed_time": 3871,
//     "total_elevation_gain": 0,
//     "type": "WeightTraining",
//     "sport_type": "WeightTraining",
//     "workout_type": 30,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17515587048,
//     "start_date": "2026-02-25T08:47:27Z",
//     "start_date_local": "2026-02-25T01:47:27Z",
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
//       "id": "a17515587048",
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
//     "average_temp": 24,
//     "has_heartrate": true,
//     "average_heartrate": 95,
//     "max_heartrate": 143,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 0,
//     "elev_low": 0,
//     "upload_id": 18613005929,
//     "upload_id_str": "18613005929",
//     "external_id": "garmin_ping_539442895796",
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
//     "distance": 8594.6,
//     "moving_time": 2682,
//     "elapsed_time": 2810,
//     "total_elevation_gain": 79,
//     "type": "Run",
//     "sport_type": "Run",
//     "workout_type": null,
//     "device_name": "Garmin Forerunner 570",
//     "id": 17524234091,
//     "start_date": "2026-02-25T22:18:56Z",
//     "start_date_local": "2026-02-25T15:18:56Z",
//     "timezone": "(GMT-07:00) America/Denver",
//     "utc_offset": -25200,
//     "location_city": null,
//     "location_state": null,
//     "location_country": null,
//     "achievement_count": 4,
//     "kudos_count": 0,
//     "comment_count": 0,
//     "athlete_count": 1,
//     "photo_count": 0,
//     "map": {
//       "id": "a17524234091",
//       "summary_polyline": "speqFzkr~RAdAEHIFqA?S@EBe@C]Bm@AI@ILCtBFNZF|@An@BjAAPBDJBRFhBALETIFQDg@BwCAQDEHEX?h@Bv@BLHFlC@hAAN@FHDT@bAAh@IXKNi@NyCBq@AKBEHETGv@Ar@DRHBtFCJBJ\\BzFGRUJa@X_@Jw@L[H_Bp@g@b@oAzA]R{@`@_@LYFGDCJ?\\Ub@Cf@@|HCRBhFERKBc@KK?sBPwBB[HgAh@]L{Ch@w@Ee@JSHWNGN?BB?JQNMh@SPAVDVA`Di@p@Yp@a@JEd@CxAAjBUV@d@JH?DCBQ@yA?sM?GKMIJQp@[n@}@~Ae@p@SR]VyAf@kAf@wAhAUXUf@ON]By@?_@Ha@P_@BsAM}@Am@Bo@?iAIgAEi@?[B_A?_ACeA@iAB}AAcCPeALYFi@TmAr@]X]Ly@Pm@FgAAMDjA?xB[VMv@g@ZWj@YRIfBWlAKvAA`BErBDBCb@@|BCfEJdB?l@Bz@HPAr@UVEhAAJAJOVg@l@m@j@c@v@e@f@Q|@Up@a@f@c@d@s@PYn@wAZcAFIPId@?NEv@YZGl@WZ[fAoAXSbAg@pAk@TE\\Gb@B\\C\\It@a@p@GREJEVS^g@ROTGNAL@b@J~BjAJHv@fAz@|AX\\TNrCdABJMdAG|AIROHUDo@QaBSeBIk@D_AZWB_AOk@WYG}AA{@J}@Zg@Ze@`@kA`@SJQLu@fAGLIt@KT_@d@[XELMJMTo@r@_@Le@DOFO?KCCGB{@CiA@kFAiIDIb@GxAq@TQ|AkBVUDI@KOc@Ko@Cw@AoHJcB",
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
//     "average_speed": 3.205,
//     "max_speed": 4.76,
//     "average_cadence": 83.2,
//     "average_watts": 334.6,
//     "max_watts": 554,
//     "weighted_average_watts": 336,
//     "device_watts": true,
//     "kilojoules": 896.5,
//     "has_heartrate": true,
//     "average_heartrate": 162,
//     "max_heartrate": 187,
//     "heartrate_opt_out": false,
//     "display_hide_heartrate_option": true,
//     "elev_high": 1711.2,
//     "elev_low": 1671.6,
//     "upload_id": 18621682524,
//     "upload_id_str": "18621682524",
//     "external_id": "garmin_ping_539667060003",
//     "from_accepted_tag": false,
//     "pr_count": 2,
//     "total_photo_count": 1,
//     "has_kudoed": false
//   }
// ]
const formatPace = (speed) => {
  const pace = 26.8224 / speed;
  const minutes = Math.floor(pace);
  const seconds = Math.round((pace - minutes) * 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};



const RecentRuns = () => {
    // const runs = useRecentRuns()
  //   const activities = fetch("http://localhost:5000/api/activities");
  //   const onlyRuns = activities.filter(
  //   (activity) => activity.type === "Run"
  // );
  const [runs, setRuns] = useState([]);
  useEffect(() => {
  const fetchActivities = async () => {
    // const response = await fetch("http://localhost:5000/api/activities");
    const response = await fetch(import.meta.env.VITE_API_URL + "/api/activities")
    const activities = await response.json();

    const onlyRuns = activities.filter(
      (activity) => activity.type === "Run"
    );

    setRuns(onlyRuns);
  };

  fetchActivities();
}, []);
    return (
    <div className="recent-runs">
      <Text fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }} color={"gray.200"}>Recent Runs</Text>
      <div className="run-container">
        <Stack
                    justify={"center"}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: "column", lg: "row" }} >
          <Flex wrap={"wrap"} gap={"10"} justify={"center"}>
      {runs.map((run) => (
         <Card.Root  overflow="hidden" key={run.id} backgroundColor={"gray.800"} color={'white'}>
          <Container paddingY={"5px"}>
            {/* <RunMap encodedPolyline={ run.map.summary_polyline }/> */}
            {run.map?.summary_polyline?.length > 0 ? (
                <RunMap encodedPolyline={run.map.summary_polyline} />
              ) : (
                <Image src="images/treadmill.svg" width={"250px"} height={"250px"} />
              )}
          </Container>
      
      <Card.Body gap="2" backgroundColor={"gray.900"}>
        <Card.Title>{run.name}</Card.Title>
        {/* <Card.Description> */}
          <Flex gap="4" wrap="wrap">
            <Box width={"40%"}>
              <Text color={"#FC4C02"}>Distance</Text>
              <Text color={"gray.400"}>{(run.distance / 1609.34).toFixed(2)} miles</Text>
            </Box>
            {/* <Box width={"40%"}>
              <Text color={"#FC4C02"}>Time</Text>
              <Text color={"gray.400"}>{(run.moving_time / 60).toFixed(0)} min</Text>
            </Box>
            <Box width={"40%"}>
              <Text color={"#FC4C02"}>Avg. Pace</Text>
              <Text color={"gray.400"}>{formatPace(run.average_speed)} min/mile</Text>
            </Box>
            <Box width={"40%"}>
              <Text color={"#FC4C02"}>Avg. HR</Text>
              <Text color={"gray.400"}>{run.average_heartrate} bpm</Text>
            </Box> */}
          </Flex>
        {/* </Card.Description> */}
      </Card.Body>
    </Card.Root>
      ))}
      </Flex>
      </Stack>
         </div>
    </div>

  );
};

export default RecentRuns