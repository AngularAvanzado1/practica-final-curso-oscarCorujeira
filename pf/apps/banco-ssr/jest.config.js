module.exports = {
  name: 'banco-ssr',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/banco-ssr',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
