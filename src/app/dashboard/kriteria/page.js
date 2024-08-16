import React from "react";
import { dataKriteria } from "@/utils/getQueryOutputs";

const Kriteria = async () => {
  const kriteria = await dataKriteria();

  const reshapeArray = (array) => {
    return array[0].map((_, colIndex) =>
      array.map((row) => row[colIndex])
    );
  };

  const unreshapedTabelPerbandingan = [
    [
      1,
      kriteria.HM,
      kriteria.HS,
      kriteria.HK,
      kriteria.HC,
      kriteria.HJ,
    ],
    [
      1 / kriteria.HM,
      1,
      kriteria.MS,
      kriteria.MK,
      kriteria.MC,
      kriteria.MJ,
    ],
    [
      1 / kriteria.HS,
      1 / kriteria.MS,
      1,
      kriteria.SK,
      kriteria.SC,
      kriteria.SJ,
    ],
    [
      1 / kriteria.HK,
      1 / kriteria.MK,
      1 / kriteria.SK,
      1,
      kriteria.KC,
      kriteria.KJ,
    ],
    [
      1 / kriteria.HC,
      1 / kriteria.MC,
      1 / kriteria.SC,
      1 / kriteria.KC,
      1,
      kriteria.CJ,
    ],
    [
      1 / kriteria.HJ,
      1 / kriteria.MJ,
      1 / kriteria.SJ,
      1 / kriteria.KJ,
      1 / kriteria.CJ,
      1,
    ],
  ];

  const tabelPerbandingan = reshapeArray(unreshapedTabelPerbandingan);

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
            {tabelPerbandingan.map((row, index) => (
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
            ))}
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
  );
};

export default Kriteria;
