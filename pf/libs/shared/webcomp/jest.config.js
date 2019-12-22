module.exports = {
  name: 'shared-webcomp',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/webcomp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
