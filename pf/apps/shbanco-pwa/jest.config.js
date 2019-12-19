module.exports = {
  name: 'shbanco-pwa',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/shbanco-pwa',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
