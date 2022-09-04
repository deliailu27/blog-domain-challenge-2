const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");
const express = require("express");
const { getAll } = require("../utils/utils");
const router = express.Router();

router.get("/", async (req, res) => {
  getAll("User", req, res);
  const idToFind = parseInt(req.params.id);
});

router.put("/:id", async (req, res) => {
  const { username, email, password, firstName, lastName, age, pictureUrl } =
    req.body;
});

router.post("/", async (req, res) => {
  const { username, email, password, firstName, lastName, age, pictureUrl } =
    req.body;

  console.log("req.body", req.body);
  console.log(username);

  if (
    !username ||
    !email ||
    !password ||
    !firstName ||
    !lastName ||
    !age ||
    !pictureUrl
  ) {
    return res.status(400).json({ error: "Missing fields in request body" });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
        Profile: { create: { firstName, lastName, age, pictureUrl } },
      },
      include: { Profile: true },
    });
    res.status(201).json({ user: newUser });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(409).json({
          error: "A customer with the provided username/email already exists",
        });
      }
    }
    res.status(500).json({ error: e.message });
  }
});
module.exports = router;
