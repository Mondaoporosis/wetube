export const home = (req, res) => res.render("home");
export const search = (req, res) => (req, res) => res.render("search");
export const videos = (req, res) => (req, res) => res.render("videos");
export const upload = (req, res) => (req, res) => res.render("upload");
export const videoDetail = (req, res) => (req, res) =>
  res.render("videoDetail");
export const editVideo = (req, res) => (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => (req, res) =>
  res.render("deleteVideo");
