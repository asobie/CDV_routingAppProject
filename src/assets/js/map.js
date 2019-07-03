var width = "100%"; // width in pixels or percentage
var height = "300"; // height in pixels
var latitude = "0.00"; // center latitude (decimal degrees)
var longitude = "0.00"; // center longitude (decimal degrees)
var zoom = "3"; // initial zoom (between 3 and 18)
var names = false; // always show ship names (defaults to false)

// Single ship tracking
var mmsi = "123456789"; // display latest position (by MMSI)
var imo = "1234567"; // display latest position (by IMO, overrides MMSI)
var show_track = false; // display track line (last 24 hours)

// Fleet tracking
var fleet = "e48ab3d80a0e2a9bf28930f2dd08800c"; // your personal Fleet key (displayed in your Profile)
var fleet_name = "Carnival"; // display particular fleet from your fleet list
var fleet_timespan = "1440"; // maximum age in minutes of the displayed ship positions



<script type="text/javascript" src="https://www.vesselfinder.com/aismap.js"></script>