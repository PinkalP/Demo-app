import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Modal from './components/Modal';
import * as pos from './components/Modal';

function App() {
  const [records, setRecords] = useState([]);
  const [show, setShow] = useState(false);
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((data) => data.json())
      .then((res) => setRecords(res.results));
  }, []);

  const handleOpenModal = (data) => {
    setShow(true);
    setUserDetail(data);
  };

  const handleCloseModal = () => {
    setShow(false);
    setUserDetail(null);
  };

  return (
    <div className="App">
      <Navbar />
      <CardContainer>
        {records.map((record) => (
          <Card
            key={record.id}
            title={record.name}
            image={record.image}
            record={record}
            openDetail={handleOpenModal}
          />
        ))}
      </CardContainer>

      {show && (
        <Modal
          show={show}
          handleClose={handleCloseModal}
          detail={userDetail}
          openPos={pos.CM_CENTER_CENTER}
        />
      )}
    </div>
  );
}

export default App;
