// koa-router
const Router = require("koa-router");
// Our Controllers
const DepartmentController = require("../controllers/DepartmentController");
const UserController = require("../controllers/UserController");
const DepartmentruleController = require("../controllers/DepartmentRulesController");
const CourseController = require("../controllers/CourseController");
const DepartmentRulesController = require("../controllers/DepartmentRulesController");
const SelectedCourseController = require("../controllers/SelectedCourseController")

const router = new Router({
  prefix: "/api",
});

// DepartmentInfo
router
  .get("/department/all", DepartmentController.readAllDepartment)
  .put("/department", DepartmentController.createDepartment);

// CourseInfo
router
  .post('/course/create', CourseController.createCourse)
  .get('/course/read', CourseController.readAllCourse)
  .put('/course/update', CourseController.updateCourse)
  .put('/course/delete', CourseController.deleteCourse)
  .get('/course/findall', CourseController.findallCourse)

// UserInfo
router
  .put('/user', UserController.createUser)
  .patch('/user/update', UserController.updateUser)
  .delete('/user/delete', UserController.deleteUser)
  .post('/login', UserController.authUser)
  
//DepartmentRule
router
  .get("/departmentrule/all", DepartmentruleController.readAllRule)
  .get("/departmentrule/user/rule", DepartmentruleController.check)
  .get("/departmentrule/user/dep", DepartmentruleController.userdepartment)

//SelectedCourse
router
  .get('/selected/userselected', SelectedCourseController.userselected)
  .put('/selected/create', SelectedCourseController.createSelectedCourse)
  .delete('/selected/delete', SelectedCourseController.deleteSelectedCourse)
  .patch('/selected/update', SelectedCourseController.updateSelectedCourse)

module.exports = router;