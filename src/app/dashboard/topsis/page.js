import React from "react";

const Topsis = () => {
  // ID Nama Lipstik Harga Merk Shade Ketahanan Pigmentasi
  // 1 Allglows Shake Lip Pigment 5 1 3 5 5
  // 2 By Lizzy Parra Lip Cotton 5 5 3 3 5
  // 3 Hanasui Boba Edition 1 5 5 3 5
  // 4 Implora Lip Velvet 3 5 3 3 1
  // 5 Oh My Glam 3 5 3 5 5
  // 6 Y.O.U Rouge Powder Matte 5 5 3 1 1

  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const namaCushion = [
  "Skintific Cover All Perfect Cushion",
  "Somethinc Hooman Breathable UV Cushion Cover",
  "Instaperfect Skincove Air Cushion",
  "Salsa Cover Me BB Cushion",
  "Wardah Colorfit",
  "Barenbliss True Beauty Inside Cushion",
  "The Originote High Cover Serum Cushion",
  "True to Skin Skinlike Porefecting Cushion",
  "Goute Goucushion",
  "ESQA Flawless Cushion Serum"
];
const harga = [
  "167.000",
  "189.000",
  "129.000",
  "62.000",
  "80.000",
  "109.000",
  "90.000",
  "77.000",
  "60.000",
  "148.000"
];
const merk = [
  "Terkenal",
  "Terkenal",
  "Terkenal",
  "Kurang terkenal",
  "Terkenal",
  "Terkenal",
  "Cukup terkenal",
  "Cukup terkenal",
  "Kurang terkenal",
  "Terkenal"
];
const shade = [7, 16, 6, 6, 8, 8, 12, 6, 3, 10];
const ketahanan = [
  "12 jam",
  "8 jam",
  "8 jam",
  "4 jam",
  "6 jam",
  "8 jam",
  "7 jam",
  "4 jam",
  "12 jam",
  "3 jam"
];
const coverage = [
  "Cukup satu kali pengaplikasian",
  "Cukup satu kali pengaplikasian",
  "Cukup satu kali pengaplikasian",
  "Cukup satu kali pengaplikasian",
  "Cukup satu kali pengaplikasian",
  "Cukup satu kali pengaplikasian",
  "Cukup satu kali pengaplikasian",
  "Perlu beberapa kali pengaplikasian",
  "Cukup satu kali pengaplikasian",
  "Cukup satu kali pengaplikasian"
];
const jenisKulit = [
  "Semua jenis kulit",
  "Oily, kombinasi",
  "Semua jenis kulit",
  "Dry, kombinasi",
  "Semua jenis kulit",
  "Semua jenis kulit",
  "Semua jenis kulit",
  "Semua jenis kulit",
  "Semua jenis kulit",
  "Dry"
];

const tabelDataAwal = [
  harga,
  merk,
  shade,
  ketahanan,
  coverage,
  jenisKulit
];

  const columnNama = [
    "Skintific Cover All Perfect Cushion",
    "Somethinc Hooman Breathable UV Cushion Cover",
    "Instaperfect Skincover Air Cushion",
    "Salsa Cover Me BB Cushion",
    "Wardah Colorfit",
    "Barenbliss True Beauty Inside Cushion",
    "The Originote High Cover Serum Cushion",
    "True to Skin Skinlike Porefecting Cushion",
    "Goute Goucushion",
    "ESQA Flawless Cushion Serum",
  ];

  //   ubah

  const columnHarga = [5, 5, 3, 1, 1, 3, 1, 1, 1, 3];
  const columnMerk = [5, 5, 5, 3, 5, 5, 3, 3, 1, 5];
  const columnShade = [1, 5, 1, 1, 3, 3, 5, 1, 1, 5];
  const columnKetahanan = [5, 3, 3, 1, 3, 3, 3, 1, 5, 1];
  const columnCoverage = [5, 5, 5, 5, 5, 5, 5, 3, 5, 5];
  const columnJenisKulit = [5, 3, 5, 3, 5, 5, 5, 5, 5, 1];

  const tabelData = [
    columnHarga,
    columnMerk,
    columnShade,
    columnKetahanan,
    columnCoverage,
    columnJenisKulit,
  ];

  console.log("Tabel Data:", tabelData);

  const denominator = tabelData.map((column) => {
    return parseFloat(
      Math.sqrt(
        column.reduce((a, b) => a + b ** 2, 0)
      ).toFixed(4)
    );
  });

  console.log("Denominator:", denominator);

  const normalisasi = tabelData.map((column, index) => {
    return column.map((column) => {
      return parseFloat(
        (column / denominator[index])
          .toFixed(2)
          .replace(/\.?0+$/, "")
      );
    });
  });

  console.log("Normalisasi:", normalisasi);

  const bobotPrioritas = [
    8.8333, 15, 10.8333, 4.3333, 7.5833, 3.5833,
  ];

  const normalisasiBobot = normalisasi.map(
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

  console.log("Normalisasi Bobot:", normalisasiBobot);

  const idealPositif = normalisasiBobot.map((column) => {
    return Math.max(...column);
  });

  console.log("Ideal Positif:", idealPositif);

  const idealNegatif = normalisasiBobot.map((column) => {
    return Math.min(...column);
  });

  console.log("Ideal Negatif:", idealNegatif);

  const reshapeArray = (array) => {
    return array[0].map((_, colIndex) =>
      array.map((row) => row[colIndex])
    );
  };

  const reshapeNormalisasiBobot = reshapeArray(
    normalisasiBobot
  );

  console.log(
    "Reshape Normalisasi Bobot:",
    reshapeNormalisasiBobot
  );

  //   count the distance per row not column

  //   const distancePositif = reshapeNormalisasiBobot.map(
  //     (column) => column.map((column,index) => {
  //         return (column - idealPositif[index]) ** 2;
  //     })
  //   );

  const distancePositif = reshapeNormalisasiBobot.map(
    (row) => {
      return Math.sqrt(
        row
          .map(
            (value, index) =>
              (value - idealPositif[index]) ** 2
          )
          .reduce((sum, val) => sum + val, 0)
      );
    }
  );

  console.log("Distance Positif:", distancePositif);

  const distanceNegatif = reshapeNormalisasiBobot.map(
    (row) => {
      return Math.sqrt(
        row
          .map(
            (value, index) =>
              (value - idealNegatif[index]) ** 2
          )
          .reduce((sum, val) => sum + val, 0)
      );
    }
  );

  console.log("Distance Negatif:", distanceNegatif);

  const performanceScore = distanceNegatif.map(
    (column, index) => {
      return parseFloat(
        (column / (column + distancePositif[index]))
          .toFixed(4)
          .replace(/\.?0+$/, "")
      );
    }
  );

  console.log("Performance Score:", performanceScore);

  const ranking = performanceScore
    .map((value, index) => {
      return {
        nama: columnNama[index],
        score: value,
      };
    })
    .sort((a, b) => b.score - a.score);

  console.log("Ranking:", ranking);

  return (
    <>
      <div className="flex flex-col items-center text-center py-20">
        <h1 className="text-3xl">Perhitungan Topsis</h1>
        <section className="mt-12">
          <h2>Tabel Data Awal</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Merk</th>
                <th>Shade</th>
                <th>Ketahanan</th>
                <th>Coverage</th>
                <th>Jenis Kulit</th>
              </tr>
            </thead>
            <tbody>
              {columnNama.map((value, index) => (
                <tr key={index}>
                  <td>{value}</td>
                  <td>{harga[index]}</td>
                  <td>{merk[index]}</td>
                  <td>{shade[index]}</td>
                  <td>{ketahanan[index]}</td>
                  <td>{coverage[index]}</td>
                  <td>{jenisKulit[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="mt-12">
          <h2>Tabel Alternatif</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Merk</th>
                <th>Shade</th>
                <th>Ketahanan</th>
                <th>Coverage</th>
                <th>Jenis Kulit</th>
              </tr>
            </thead>
            <tbody>
              {columnNama.map((value, index) => (
                <tr key={index}>
                  <td>{value}</td>
                  <td>{columnHarga[index]}</td>
                  <td>{columnMerk[index]}</td>
                  <td>{columnShade[index]}</td>
                  <td>{columnKetahanan[index]}</td>
                  <td>{columnCoverage[index]}</td>
                  <td>{columnJenisKulit[index]}</td>
                </tr>
              ))}
              <tr className="bg-slate-300">
                <td>Denominator</td>
                {denominator.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mt-12">
          <h2>Normalisasi</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr className="bg-slate-300">
                <th >Bobot</th>
                {bobotPrioritas.map((value, index) => (
                  <th key={index}>{value}</th>
                ))}
              </tr>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Merk</th>
                <th>Shade</th>
                <th>Ketahanan</th>
                <th>Coverage</th>
                <th>Jenis Kulit</th>
              </tr>
            </thead>
            <tbody>
              {reshapeArray(normalisasi).map(
                (row, index) => (
                  <tr key={index}>
                    <td>{columnNama[index]}</td>
                    {row.map((column, index) => (
                      <td key={index}>{column}</td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </section>
        <section className="mt-12">
          <h2>Normalisasi Bobot</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Merk</th>
                <th>Shade</th>
                <th>Ketahanan</th>
                <th>Coverage</th>
                <th>Jenis Kulit</th>
              </tr>
            </thead>
            <tbody>
              {reshapeArray(normalisasiBobot).map(
                (row, index) => (
                  <tr key={index}>
                    <td>{columnNama[index]}</td>
                    {row.map((column, index) => (
                      <td key={index}>{column}</td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </section>
        <section className="mt-12">
          <h2>Ideal Positif</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Kriteria</th>
                {idealPositif.map((value, index) => (
                  <th key={index}>{value}</th>
                ))}
              </tr>
            </thead>
          </table>
        </section>
        <section className="mt-12">
          <h2>Ideal Negatif</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Kriteria</th>
                {idealNegatif.map((value, index) => (
                  <th key={index}>{value}</th>
                ))}
              </tr>
            </thead>
          </table>
        </section>
        <section className="mt-12">
          <h2>Distance Positif</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((value, index) => (
                <tr key={index}>
                  <td>{value.nama}</td>
                  <td>{distancePositif[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="mt-12">
          <h2>Distance Negatif</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((value, index) => (
                <tr key={index}>
                  <td>{value.nama}</td>
                  <td>{distanceNegatif[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
         
        <section className="mt-12">
          <h2>Ranking</h2>
          <table className="[&>*>*>*]:border-2 [&>*>*>*]:p-4">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.nama}</td>
                  <td>{value.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Topsis;
