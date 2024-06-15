import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Bio.css";

const CustomAccordion = styled(Accordion)({
  backgroundColor: "black", // Color del texto de los detalles
});

const CustomAccordionSummary = styled(AccordionSummary)({
  color: "gold", // Color del resumen del acordeón
});

const CustomAccordionDetails = styled(AccordionDetails)({
  color: "goldenrod", // Color del texto de los detalles
});

export default function Bio() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="container">
      <CustomAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          marginBottom: 3,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Quién soy?</h3>
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography className="justify">
            <p>
              Soy un profesional comprometido en asistir y acompañar a las
              personas, empresas y organizaciones a que vivan una vida inspirada
              y con propósito.
            </p>
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          marginBottom: 3,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <h3>Mi historia:</h3>
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography className="justify">
            <p>
              Durante 36 años, fui violinista en la Orquesta del Teatro
              Argentino de La Plata, Buenos Aires, Argentina. Desde una edad
              temprana, comprendí el valor de la disciplina, enfrenté desafíos y
              frustraciones, y competí por alcanzar mis sueños. Al descubrir el
              coaching y la Programación Neurolingüística (PNL), entendí cómo
              mis interpretaciones de la realidad, mis patrones mentales y mis
              emociones condicionaban mis resultados, relaciones y mi vida en
              general. Al identificar y modificar estas limitaciones, descubrí
              nuevas oportunidades y posibilidades para alcanzar mis objetivos.
              Implementando estas herramientas tanto en mi vida personal como en
              la de mis alumnos de violín, y en la asistencia a personas en sus
              vidas personales y profesionales, confirmé que el cambio es
              posible. Hoy, me dedico a acompañar a personas, empresas y
              organizaciones en el logro de sus objetivos, mientras disfrutan
              del proceso de caminar hacia el éxito.
            </p>
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          marginBottom: 3,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>
            <h3>Frases que me identifican:</h3>
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography className="justify">
            <p>
              Cuida tus pensamientos, porque se convertirán en tus palabras.
              Cuida tus palabras, porque se convertirán en tus actos. Cuida tus
              actos, porque se convertirán en tus hábitos. Cuida tus hábitos,
              porque se convertirán en tu destino. - Gandhi.
            </p>
            <p>
              Comienza haciendo lo necesario, luego lo posible, y terminarás
              haciendo lo imposible. - San Francisco de Asís.
            </p>
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          marginBottom: 3,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>
            <h3>Mi misión:</h3>
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography className="justify">
            <p>
              Facilitar procesos de transformaciones profundas y duraderas a
              personas, empresas y organizaciones de todo el mundo para
              maximizar su potencial, lograr resultados extraordinarios y vivir
              vidas plenas y significativas. Enseñar principios universales y
              estrategias efectivas, cultivar el liderazgo, la integridad y la
              excelencia personal y profesional para que puedan alcanzar sus
              metas y sueños.
            </p>
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{
          marginBottom: 3,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>
            <h3>Mi Visión:</h3>
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography className="justify">
            <p>
              "Crear una comunidad global de individuos y organizaciones que
              operen con confianza, integridad y eficacia. Aspiro a ser
              reconocido como un líder internacional en el desarrollo personal,
              organizacional y empresarial, transformando vidas e inspirando a
              millones a vivir vidas auténticas, plenas y extraordinarias,
              liderando un movimiento de cambio positivo que permita a las
              personas alcanzar sus sueños y mejorar el mundo que nos rodea.
              Visualizo habitar un mundo más consciente, compasivo y exitoso, en
              donde cada persona tenga las herramientas para cambiar su vida,
              inspirar a otros a hacer lo mismo y generar un impacto positivo y
              duradero en la sociedad."
            </p>
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        sx={{
          marginBottom: 3,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography>
            <h3>Formación académica:</h3>
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography className="justify">
            <ul>
              <li>
                ELAC - Escuela Latinoamericana de Coaching Coach Ontológico
                Profesional (aval internacional FICOP - AACOP)
              </li>
              <br />

              <li>
                INSTITUTO ELBA SELDES: Master Trainer en PNL (Programación
                Neurolingüística) (aval internacional IANLP)
              </li>
              <br />
              <li>
                CENTRO ARGENTINO DE HIPNOSIS: Master Hipnótico (Hipnoterapeuta)
                con especialidad clínica
              </li>
              <br />

              <li>UCA - Universidad Católica Argentina: Neuropsicoeducador </li>
              <br />
            </ul>
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        sx={{
          marginBottom: 3,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography>
            <h3>Beneficios de un proceso de coaching y PNL</h3>
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
            <ul style={{ listStyleType: "none" }}>
              <li>
                Convertirse en un observador más consciente de uno mismo y del
                entorno.
              </li>
              <br />
              <li>
                Definir el tipo de vida y carrera que deseas, y tomar las
                acciones necesarias para alcanzarla.
              </li>
              <br />
              <li>
                Transformar conductas reactivas, asumiendo el control de tu
                futuro.
              </li>
              <br />
              <li>
                Diseñar conversaciones que abran nuevas oportunidades y
                concreten posibilidades.
              </li>
              <br />
              <li>
                Planificar acciones efectivas que generen resultados antes
                inalcanzables.
              </li>
              <br />
              <li>
                Coordinar estrategias para lograr resultados extraordinarios.
              </li>
              <br />
              <li>Superar problemas actuales y diseñar un futuro deseado.</li>
              <br />
              <li>
                Crear un modelo de transformación profunda en la cultura
                organizacional.
              </li>
              <br />
              <li>
                Promover entornos de confianza para equipos de alto rendimiento.
              </li>
              <br />
              <li>
                Identificar emociones que abren posibilidades y aprender a
                gestionarlas eficazmente para alcanzar tus metas.
              </li>
              <br />
            </ul>
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
    </div>
  );
}
