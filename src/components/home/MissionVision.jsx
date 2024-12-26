import React from "react";

export const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#654321] mb-12">
          Misión y Visión
        </h2>
        <div className="grid gap-8">
          {/* Misión */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md border-t-4 border-t-[#654321]">
            <div className="md:w-1/2 md:pr-4">
              <h3 className="text-3xl font-bold text-[#654321] mb-4">Misión</h3>
              <p className="text-gray-600 text-2xl">
                La Unidad Educativa Fiscomisional Franciscana “Fray Cristóbal
                Zambrano” será reconocida en el ámbito local, regional y
                nacional como una Institución competente y modelo al servicio de
                la sociedad, que brinde una educación de calidad basada en
                principios y valores humanos, cristianos y franciscanos;
                formando personas con liderazgo, capaces de convivir en armonía
                con la naturaleza y en enfrentar los retos del avance de la
                ciencia y tecnología en la formación integral de estudiantes
                competentes y comprometidos con la transformación de la
                sociedad.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-4">
              <img
                src="/images/SAN_FRANCISCO.png"
                alt=""
                className="m-auto py-4 h-96 w-96 object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Visión */}
          <div className="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-lg shadow-md border-t-4 border-t-[#D2B48C]">
            <div className="md:w-1/2 md:pl-4">
              <h3 className="text-3xl font-bold text-[#D2B48C] mb-4">Visión</h3>
              <p className="text-gray-600 text-2xl">
                Ofrecer una educación integral de calidad e innovadora,
                promoviendo la superación personal con conciencia ambiental, la
                práctica de valores democráticos y el mejoramiento en la
                convivencia social, desde la Palabra de Dios a la luz de la
                Espiritualidad Franciscana, con programas de perfeccionamiento
                en las competencias de directivos y docentes de tal forma que en
                cinco años se haya logrado una institución educativa con cultura
                de mejoramiento continuo con metas claras al formar seres
                humanos emprendedores, íntegros, críticos, estables capaces de
                convivir armónicamente con los demás y la naturaleza.
              </p>
            </div>
            <div className="md:w-1/2 md:pr-4">
              <img
                src="/images/mision.jpeg"
                alt=""
                className="m-auto py-4 h-96 w-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
