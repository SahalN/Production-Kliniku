/** @format */

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "Nama Depan Perlu Diisi"],
    },
    lastName: {
      type: String,
      required: [true, "Nama Belakang Perlu Diisi"],
    },
    phone: {
      type: String,
      required: [true, "Nomor Telepon Perlu Diisi"],
    },
    email: {
      type: String,
      required: [true, "Email Perlu Diisi"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Alamat Rumah Perlu Diisi"],
    },
    specialization: {
      type: String,
      required: [true, "Spesialisasi Perlu Diisi"],
    },
    experience: {
      type: String,
      required: [true, "Pengalaman Perlu Diisi"],
    },
    feesperconsultation: {
      type: Number,
      required: [true, "Bayaran Perlu Diisi"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: Object,
      required: [true, "Jam Kerja Perlu Disi"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
