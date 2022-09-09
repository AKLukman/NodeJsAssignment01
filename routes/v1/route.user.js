const express = require("express");
const toolsController = require("../../controllers/tools.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/veiwCount");
const router = express.Router();

router
  .route("/random")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(toolsController.getRandomUser);

/**
 * @api {post} /tools save a tool
 * @apiDescription Get all the tools
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} all the tools.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */

// .post(toolsController.saveATool);

router.route("/all").get(toolsController.getAllUser);
router.route("/").post(toolsController.savePost);
router.route("/:id").patch(toolsController.updateUser);
router
  .route("/:id")
  .get(viewCount, limiter, toolsController.getToolDetail)
  .patch(toolsController.updateTool)
  .delete(toolsController.deleteTool);

module.exports = router;
