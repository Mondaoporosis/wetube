import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
// Remember not to add '/' in front of the dest.
// Adding '/' will make the function think that the destination is inside of my project file. (It will create that directory)

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
