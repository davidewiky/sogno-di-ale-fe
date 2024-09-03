import { Typography } from "@mui/material";
import React from "react";
import { GenderLabel } from "~/app/board/documents/components/summary/gender-label";
import { calculatePatientAge } from "~/app/board/utils/age-calculator";
import type { Patient } from "~/types/document";

interface PatientInfoProps {
  patient: Patient;
}

export function PatientInfo({
  patient: { name, surname, birthDate, deceaseDate, address, gender },
}: PatientInfoProps) {
  return (
    <div>
      <div>
        <GenderLabel gender={gender} />
        <Typography component="span" ml={1} variant="h6">
          {name} {surname}
        </Typography>
        {birthDate ? (
          <Typography component="span" ml={2}>
            {birthDate} ({calculatePatientAge(birthDate, deceaseDate)})
          </Typography>
        ) : null}
      </div>
      <Typography mt={1}>{address}</Typography>
    </div>
  );
}
