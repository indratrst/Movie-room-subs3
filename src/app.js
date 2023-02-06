import "./styles/style.css";
import "./script/title-navbar.js";
import main from "./main.js";
import $ from "jquery/dist/jquery.min.js";
import img from "./assets/image_not_found.png";
import { vendor } from "./vendor.js";

$(document).on("DOMContentLoaded", main);
