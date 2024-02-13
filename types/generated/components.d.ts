import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqElementsFaQs extends Schema.Component {
  collectionName: 'components_faq_elements_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'cube';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq-elements.fa-qs': FaqElementsFaQs;
    }
  }
}
