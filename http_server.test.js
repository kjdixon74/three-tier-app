const port = require("./http_server");

test("port is not empty", () => {
  expect(port).toBeFalsy();
});
