/* Function to spin Pluto. */
function spinPluto(){
  if(pluto.style.transform == "" || pluto.style.transform == "rotateZ(-360deg)"){
    for(let i = 0; i < 361; i++){
      setTimeout(function timer(){
        pluto.style.transform = "rotateZ(" + i + "deg)";
      }, i*4);
    }
  }
  else if(pluto.style.transform == "rotateZ(360deg)"){
    pluto.style.transform = "rotateZ(" + 0 + "deg)";

    for(let i = 0; i > -361; i--){
      setTimeout(function timer(){
        pluto.style.transform = "rotateZ(" + i + "deg)";
      }, (i*-1)*4);
    }
  }
}

function printIP(){
  $.get("https://aaronhorler.com/ip.php", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}

/* Function to encrypt the contents of the contact form textarea using OpenPGP. */
function encryptMessage(){
  if(window.crypto.getRandomValues){
    if(document.getElementById("message").value != ""){

      /* My current OpenPGP public key. */
      const publicKeyString = "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
        "\n" +
        "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\n" +
        "tr8G9hEM63YfdpY=\n" +
        "=szEj\n" +
        "-----END PGP PUBLIC KEY BLOCK-----";

      /* Encrypt and replace the contents of the textarea. */
      var options = {
        data: document.getElementById("message").value,
        publicKeys: openpgp.key.readArmored(publicKeyString).keys
      };

      openpgp.encrypt(options).then(function(ciphertext){
        document.getElementById("message").value = ciphertext.data;
      });

      /* Disable encrypt button after first use. */
      $("#btnEncrypt").attr("disabled", true);
      document.getElementById("message").disabled = true;
      document.getElementById("btnEncrypt").title = "You may only encrypt once.";
      document.getElementById("btnEncrypt").removeEventListener("click", encryptMessage);
    }
  }
  else{
    window.alert("This browser does not support basic cryptography!");
  }
}

/* Function to load Disqus comments on user prompt. */
function loadDisqus(){
  var script = document.createElement("script");
  script.src = "../js/disqus.min.js";
  document.getElementById("content").appendChild(script);

  document.getElementById("disqus_load").removeEventListener("click", loadDisqus);
}

/* Function to load deferred styles. */
function loadDeferredStyles(){
  var addStylesNode = document.getElementById("deferred-styles");
  var replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.textContent;
  document.body.appendChild(replacement)
  addStylesNode.parentElement.removeChild(addStylesNode);
};

/* Event handling for the index page. */
if(document.getElementById("profile") !== null){
  var pluto = document.getElementById("profile");

  pluto.addEventListener("click", spinPluto);
  document.addEventListener('DOMContentLoaded', spinPluto);
  document.addEventListener('DOMContentLoaded', printIP);
  document.getElementById("btnEncrypt").addEventListener("click", encryptMessage);
}
/* Event handling for article pages. */
else if(document.getElementById("disqus_load") !== null){
  document.getElementById("disqus_load").addEventListener("click", loadDisqus);
}

window.addEventListener('load', loadDeferredStyles);
