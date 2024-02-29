const sql = require('./db.js');

const Activity = (activity) => {
  this.id = activity.id
  this.name = activity.value
  this.description = activity.description
  this.date = activity.date
}

Activity.getImageByActivity = (idActivity, result) => {
  var _query = `select * from tbl_act_images where img_id_act='${idActivity}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
}



Activity.getAll = (result) => {
  var _query = `select * from tbl_activities`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });


}

Activity.createActivity = (name, description, date) => {
  var _query = `insert into tbl_activities(act_name, act_description, act_date)values
  ('${name}','${description}','${date}')`;
  sql.query(_query, (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
}

module.exports = Activity;
