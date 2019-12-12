module.exports = {
  name: 'shared-servicios',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/servicios',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
