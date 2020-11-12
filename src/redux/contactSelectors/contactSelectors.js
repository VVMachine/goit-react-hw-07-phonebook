import { createSelector } from '@reduxjs/toolkit'


const getContactItems = (state) => state.contacts.items;

const getFilterString = state => state.contacts.filter

const getFitredContactItems = createSelector(
  [getContactItems, getFilterString],
  (items, filter) => items.filter((item) =>
  item.name.toLowerCase().includes(filter.toLowerCase())
)
)

export default {
  getContactItems,
  getFitredContactItems,
};
