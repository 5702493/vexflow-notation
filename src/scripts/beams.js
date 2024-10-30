import {
  Accidental,
  Beam,
  Formatter,
  Renderer,
  Stave,
  StaveNote,
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
    new StaveNote({ keys: ['e/4'], duration: '16' }).addModifier(
      new Accidental('b'),
    ),
    new StaveNote({ keys: ['d/4'], duration: '16' }),
    new StaveNote({ keys: ['e/4'], duration: '16' }).addModifier(
      new Accidental('#'),
    ),
    new StaveNote({ keys: ['g/4'], duration: '32' }),
    new StaveNote({ keys: ['a/4'], duration: '32' }),
    new StaveNote({ keys: ['g/4'], duration: '16' }),
    new StaveNote({ keys: ['d/4'], duration: 'q' }),
  ];
  const beams = Beam.generateBeams(notes);
  Formatter.FormatAndDraw(context, stave, notes);
  beams.forEach((b) => {
    b.setContext(context).draw();
  });
}
