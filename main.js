  var realGrid2Lic =
    'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wv50juZqrKKzQ4npiZoGBKqeibHCCl3OrYlSREvRHn80Zw4twcvJs0f';
  var container;
  var dataProvider;
  var gridView;
  var fields = [{
      'fieldName': 'KorName',
      'dataType': 'text'
    },
    {
      'fieldName': 'gender',
      'dataType': 'text'
    },
    {
      'fieldName': 'PhoneNumber',
      'dataType': 'text'
    },
    {
      'fieldName': 'Date',
      'dataType': 'datetime',
      'dateTimeFormat': 'yyyy-MM-dd'
    },
    {
      'fieldName': 'Money',
      'dataType': 'number'

    }
  ];
  var columns = [{
      'name': 'KorNameColumn',
      'fieldName': 'korName',
      'type': 'data',
      'width': '150',
      'header': {
        'text': '이름'
      },
      'editor': {
        'type': 'line',
        'inputCharacters': 'ㄱ-힣'
      }
    },
    {
      'name': 'genderColumn',
      'fieldName': 'Gender',
      'type': 'data',
      'width': '150',
      'header': {
        'text': '성별'
      }
    },
    {
      'name': 'PhoneNumberColumn',
      'fieldName': 'PhoneNumber',
      'type': 'data',
      'width': '150',
      'header': {
        'text': '전화번호'
      },
      'editor': {
        'mask': {
          'editMask': '000-0000-0000'
        }
      },
      'textFormat': '([0-9]{3})([0-9]{4})([0-9]{4});$1-$2-$3'
    },
    {
      'name': 'DateColumn',
      'fieldName': 'Date',
      'datatype': 'datetime',
      'datetimeFormat': 'yyyy-MM-dd',
      'width': '150',
      'header': {
        'text': '입사일'
      }
    },
    {
      'name': 'MoneyColumn',
      'fieldName': 'Money',
      'type': 'data',
      'numberFormat': '#,##0',
      'width': '150',
      'header': {
        'text': '급여'
      }
    }
  ];

  var data = [{
      'KorName': '고길동',
      'Gender': '남',
      'PhoneNumber': '01088882222',
      'Date': '2000-02-01',
      'Money': 24000000
    },
    {
      'KorName': '이둘리',
      'Gender': '여',
      'PhoneNumber': '01029342638',
      'Date': '2002-03-01',
      'Money': 26000000
    },
    {
      'KorName': '최또치',
      'Gender': '남',
      'PhoneNumber': '01023453647',
      'Date': '2010-04-01',
      'Money': 27000000
    },
    {
      'KorName': '도우너',
      'Gender': '남',
      'PhoneNumber': '01022863436',
      'Date': '2015-05-01',
      'Money': 28000000
    },
    {
      'KorName': '희동희',
      'Gender': '여',
      'PhoneNumber': '01092663477',
      'Date': '2020-06-01',
      'Money': 28000000
    },
    {
      'KorName': '고철수',
      'Gender': '남',
      'PhoneNumber': '01066783232',
      'Date': '2008-07-01',
      'Money': 32000000
    },
    {
      'KorName': '고영희',
      'Gender': '남',
      'PhoneNumber': '01099343488',
      'Date': '2007-09-01',
      'Money': 30000000
    },
    {
      'KorName': '홍길동',
      'Gender': '남',
      'PhoneNumber': '01029883366',
      'Date': '2002-10-01',
      'Money': 29000000
    },
    {
      'KorName': '최수지',
      'Gender': '남',
      'PhoneNumber': '01037495588',
      'Date': '2003-11-01',
      'Money': 23000000
    }
  ];

  document.addEventListener('DOMContentLoaded', function () {
    container = document.getElementById('realgrid');
    gridView = new RealGrid.GridView(container);
    dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(fields);
    dataProvider.fillJsonData(data);
    gridView.setColumns(columns);
    gridView.setDataSource(dataProvider);
    //헤더 높이
    var headerHeight = gridView.header.height;
    gridView.header.height = headerHeight + 32;
    //행 높이
    var height = gridView.displayOptions.rowHeight;
    gridView.displayOptions.rowHeight = height + 32;

    //컬럼 너비 채우기
    gridView.displayOptions.fitStyle = "evenFill";

    //삭제 옵션 설정
    gridView.setEditOptions({
      deletable: true
    });

    //편집가능 설정
    gridView.setEditOptions({
      editable: true,
      updatable: true
    });
    // <button id="saveButton" class="save-button">저장</button>
    const saveButton = document.getElementById('saveButton');
    if (saveButton) saveButton.onclick = onSaveButtonClick;
    //  <button id="deleteButton" class="button">삭제</button>
    const deleteButton = doucument.getElementById('deleteButton');
    if (deleteButton) deleteButton.onclick = onDeleteButtonClick;
    // <button id="editButton" class="button">수정</button
    const editButton = document.getElementById('editButton');
    if (editButton) editButton.onclick = onEditButtonClick;
  });

  function clearInputControls() {
    const inputControls = document.getElementsbyTagName('input');

    console.log(inputControls);
    for (let input of inputControls) {
      console.log(input);
      input.value = ''
    }
  }

var mode = 'insert';
  const addRow = function (item) {
    dataProvider.addRow({
      ...item
    });
  }

  const onSaveButtonClick = function (event) {

    const item = {
      KorName: document.getElementById('inputKorName').value,
      Gender: document.getElementById('inputGender').value,
      PhoneNumber: document.getElementById('inputPhoneNumber').value,
      Date: document.getElementById('inputDate').value,
      Money: document.getElementById('inputMoney').value,
    }
    if (mode === 'insert') {
      dataProvider.addRow({ ...item });
    }
    if (mode === 'edit') {
      const current = gridView.getCurrent();
      if (current.dataRow > -1) dataProvider.updateRow(current.dataRow, item);
      mode = 'insert';
    }
    clearInputControls();
    dataProvider.addRow({
      ...item
    });
  }



  const onDeleteButtonClick = function (event) {
    const current = gridView.getCurrent();
    if (current.dataRow > -1) dataProvider.removeRow(current.dataRow);
};
  
const onEditButtonClick = function (event) {
  const current = gridView.getCurrent();
  if (current.dataRow > -1) {
    const item = dataProvider.getJsonRow(current.dataRow);
    document.getElementById('inputKorName').value = item.KorName;
    document.getElementById('inputGender').value = item.Gender;
    document.getElementById('inputPhoneNumber').value = item.PhoneNumber;
    document.getElementById('inputDate').value = new date(item.Date).tolocaleDateString('ko-KR');
    document.getElementById('inputMoney').value = item.Money;
    mode = 'edit';
}
}