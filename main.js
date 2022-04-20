   //헤더높이
            var headerHeight = gridView.header.height;
            gridView.header.height = headerHeight + 32;

            //행높이
            var height = gridView.displayOptions.rowHeight;
            gridView.displayOptions.rowHeight = height + 32;

            //컬럼너비채우기
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