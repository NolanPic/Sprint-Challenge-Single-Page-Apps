import React from "react";

export default function CharacterCard({ character }) {
  const { name } = character;
return <span>{name}</span>;
}
