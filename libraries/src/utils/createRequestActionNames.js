const statuses = [
  'REQUEST',
  'SUCCESS',
  'FAILURE',
];

export default prefix => statuses
  .reduce((acc, status) => ({
    ...acc,
    [`${prefix}_${status}`]: `${prefix}_${status}`,
  }), {});
