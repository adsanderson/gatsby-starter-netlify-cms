import CMS, { init } from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

init({
  config: {
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
        api_key: `${process.env.CLOUDINARY_API_KEY}`
      }
    }
  }
});
