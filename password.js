$(document).ready(function () {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let $slider = $("#myRange");
  let $output = $("#sliderOutput");
  $output.text($slider.val()); // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  $slider.on("input", function () {
    $output.text($slider.val());
  });

  $openSettings = $("#openSettings");
  let modalOptions = {
    keyboard: true,
    focus: true,
    show: false,
  };

  const $passwordModal = $("#passwordModal");
  $openSettings.click(function () {
    modalOptions.show = !modalOptions.show;
    $passwordModal.modal(modalOptions);
  });

  $lowercase = $("#lower");
  $uppercase = $("#upper");
  $numeric = $("#numeric");
  $special = $("#special");

  $passwordForm = $(".passwordForm");

  $passwordForm.on("submit", async function (event) {
    event.preventDefault();

    let password = "";

    let lower = false;
    let upper = false;
    let numeric = false;
    let special = false;

    if ($lowercase.prop("checked") == true) {
      lower = true;
    }
    if ($uppercase.prop("checked") == true) {
      upper = true;
    }
    if ($numeric.prop("checked") == true) {
      numeric = true;
    }
    if ($special.prop("checked") == true) {
      special = true;
    }

    let character;
    let c;
    //initial 4 characters
    if (special) {
      c = randomNumber(33, 48);
      character = String.fromCharCode(c);
      password += character;
    }
    if (numeric) {
      c = randomNumber(48, 58);
      character = String.fromCharCode(c);
      password += character;
    }
    if (upper) {
      c = randomNumber(65, 91);
      character = String.fromCharCode(c);
      password += character;
    }
    if (lower) {
      c = randomNumber(97, 123);
      character = String.fromCharCode(c);
      password += character;
    }
    console.log($output);
    const length = parseInt($output.text());
    console.log("length: ", length);
    while (password.length < length) {
      let ran = randomNumber(1, 5);
      //   console.log(ran);
      switch (ran) {
        case 1:
          if (special) {
            c = randomNumber(33, 48);
            character = String.fromCharCode(c);
          }
          break;
        case 2:
          if (numeric) {
            c = randomNumber(48, 58);
            character = String.fromCharCode(c);
          }
          break;
        case 3:
          if (upper) {
            c = randomNumber(65, 91);
            character = String.fromCharCode(c);
          }
          break;
        case 4:
          if (lower) {
            c = randomNumber(97, 123);
            character = String.fromCharCode(c);
          }
          break;
      }
      // console.log(c);
      // console.log(character);
      password += character;
    }

    //randomly pick a lower upper numeric or special

    // console.log(lower, upper, numeric, special);
    if (!lower && !upper && !numeric && !special) {
      alert("Please check at least one character type");
    } else {
      console.log(password);
      const $passwordModal = $("#passwordModal");

    //   $passwordModal.modal("hide");
      alert("Generated Password: " + password);
    }
  });
});

// function generatePassword() {
//   // var specialChar;
//   // var number;
//   // var upperCase;
//   // var lowerCase;
//   var c;
//   var character;
//   var pass = "";
//   for (var i = 0; i < 20; i++) {
//     var ran = randomNumber(1, 5);
//     console.log(ran);
//     switch (ran) {
//       case 1:
//         c = randomNumber(33, 48);
//         character = String.fromCharCode(c);
//         break;
//       case 2:
//         c = randomNumber(48, 58);
//         character = String.fromCharCode(c);
//         break;
//       case 3:
//         c = randomNumber(65, 91);
//         character = String.fromCharCode(c);
//         break;
//       case 4:
//         c = randomNumber(97, 123);
//         character = String.fromCharCode(c);
//         break;
//     }
//     // console.log(c);
//     // console.log(character);
//     pass += character;
//   }
//   // console.log(pass);
//   alert("Random Password: " + pass);
//   return;
// }
