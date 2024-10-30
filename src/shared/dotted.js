import { Dot } from 'vexflow';

/** @param {import('vexflow').StaveNote} staveNote */
export function dotted(staveNote) {
  Dot.buildAndAttach([staveNote]);
  return staveNote;
}
