import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonApplicationDate extends Schema.Component {
  collectionName: 'components_common_application_dates';
  info: {
    displayName: 'applicationDate';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
  };
}

export interface CommonData extends Schema.Component {
  collectionName: 'components_page_section_data';
  info: {
    displayName: 'tabData';
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
    navbar: Attribute.Relation<'common.data', 'oneToOne', 'api::navbar.navbar'>;
  };
}

export interface CommonDates extends Schema.Component {
  collectionName: 'components_common_dates';
  info: {
    displayName: 'examDates';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
  };
}

export interface CommonFaqS extends Schema.Component {
  collectionName: 'components_faq_faq_s';
  info: {
    displayName: "FAQ's";
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Text;
    navbar: Attribute.Relation<
      'common.faq-s',
      'oneToOne',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
    description: '';
  };
  attributes: {
    pageGallery: Attribute.Media;
    heading: Attribute.String;
    navbar: Attribute.Relation<
      'common.gallery',
      'oneToOne',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonResultDate extends Schema.Component {
  collectionName: 'components_common_result_dates';
  info: {
    displayName: 'resultDate';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.application-date': CommonApplicationDate;
      'common.data': CommonData;
      'common.dates': CommonDates;
      'common.faq-s': CommonFaqS;
      'common.gallery': CommonGallery;
      'common.result-date': CommonResultDate;
    }
  }
}
