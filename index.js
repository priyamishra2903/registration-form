// Import stylesheets
import "./style.css";
import matchRules from "match-rules";

const appDiv = document.getElementById("app");

window.validate = function() {
  let form = document.forms["form"];
  let fname = form["fname"].value;
  let lname = form["lname"].value;
  let address = form["address"].value;
  let email = form["email"].value;
  let dob = form["dob"].value;
  let mobile = form["mobile"].value;
  let city = form["city"].value;
  let country = form["country"].value;
  let pincode = form["code"].value;
  let gender = form["gender"].value;
  let linkedin = form["linkedin"].value;
  let github = form["github"].value;

  let err = document.getElementById("error");

  const FORM_RULES = {
    fname: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    lname: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    address: (exp, sourceObject) => /^[a-zA-Z0-9 ]+$/.test(exp),
    mobile: (exp, sourceObject) => exp.length == 10,
    city: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    country: (exp, sourceObject) => /^[a-zA-Z0-9 ]+$/.test(exp),
    pincode: (exp, sourceObject) => exp.length == 6
  };
  const user = {
    fname,
    lname,
    address,
    email,
    dob,
    mobile,
    city,
    country,
    pincode,
    gender,
    linkedin,
    github
  };
  console.log(user);

  console.log(matchRules(user, FORM_RULES));

  if (matchRules(user, FORM_RULES)) {
    return true;
  } else {
    err.innerText = "Error!";
    return false;
  }
};
