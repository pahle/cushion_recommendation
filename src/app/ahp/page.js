import React from "react";

const AHP = () => {
  const columnHarga = [1, 3, 1, 3, 3];
  const columnMerk = [0.3333, 1, 2, 2, 2];
  const columnShade = [1, 0.5, 1, 1, 1];
  const columnKetahanan = [0.3333, 0.5, 1, 1, 1];
  const columnPigmentasi = [0.3333, 0.5, 1, 1, 1];

  const tabelPerbandingan = [
    columnHarga,
    columnMerk,
    columnShade,
    columnKetahanan,
    columnPigmentasi,
  ];

  // console.log(tabelPerbandingan);

  const jumlahBobot = tabelPerbandingan.map((column) => {
    return parseFloat(
      column
        .reduce((a, b) => a + b, 0)
        .toFixed(4)
        .replace(/\.?0+$/, "")
    );
  });

  // console.log(jumlahBobot);

  const normalisasi = tabelPerbandingan.map(
    (column, index) => {
      return column.map((column) => {
        return parseFloat(
          (column / jumlahBobot[index])
            .toFixed(2)
            .replace(/\.?0+$/, "")
        );
      });
    }
  );

  // console.log(normalisasi);

  const reshapeArray = (array) => {
    return array[0].map((_, colIndex) =>
      array.map((row) => row[colIndex])
    );
  };

  const reshapeNormalisasi = reshapeArray(normalisasi);

  // console.log(reshapeNormalisasi);

  const bobotPrioritas = reshapeNormalisasi.map(
    (column, index) => {
      return parseFloat(
        (
          column.reduce((a, b) => a + b, 0) / column.length
        ).toFixed(4)
      );
    }
  );

  // console.log(bobotPrioritas);

  const consistency = tabelPerbandingan.map(
    (column, index) => {
      return column.map((column) => {
        return parseFloat(
          (column * bobotPrioritas[index])
            .toFixed(4)
            .replace(/\.?0+$/, "")
        );
      });
    }
  );

  // console.log(consistency);

  // reshape array

  const reshapeConsistency = reshapeArray(consistency);

  // console.log(reshapeConsistency);

  const sumConsistency = reshapeConsistency.map(
    (column) => {
      return parseFloat(
        column.reduce((a, b) => a + b, 0).toFixed(4)
      );
    }
  );

  // console.log(sumConsistency);

  const consistencyMeasures = sumConsistency.map(
    (column, index) => {
      return parseFloat(
        (column / bobotPrioritas[index]).toFixed(4)
      );
    }
  );

  // console.log(consistencyMeasures);

  const lambdaMax = parseFloat(
    (
      consistencyMeasures.reduce((a, b) => a + b, 0) /
      consistencyMeasures.length
    ).toFixed(4)
  );

  // console.log(lambdaMax);

  const consistencyIndex = parseFloat(
    (
      (lambdaMax - consistencyMeasures.length) /
      (consistencyMeasures.length - 1)
    ).toFixed(4)
  );

  // console.log(consistencyIndex);

  const consistencyRatio = parseFloat(
    (consistencyIndex / 1.12).toFixed(4)
  );

  // console.log(consistencyRatio);

  // CR < 10 % = konsisten

  return (
    <>
      <div className="flex flex-col items-center text-center py-20">
        <h1 className="text-3xl">Perhitungan AHP</h1>
        <section className="mt-12">
          <h2>Tabel Perbandingan</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
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
              {reshapeArray(tabelPerbandingan).map(
                (row, index) => (
                  <tr key={index}>
                    <td>
                      {
                        [
                          "Harga",
                          "Merk",
                          "Shade",
                          "Ketahanan",
                          "Pigmentasi",
                        ][index]
                      }
                    </td>
                    {row.map((column, index) => (
                      <td key={index}>{column}</td>
                    ))}
                  </tr>
                )
              )}
              <tr className="bg-slate-300">
                <td>Jumlah Bobot</td>
                {jumlahBobot.map((bobot, index) => (
                  <td key={index}>{bobot}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mt-12">
          <h2>Normalisasi</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Kriteria</th>
                <th>Harga</th>
                <th>Merk</th>
                <th>Shade</th>
                <th>Ketahanan</th>
                <th>Pigmentasi</th>
                <th className="bg-slate-300">BP</th>
              </tr>
            </thead>
            <tbody>
              {reshapeNormalisasi.map((row, index) => (
                <tr key={index}>
                  <td>
                    {
                      [
                        "Harga",
                        "Merk",
                        "Shade",
                        "Ketahanan",
                        "Pigmentasi",
                      ][index]
                    }
                  </td>
                  {row.map((column, index) => (
                    <td key={index}>{column}</td>
                  ))}
                  <td className="bg-slate-300">{bobotPrioritas[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="mt-12">
          <h2>Consistency</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Kriteria</th>
                <th>Harga</th>
                <th>Merk</th>
                <th>Shade</th>
                <th>Ketahanan</th>
                <th>Pigmentasi</th>
                <th className="bg-slate-300">SUM</th>
                <th className="bg-slate-300">CM</th>
              </tr>
            </thead>
            <tbody>
              {reshapeConsistency.map((row, index) => (
                <tr key={index}>
                  <td>
                    {
                      [
                        "Harga",
                        "Merk",
                        "Shade",
                        "Ketahanan",
                        "Pigmentasi",
                      ][index]
                    }
                  </td>
                  {row.map((column, index) => (
                    <td key={index}>{column}</td>
                  ))}
                  <td className="bg-slate-300">{sumConsistency[index]}</td>
                  <td className="bg-slate-300">{consistencyMeasures[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="mt-12">
          <h2>Hasil</h2>
          <p>λ max = {lambdaMax}</p>
          <p>CI = {consistencyIndex}</p>
          <p>CR = {consistencyRatio}</p>
        </section>
      </div>
    </>
  );
};

export default AHP;
