import { invertColor } from './../helpers.js';

export const LegoDetail = (brick) => {
  const hasNotes = () => {
    const legoNotes = brick.Notes;
    if (legoNotes) {
    return legoNotes
    } else {
    return "";
}}

  let block = `<section class="block-wrapper" style="background-color:#${brick.ColorHex}">
              <h3>Name: ${brick.LegoName}</h3>
              <div class="block-years">Manufactured ${brick.YearFrom} - ${brick.YearTo}</div>
              <div class="block-notes" >Notes: ${hasNotes()}</div>
              </section>
              `;

  const link = brick.ColorstreamLinkImage;
    if (link) {
      //true? wrap the block in an a tag
      return `
        <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
          ${block}
        </a>`;
    } else {
      //false? return the block
      return block;
}}

// export const sortByMaterial = (brick) => {

//   let sortBrick = `<option value="${brick.Material}">${brick.Material}</option>
//   `

//   return sortBrick;

// }