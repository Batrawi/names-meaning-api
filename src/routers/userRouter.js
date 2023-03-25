const Router = require("../util/route");
const userController = require("../controlers/userControler");

module.exports = (request, response) => {
  let isSent = false;
  isSent = Router.get(
    "/auto-complete",
    request,
    response,
    userController.getAutoComplete,
    isSent
  );
  isSent = Router.get(
    "/get-meaning",
    request,
    response,
    userController.getMeaning,
    isSent
  );
  Router.notFound(request, response, isSent);
};
