import React from "react";

const AHP = () => {
  // const criteriaHarga = 1
  // const criteriaMerk = 1
  // const criteriaShade = 2
  // const criteriaKetahanan = 3
  // const criteriaCoverage = 4
  // const criteriaJenisKulit = 5

  // const c1 = criteriaHarga
  // const c2 = criteriaMerk
  // const c3 = criteriaShade
  // const c4 = criteriaKetahanan
  // const c5 = criteriaCoverage
  // const c6 = criteriaJenisKulit

  // const tabelPerbandingan = [
  //   [c1/c1, c1/c2, c1/c3, c1/c4, c1/c5, c1/c6],
  //   [c2/c1, c2/c2, c2/c3, c2/c4, c2/c5, c2/c6],
  //   [c3/c1, c3/c2, c3/c3, c3/c4, c3/c5, c3/c6],
  //   [c4/c1, c4/c2, c4/c3, c4/c4, c4/c5, c4/c6],
  //   [c5/c1, c5/c2, c5/c3, c5/c4, c5/c5, c5/c6],
  //   [c6/c1, c6/c2, c6/c3, c6/c4, c6/c5, c6/c6]
  // ]

  const columnHarga =       [1, 0.3333, 2, 1, 0.5, 4];
  const columnMerk =        [3, 1, 3, 3, 2, 3];
  const columnShade =       [0.5, 0.3333, 1, 4, 3, 2];
  const columnKetahanan =   [1, 0.3333, 0.5, 1, 0.5, 1];
  const columnCoverage =    [2, 0.25, 0.3333, 2, 1, 2];
  const columnJenisKulit =  [0.25, 0.3333, 0.5, 1, 0.5, 1];

  const tabelPerbandingan = [
    columnHarga,
    columnMerk,
    columnShade,
    columnKetahanan,
    columnCoverage,
    columnJenisKulit,
  ];

  console.log(tabelPerbandingan);

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

  console.log(bobotPrioritas);

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
    (consistencyIndex / 1.24).toFixed(4)
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
                <th>Coverage</th>
                <th>Jenis Kulit</th>
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
                          "Coverage",
                          "Jenis Kulit",
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
                <th>Coverage</th>
                <th>Jenis Kulit</th>
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
                        "Coverage",
                        "Jenis Kulit",
                      ][index]
                    }
                  </td>
                  {row.map((column, index) => (
                    <td key={index}>{column}</td>
                  ))}
                  <td className="bg-slate-300">
                    {bobotPrioritas[index]}
                  </td>
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
                <th>Coverage</th>
                <th>Jenis Kulit</th>
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
                        "Coverage",
                        "Jenis Kulit",
                      ][index]
                    }
                  </td>
                  {row.map((column, index) => (
                    <td key={index}>{column}</td>
                  ))}
                  <td className="bg-slate-300">
                    {sumConsistency[index]}
                  </td>
                  <td className="bg-slate-300">
                    {consistencyMeasures[index]}
                  </td>
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
          {consistencyRatio < 0.1 && (
            <p className="text-green-500">Konsisten</p>
          )}
          {consistencyRatio >= 0.1 && (
            <p className="text-red-500">Tidak Konsisten</p>
          )}
        </section>
      </div>
    </>
  );
};

export default AHP;
