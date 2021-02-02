import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./journal.js";


$("form#journal-entries").submit(function(event) {
  event.preventDefault();
  const newEntry = $("#diary-entry").val();
  const userEntry = new Entry(newEntry);
  const userOutput = userEntry.wordCount(newEntry);
  const numVowels = userEntry.vowelCount(newEntry);
  const numCons = userEntry.consonantCount(newEntry);
  const firstSentence = userEntry.getTeaser(newEntry);
  $("#output").show();
  $("#wordOutput").text(userOutput);
  $("#vowelOutput").text(numVowels);
  $("#consonantOutput").text(numCons);
  $("#sentenceOutput").text(firstSentence);
});