const Internship = require("../models/internshipModel");
const Utr = require("../models/utr.model");

exports.createInternship = async (req, res) => {
  try {
    const { name, email, phone, domain, duration, signature } = req.body;
    const newInternship = new Internship({ name, email, phone, domain, duration, signature });
    await newInternship.save();
    res.status(201).json({ message: "Internship data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving internship data." });
  }
};

exports.utrNumber = async (req, res) => {
  try {
    const {utr} = req.body;
    const utrno = new Utr({utr});
    await utrno.save();
    res.status(201).json({ message: "UTR Submit successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error Not Submit UTR Try Again !" });
  }
};
