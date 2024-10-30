import {
  Accidental,
  Beam,
  Formatter,
  Renderer,
  Stave,
  StaveNote,
  StaveTie,
} from 'vexflow';
import { dotted } from '../shared/dotted';

const div = document.getElementById('output');
if (div instanceof HTMLDivElement) {
  const renderer = new Renderer(div, Renderer.Backends.SVG);
  renderer.resize(500, 250);
  const context = renderer.getContext();
  const stave = new Stave(10, 40, 400);
  stave.addClef('treble').addTimeSignature('4/4');
  stave.setContext(context).draw();

  const notes = [
    dotted(
      new StaveNote({ keys: ['e##/5'], duration: '8d' }).addModifier(
        new Accidental('##'),
      ),
    ),
    new StaveNote({ keys: ['b/4'], duration: '16' }).addModifier(
      new Accidental('b'),
    ),
    new StaveNote({ keys: ['c/4'], duration: '8' }),
    new StaveNote({ keys: ['d/4'], duration: '16' }),
    new StaveNote({ keys: ['d/4'], duration: '16' }),
    new StaveNote({ keys: ['d/4'], duration: 'q' }),
    new StaveNote({ keys: ['d/4'], duration: 'q' }),
  ];
  const beams = Beam.generateBeams(notes);
  Formatter.FormatAndDraw(context, stave, notes);
  beams.forEach(function (b) {
    b.setContext(context).draw();
  });
  const ties = [
    new StaveTie({
      first_note: notes[4],
      last_note: notes[5],
      first_indices: [0],
      last_indices: [0],
    }),
    new StaveTie({
      first_note: notes[5],
      last_note: notes[6],
      first_indices: [0],
      last_indices: [0],
    }),
  ];
  ties.forEach((t) => {
    t.setContext(context).draw();
  });
}
