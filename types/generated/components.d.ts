import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaqS extends Schema.Component {
  collectionName: 'components_faq_faq_s';
  info: {
    displayName: "FAQ's";
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Text;
    navbar: Attribute.Relation<'faq.faq-s', 'oneToOne', 'api::navbar.navbar'>;
  };
}

export interface GalleryGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
    description: '';
  };
  attributes: {
    pageGallery: Attribute.Media;
    heading: Attribute.String;
    navbar: Attribute.Relation<
      'gallery.gallery',
      'oneToOne',
      'api::navbar.navbar'
    >;
  };
}

export interface NavbarNavbar extends Schema.Component {
  collectionName: 'components_navbar_navbars';
  info: {
    displayName: 'navbar';
    description: '';
  };
  attributes: {
    navbarName: Attribute.String & Attribute.Required;
    tabData: Attribute.Component<'page-data.data', true>;
    gallery: Attribute.Component<'gallery.gallery', true>;
    faq: Attribute.Component<'faq.faq-s', true>;
  };
}

export interface PageDataData extends Schema.Component {
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
    navbar: Attribute.Relation<
      'page-data.data',
      'oneToOne',
      'api::navbar.navbar'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faq-s': FaqFaqS;
      'gallery.gallery': GalleryGallery;
      'navbar.navbar': NavbarNavbar;
      'page-data.data': PageDataData;
    }
  }
}
