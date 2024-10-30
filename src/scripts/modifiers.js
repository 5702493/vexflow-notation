import {
  Accidental,
  Dot,
  Formatter,
  Renderer,
  Stave,
  StaveNote,
} from 'vexflow';

const div = document.getElementById('output');
if (div instanceof HTMLDivElement) {
  const renderer = new Renderer(div, Renderer.Backends.SVG);
  renderer.resize(500, 250);
  const context = renderer.getContext();
  const stave = new Stave(10, 40, 400);
  stave.addClef('treble').addTimeSignature('4/4');
  stave.setContext(context).draw();

  /**
   * @param {StaveNote} staveNote
   * @param {number} noteIndex
   */
  function dotted(staveNote, noteIndex = -1) {
    if (noteIndex < 0) {
      Dot.buildAndAttach([staveNote], { all: true });
    } else {
      Dot.buildAndAttach([staveNote], { index: noteIndex });
    }
    return staveNote;
  }

  const notes = [
    dotted(
      new StaveNote({ keys: ['e##/5'], duration: '8d' }).addModifier(
        new Accidental('##'),
      ),
    ),
    new StaveNote({ keys: ['eb/5'], duration: '16' }).addModifier(
      new Accidental('b'),
    ),
    dotted(new StaveNote({ keys: ['eb/4', 'd/5'], duration: 'h' }), 0),
    dotted(
      new StaveNote({ keys: ['c/5', 'eb/5', 'g#/5'], duration: 'q' })
        .addModifier(new Accidental('b'), 1)
        .addModifier(new Accidental('#'), 2),
    ),
  ];
  Formatter.FormatAndDraw(context, stave, notes);
}
