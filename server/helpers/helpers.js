import moment from "moment";

const timeago = (timestamp) => {
  return moment(timestamp).startOf("minute").fromNow();
};


const getCurrentYear = () => {
    return new Date().getFullYear();
};

module.exports = {
  getCurrentYear,
  timeago
}