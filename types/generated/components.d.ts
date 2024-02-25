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
    heading: Attribute.String & Attribute.Required;
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

export interface CommonTabData extends Schema.Component {
  collectionName: 'components_common_tab_data';
  info: {
    displayName: 'tabData';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    navbar: Attribute.Relation<
      'common.tab-data',
      'oneToOne',
      'api::navbar.navbar'
    >;
    content: Attribute.RichText &
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
      'common.application-date': CommonApplicationDate;
      'common.dates': CommonDates;
      'common.faq-s': CommonFaqS;
      'common.gallery': CommonGallery;
      'common.result-date': CommonResultDate;
      'common.tab-data': CommonTabData;
    }
  }
}
