import React from "react";

const Topsis = () => {
  // ID Nama Lipstik Harga Merk Shade Ketahanan Pigmentasi
  // 1 Allglows Shake Lip Pigment 5 1 3 5 5
  // 2 By Lizzy Parra Lip Cotton 5 5 3 3 5
  // 3 Hanasui Boba Edition 1 5 5 3 5
  // 4 Implora Lip Velvet 3 5 3 3 1
  // 5 Oh My Glam 3 5 3 5 5
  // 6 Y.O.U Rouge Powder Matte 5 5 3 1 1

  const columnNama = [
    "Allglows Shake Lip Pigment",
    "By Lizzy Parra Lip Cotton",
    "Hanasui Boba Edition",
    "Implora Lip Velvet",
    "Oh My Glam",
    "Y.O.U Rouge Powder Matte",
  ];

//   ubah

  const columnHarga =       [5, 5, 1, 3, 3, 5];
  const columnMerk =        [1, 5, 5, 5, 5, 5];
  const columnShade =       [3, 3, 5, 3, 3, 3];
  const columnKetahanan =   [5, 3, 3, 3, 5, 1];
  const columnPigmentasi =  [5, 5, 5, 1, 5, 1];

  const tabelData = [
    columnHarga,
    columnMerk,
    columnShade,
    columnKetahanan,
    columnPigmentasi,
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

  const bobotPrioritas = [0.108, 0.156, 0.22, 0.256, 0.256];

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

  console.log("Ranking:",ranking);

  return (
    <>
      <div className="flex flex-col items-center text-center py-20">
        <h1 className="text-3xl">Perhitungan Topsis</h1>
      </div>
    </>
  );
};

export default Topsis;
