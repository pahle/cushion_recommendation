import React from "react";

const Home = () => {
  const kolomHarga = [1, 3, 1, 3, 3];
  const kolomMerk = [0.3333, 1, 2, 2, 2];
  const kolomShade = [1, 0.5, 1, 1, 1];
  const kolomKetahanan = [0.3333, 0.5, 1, 1, 1];
  const kolomPigmentasi = [0.3333, 0.5, 1, 1, 1];

  const arrayKolom = [
    kolomHarga,
    kolomMerk,
    kolomShade,
    kolomKetahanan,
    kolomPigmentasi,
  ];

  const jumlahBobot = arrayKolom.map((kolom) => {
    return parseFloat(
      kolom
        .reduce((a, b) => a + b, 0)
        .toFixed(4)
        .replace(/\.?0+$/, "")
    );
  });

  const arrayBaris = [];
  for (let i = 0; i < arrayKolom.length; i++) {
    const baris = [];
    for (let j = 0; j < arrayKolom.length; j++) {
      baris.push(arrayKolom[j][i]);
    }
    arrayBaris.push(baris);
  }

  const normalisasi = arrayBaris.map((baris) => {
    return baris.map((value, index) => {
      return (value / jumlahBobot[index]).toFixed(4);
    });
  });

  const bobotPrioritas = arrayBaris.map((baris) => {
    return (
      baris.reduce(
        (acc, value, index) =>
          acc + value / jumlahBobot[index],
        0
      ) / baris.length
    );
  });

  // console.log("arrayKolom", arrayKolom);
  // console.log("jumlahBobot", jumlahBobot);
  // console.log("arrayBaris", arrayBaris);
  // console.log("normalisasi", normalisasi);
  // console.log("bobotPrioritas", bobotPrioritas);

  const kolomAlternatif1 = [
    1, 1.078, 0.194, 0.178, 0.178, 0.612,
  ];
  const kolomAlternatif2 = [
    0.928, 1, 0.18, 0.165, 0.165, 0.568,
  ];
  const kolomAlternatif3 = [
    5.16, 5.56, 1, 0.92, 0.92, 3.16,
  ];
  const kolomAlternatif4 = [
    5.609, 6.043, 1.087, 1, 1, 3.435,
  ];
  const kolomAlternatif5 = [
    5.609, 6.043, 1.087, 1, 1, 3.435,
  ];
  const kolomAlternatif6 = [
    1.633, 1.759, 0.316, 0.291, 0.291, 1,
  ];

  const arrayKolomAlternatif = [
    kolomAlternatif1,
    kolomAlternatif2,
    kolomAlternatif3,
    kolomAlternatif4,
    kolomAlternatif5,
    kolomAlternatif6,
  ];

  const jumlahBobotAlternatif = arrayKolomAlternatif.map(
    (kolom) => {
      return parseFloat(
        kolom
          .reduce((a, b) => a + b, 0)
          .toFixed(4)
          .replace(/\.?0+$/, "")
      );
    }
  );

  const arrayBarisAlternatif = [];
  for (let i = 0; i < arrayKolomAlternatif.length; i++) {
    const baris = [];
    for (let j = 0; j < arrayKolomAlternatif.length; j++) {
      baris.push(arrayKolomAlternatif[j][i]);
    }
    arrayBarisAlternatif.push(baris);
  }

  const normalisasiAlternatif = arrayBarisAlternatif.map(
    (baris) => {
      return baris.map((value, index) => {
        return (
          value / jumlahBobotAlternatif[index]
        ).toFixed(4);
      });
    }
  );

  const bobotPrioritasAlternatif = arrayBarisAlternatif.map(
    (baris) => {
      return (
        baris.reduce(
          (acc, value, index) =>
            acc + value / jumlahBobotAlternatif[index],
          0
        ) / baris.length
      );
    }
  );

  // console.log("arrayKolomAlternatif", arrayKolomAlternatif);
  // console.log("jumlahBobotAlternatif", jumlahBobotAlternatif);
  // console.log("arrayBarisAlternatif", arrayBarisAlternatif);
  // console.log("normalisasiAlternatif", normalisasiAlternatif);
  // console.log("bobotPrioritasAlternatif", bobotPrioritasAlternatif);

  return (
    <div>
      <h1>AHP TOPSIS</h1>
      <div>
        <h2>Tabel Perbandingan Kriteria</h2>
        <table>
          <thead>
            <tr>
              <th>Kriteria</th>
              <th>Harga</th>
              <th>Merk</th>
              <th>Shade</th>
              <th>Ketahanan</th>
              <th>Pigmentasi</th>
            </tr>
          </thead>
          <tbody>
            {arrayBaris.map((baris, index) => {
              return (
                <tr key={index}>
                  <td>
                    {index === 0
                      ? "Harga"
                      : index === 1
                      ? "Merk"
                      : index === 2
                      ? "Shade"
                      : index === 3
                      ? "Ketahanan"
                      : "Pigmentasi"}
                  </td>
                  {baris.map((value, index) => {
                    return <td key={index}>{value}</td>;
                  })}
                </tr>
              );
            })}
            <tr>
              <td>Jumlah Bobot</td>
              {jumlahBobot.map((value, index) => {
                return <td key={index}>{value}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Normalisasi</h2>
        <table>
          <thead>
            <tr>
              <th>Kriteria</th>
              <th>Harga</th>
              <th>Merk</th>
              <th>Shade</th>
              <th>Ketahanan</th>
              <th>Pigmentasi</th>
            </tr>
          </thead>
          <tbody>
            {arrayBaris.map((baris, index) => {
              return (
                <tr key={index}>
                  <td>
                    {index === 0
                      ? "Harga"
                      : index === 1
                      ? "Merk"
                      : index === 2
                      ? "Shade"
                      : index === 3
                      ? "Ketahanan"
                      : "Pigmentasi"}
                  </td>
                  {baris.map((value, index) => {
                    return (
                      <td key={index}>
                        {(
                          value / jumlahBobot[index]
                        ).toFixed(4)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Bobot Prioritas</h2>
        <table>
          <thead>
            <tr>
              <th>Kriteria</th>
              <th>Harga</th>
              <th>Merk</th>
              <th>Shade</th>
              <th>Ketahanan</th>
              <th>Pigmentasi</th>
              <th>Bobot Prioritas</th>
            </tr>
          </thead>
          <tbody>
            {arrayBaris.map((baris, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  <td>
                    {rowIndex === 0
                      ? "Harga"
                      : rowIndex === 1
                      ? "Merk"
                      : rowIndex === 2
                      ? "Shade"
                      : rowIndex === 3
                      ? "Ketahanan"
                      : "Pigmentasi"}
                  </td>
                  {baris.map((value, colIndex) => {
                    return (
                      <td key={colIndex}>
                        {(
                          value / jumlahBobot[colIndex]
                        ).toFixed(4)}
                      </td>
                    );
                  })}
                  <td>
                    {(
                      baris.reduce(
                        (acc, value, index) =>
                          acc + value / jumlahBobot[index],
                        0
                      ) / baris.length
                    ).toFixed(4)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Tabel Perbandingan Alternatif</h2>
        <table>
          <thead>
            <tr>
              <th>Alternatif</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
            </tr>
          </thead>
          <tbody>
            {arrayBarisAlternatif.map((baris, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {baris.map((value, index) => {
                    return <td key={index}>{value}</td>;
                  })}
                </tr>
              );
            })}
            <tr>
              <td>Jumlah Bobot</td>
              {jumlahBobotAlternatif.map((value, index) => {
                return <td key={index}>{value}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Normalisasi</h2>
        <table>
          <thead>
            <tr>
              <th>Alternatif</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
            </tr>
          </thead>
          <tbody>
            {normalisasiAlternatif.map((baris, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {baris.map((value, index) => {
                    return <td key={index}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Bobot Prioritas</h2>
        <table>
          <thead>
            <tr>
              <th>Alternatif</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>Bobot Prioritas</th>
            </tr>
          </thead>
          <tbody>
            {arrayBarisAlternatif.map((baris, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  <td>{rowIndex + 1}</td>
                  {baris.map((value, colIndex) => {
                    return (
                      <td key={colIndex}>
                        {(
                          value /
                          jumlahBobotAlternatif[colIndex]
                        ).toFixed(4)}
                      </td>
                    );
                  })}
                  <td>
                    {(
                      baris.reduce(
                        (acc, value, index) =>
                          acc +
                          value /
                            jumlahBobotAlternatif[index],
                        0
                      ) / baris.length
                    ).toFixed(4)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

