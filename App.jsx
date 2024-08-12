import React, { useState, useEffect } from 'react';
import Form from './form';
import DataTable from './dataTable';

const App = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setData(storedData);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
  };

  const addOrUpdateData = (newData) => {
    if (currentData) {
      const updatedData = data.map((item, index) =>
        index === currentData.index ? newData : item
      );
      setData(updatedData);
      saveToLocalStorage(updatedData);
    } else {
      const updatedData = [...data, newData];
      setData(updatedData);
      saveToLocalStorage(updatedData);
    }
    setCurrentData(null);
  };

  const editData = (index) => {
    setCurrentData({ ...data[index], index });
  };

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    saveToLocalStorage(updatedData);
  };

  const clearCurrent = () => {
    setCurrentData(null);
  };

  return (
    <div>
      <Form addOrUpdateData={addOrUpdateData} currentData={currentData} clearCurrent={clearCurrent} />
      <DataTable data={data} editData={editData} deleteData={deleteData} />
    </div>
  );
};

export default App;
