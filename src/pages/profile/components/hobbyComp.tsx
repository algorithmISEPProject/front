import React from "react";

export default function HobbyComp({ hobby }: { hobby: string }) {
  return <div className="bg-hobbies px-3 py-1 rounded-lg ">{hobby}</div>;
}
