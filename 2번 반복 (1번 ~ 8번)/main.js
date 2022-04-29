var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYlnRyUuAXyLeK+VftULexn77B0PqgFuedJSNZd9lOsQq/8h2wIgOqXo56h8Tjucen4lSREvRHn80TbbAvLsknwP';
var container;
var gridView;
var dataProvider;
var fields = [{
  'fieldName' : 'fieldName'
}];
var columns = [{
  'name': 'column1',
  'fieldName' : 'fieldName'

}];
var data = [
  { 'fields': '값1' },
  { 'fields': '값2' }
];

document.addEventListener('DOMContentLoaded', function () {
      container = document.getElementById('realgrid');
      gridview = new RealGrid.GridView(container);
      dataProvider = new RealGrid.LocalDataProvider();
      dataProvider.setFields(fields);
      dataProvider.fillJsonData(data);
      gridview.setColumns(columns);
      gridview.setDataSource(dataProvider);
    });