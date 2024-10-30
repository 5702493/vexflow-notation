import { Formatter, Renderer, Stave, StaveNote, Voice } from 'vexflow';

const div = document.getElementById('output');
if (div instanceof HTMLDivElement) {
  const renderer = new Renderer(div, Renderer.Backends.SVG);
  renderer.resize(500, 250);
  const context = renderer.getContext();
  const stave = new Stave(10, 40, 400);
  stave.addClef('treble').addTimeSignature('4/4');
  stave.setContext(context).draw();

  const notes = [
    new StaveNote({ keys: ['c/5'], duration: 'q' }),
    new StaveNote({ keys: ['d/4'], duration: 'q' }),
    new StaveNote({ keys: ['b/4'], duration: 'qr' }),
    new StaveNote({ keys: ['c/4', 'e/4', 'g/4'], duration: 'q' }),
  ];
  const notes2 = [new StaveNote({ keys: ['c/4'], duration: 'w' })];
  const voices = [
    new Voice({ num_beats: 4, beat_value: 4 }).addTickables(notes),
    new Voice({ num_beats: 4, beat_value: 4 }).addTickables(notes2),
  ];
  new Formatter().joinVoices(voices).format(voices, 400);
  voices.forEach(function (v) {
    v.draw(context, stave);
  });
}
