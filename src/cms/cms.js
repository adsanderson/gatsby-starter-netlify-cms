import CMS, { init } from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

import x from '../env.json'

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

init({
  config: {
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: x.CLOUDINARY_CLOUD_NAME,
        api_key: x.CLOUDINARY_API_KEY
      }
    }
  }
});
