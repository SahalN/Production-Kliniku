/** @format */

const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorappointmentsController,
  updatesStatusController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//  POST SINGLE DOCTOR INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

// POST GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

// GET APPOINTMENTS
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorappointmentsController
);

// POST UPDATE STATUS
router.post("/update-status", authMiddleware, updatesStatusController);
module.exports = router;
