import React from 'react';

export interface CarVariant {
  type: string;
  price: number;
}

export interface CarSpecification {
  key: string;
  value: string;
}

export interface CarColor {
  name: string;
  imageUrl: string;
}

export interface CarColorGroup {
  variantGroup: string;
  colors: CarColor[];
}

export interface CarInteriorFeatureText {
  title: string;
  description: string;
}

export interface Car {
  id: string;
  name: string;
  image: string;
  description: string;
  variants: CarVariant[];
  specifications: CarSpecification[];
  colorGroups: CarColorGroup[];
  interiorImageUrl?: string;
  interiorFeatures?: CarInteriorFeatureText[];
}
