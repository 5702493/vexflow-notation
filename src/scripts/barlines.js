import { Beam, Formatter, Renderer, Stave, StaveNote } from 'vexflow';

const div = document.getElementById('output');
if (div instanceof HTMLDivElement) {
  const renderer = new Renderer(div, Renderer.Backends.SVG);
  renderer.resize(720, 130);
  const context = renderer.getContext();
  const staveMeasure1 = new Stave(10, 0, 300);
  staveMeasure1.addClef('treble').setContext(context).draw();
  const notesMeasure1 = [
    new StaveNote({ keys: ['c/4'], duration: 'q' }),
    new StaveNote({ keys: ['d/4'], duration: 'q' }),
    new StaveNote({ keys: ['b/4'], duration: 'qr' }),
    new StaveNote({ keys: ['c/4', 'e/4', 'g/4'], duration: 'q' }),
  ];
  Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);
  const staveMeasure2 = new Stave(
    staveMeasure1.getWidth() + staveMeasure1.getX(),
    0,
    400,
  );
  const notesMeasure2_part1 = [
    new StaveNote({ keys: ['c/4'], duration: '8' }),
    new StaveNote({ keys: ['d/4'], duration: '8' }),
    new StaveNote({ keys: ['b/4'], duration: '8' }),
    new StaveNote({ keys: ['c/4', 'e/4', 'g/4'], duration: '8' }),
  ];
  const notesMeasure2_part2 = [
    new StaveNote({ keys: ['c/4'], duration: '8' }),
    new StaveNote({ keys: ['d/4'], duration: '8' }),
    new StaveNote({ keys: ['b/4'], duration: '8' }),
    new StaveNote({ keys: ['c/4', 'e/4', 'g/4'], duration: '8' }),
  ];
  const beam1 = new Beam(notesMeasure2_part1);
  const beam2 = new Beam(notesMeasure2_part2);
  const notesMeasure2 = notesMeasure2_part1.concat(notesMeasure2_part2);
  staveMeasure2.setContext(context).draw();
  Formatter.FormatAndDraw(context, staveMeasure2, notesMeasure2);
  beam1.setContext(context).draw();
  beam2.setContext(context).draw();
}
