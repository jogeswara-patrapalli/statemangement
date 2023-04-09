import { useState, useEffect } from "react";
interface Data{
   
        id: number,
        name: string,
        type: string,
        perpayment: string,
        termlength: string,
        payment: number
    
}

interface Return{
    selectedRows: number[],
    total: number,
    handleRowClick: (event: any, id: number) => void,
    handleHeaderCheckboxChange: (event: any) => void,
    handleSlider: (slidevalue: any) => void,
    isSelected: (id: number) => boolean
}

export const useTable=(rows:Data[]):Return=>{
    const items = [0, 1, 2, 3, 4, 5];
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const handleRowClick = (event: any, id: number) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelectedRows: number[] = [];

    newSelectedRows = selectedRows.slice();

    if (selectedIndex === -1) {
      newSelectedRows.push(id);
    } else {
      newSelectedRows.splice(selectedIndex, 1);
    }

    console.log(newSelectedRows);

    setSelectedRows(newSelectedRows);
  };

  useEffect(() => {
    let t = 0;
    for (let i = 0; i < selectedRows.length; i++) {
      t += rows[selectedRows[i]].payment;
    }
    setTotal(t);
  }, [selectedRows, total]);

  const handleHeaderCheckboxChange = (event: any) => {

    if (event.target.checked && selectedRows.length == 0) {
      setSelectedRows(rows.map((rows) => rows.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSlider = (slidevalue: any) => {
    let newSelectedRows: number[] = [];

    newSelectedRows = selectedRows.slice();

    if (slidevalue == 0) {
      setSelectedRows([]);
    } else if (newSelectedRows.length == 0) {
      newSelectedRows.push(0);
      setSelectedRows(newSelectedRows);
      setTotal(total + rows[0].payment);
    } else if (total >= slidevalue) {
      newSelectedRows.pop();
      console.log(newSelectedRows);

      setSelectedRows(newSelectedRows);
    } else if (total <= slidevalue) {
      var unSelectedRows: number[] = [];
      for (var j = 0; j < items.length; j++) {
        if (!newSelectedRows.includes(items[j])) {
          unSelectedRows.push(items[j]);
        }
      }
      console.log(unSelectedRows);
      newSelectedRows.push(unSelectedRows[0]);
      setSelectedRows(newSelectedRows);
      setTotal(total + rows[unSelectedRows[0]].payment);
    }
  };

  const isSelected = (id: number) => selectedRows.indexOf(id) !== -1;

  return {selectedRows,total,handleRowClick,handleHeaderCheckboxChange,handleSlider,isSelected}
}