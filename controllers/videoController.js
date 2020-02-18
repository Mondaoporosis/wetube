export const home = (req, res) => res.render("home");
export const search = (req, res) => (req, res) => res.send("search");
export const videos = (req, res) => (req, res) => res.send("Videos");
export const upload = (req, res) => (req, res) => res.send("Upload");
export const videoDetail = (req, res) => (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => (req, res) => res.send("Delete Video");
