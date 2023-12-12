const Notification = require("../../models/notification");

const articleNotification = async (req, res) => {
  const articleId = req.params.id;
  const updateData = req.body;

  try {
    const updatedArticle = await Notification.findByIdAndUpdate(
      articleId,
      updateData,
      { new: true }
    );

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = articleNotification;
