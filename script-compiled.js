"use strict";

function dodaj() {
  var broj = Math.random();
  document.getElementById("rezultati").innerHTML += template({
    doesWhat: broj
  });
}

function dodaj2() {
  document.getElementById("rezultati").innerHTML += Handlebars.templates.example({
    naslov: "najbolja vijest ikada",
    podnaslov: "ovu udarnu vijest možete pročitati samo kod nas",
    sadrzaj: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptatem minus alias veniam saepe quis incidunt obcaecati, atque eveniet nobis pariatur voluptates officiis dolore maxime labore assumenda a corporis sit."
  });
}

function dodaj3() {
  document.getElementById("rezultati").innerHTML += Handlebars.templates.komentar({
    autor: "Šime Šimić"
  });
}

function probavamoBabel() {
  var _console;

  var polje = [3, 4, [5, 6]];

  (_console = console).log.apply(_console, polje);
}
