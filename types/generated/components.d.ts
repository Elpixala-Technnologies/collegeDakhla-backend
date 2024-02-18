import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaqS extends Schema.Component {
  collectionName: 'components_faq_faq_s';
  info: {
    displayName: "FAQ's";
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Text;
  };
}

export interface GalleryGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    pageGallery: Attribute.Media;
  };
}

export interface NavbarNavbar extends Schema.Component {
  collectionName: 'components_navbar_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    navbarName: Attribute.String;
  };
}

export interface PageSectionData extends Schema.Component {
  collectionName: 'components_page_section_data';
  info: {
    displayName: 'data';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    data: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faq-s': FaqFaqS;
      'gallery.gallery': GalleryGallery;
      'navbar.navbar': NavbarNavbar;
      'page-section.data': PageSectionData;
    }
  }
}
