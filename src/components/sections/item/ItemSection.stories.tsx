import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemSection from "./ItemSection";

export default {
  title: 'Item Section',
  component: ItemSection,
};

export const Default = () =>
  <ItemSection items={[
    {id: 1, name: 'Arnaud'},
    {id: 2, name: 'Jose'}
  ]}/>;

export const NoItem = () =>
  <ItemSection items={[]}/>;

export const OneItem = () =>
  <ItemSection items={[
    {id: 1, name: 'Arnaud'}
  ]}/>;
