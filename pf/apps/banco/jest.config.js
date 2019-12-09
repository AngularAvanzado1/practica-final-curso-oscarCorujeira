module.exports = {
  name: 'banco',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/banco',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
