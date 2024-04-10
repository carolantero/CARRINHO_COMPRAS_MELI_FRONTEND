import React from "react";
import "./ErrorPage.css";

function redirect() {
  time();
  setTimeout(() => {
    window.location.href = "/";
  }, 5000);
}

function time() {
  var time = 5;
  setInterval(() => {
    time--;
    document.getElementById("time").innerHTML = time;
  }, 1000);

  return time;
}

function ErrorPage() {
  return (
    <div className="error-page">
      <h2>Página não encontrada</h2>
      <p>
        Você será redirecionado em <span id="time">5</span> segundos
      </p>
      {redirect()}
    </div>
  );
}

export default ErrorPage;
