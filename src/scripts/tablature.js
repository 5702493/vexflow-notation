import { Bend, Formatter, Renderer, TabNote, TabStave, Vibrato } from 'vexflow';

const div = document.getElementById('output');
if (div instanceof HTMLDivElement) {
  const renderer = new Renderer(div, Renderer.Backends.SVG);
  renderer.resize(500, 250);
  const context = renderer.getContext();
  const stave = new TabStave(10, 40, 400);
  stave.addClef('tab').setContext(context).draw();

  const notes = [
    new TabNote({ positions: [{ str: 3, fret: 7 }], duration: 'q' }),
    new TabNote({
      positions: [
        { str: 2, fret: 10 },
        { str: 3, fret: 9 },
      ],
      duration: 'q',
    }).addModifier(new Bend('Full'), 1),
    new TabNote({
      positions: [{ str: 2, fret: 5 }],
      duration: 'h',
    }).addModifier(new Vibrato().setHarsh(true).setVibratoWidth(70), 0),
  ];
  Formatter.FormatAndDraw(context, stave, notes);
}
