const mockjs = require('mockjs');
const { VITE_APP_APIHOST } = process.env;
const mock = {};
// Post
mock[`POST ${VITE_APP_APIHOST || ''}/login/login`] = (req, res) => {
  const { pwd, tel } = req.body;
  const send = {
    code: 1,
    data: {},
    msg: '',
  };
  if (tel === '13204660513' && pwd === '123456') {
    send['data'] =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8yMTA0c2cueXpoNTEyLmNvbSIsImF1ZCI6IjQyLjE4NC41LjY4IiwiaWF0IjoxNjE5ODU3MDA4LCJleHAiOjE2MjI0NDkwMDgsImRhdGEiOnsiaWQiOjIsImNsYXNzaWZ5IjoyfX0.LopSpADnrbAA3LNWY0ExftfzmLIglCFknEmapMcJkWk';
  } else {
    send['code'] = 201;
    send['msg'] = 'Wrong username or password';
  }

  res.send(send);
};
// Get
mock[`GET ${VITE_APP_APIHOST || ''}/home/articles/dailynew`] = (req, res) => {
  res.send({
    code: 0,
    data: {
      total: mockjs.mock('@integer(1000,10000)'),
      num: mockjs.mock('@integer(10,100)'),
      day: mockjs.mock('@float(-10,15,0,2)'),
      week: mockjs.mock('@float(-10,15,0,2)'),
    },
  });
};

module.exports = {
  ...mock,
};
