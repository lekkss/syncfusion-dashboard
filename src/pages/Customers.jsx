import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Toolbar,
  Edit,
  Inject,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, contextMenuItems, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Cusstomers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        width="auto"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowEditing: true, allowDeleting: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Filter, Selection, Edit, Sort, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Cusstomers;
