


export const CMSPath =`${process.env.IMAGE_CMS_URL}`;

export const SEOImageHelper = (seo) => {
    if(seo.metaImage){
      seo.metaImage = CMSPath+seo.metaImage.url;
    }

    return seo;
}