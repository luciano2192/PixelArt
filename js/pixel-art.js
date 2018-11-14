var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');
var indicador = document.getElementById('indicador-de-color');
var pixeles = grilla.childNodes;
var mouse;

function colores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var div = document.createElement('div');
    div.style.backgroundColor = nombreColores[i];
    div.className = 'color-paleta';
    paleta.appendChild(div);
  }
}

function grillaPixeles() {
  for (var i = 0; i < 1749; i++) {
    var pixel = document.createElement('div');
    grilla.appendChild(pixel);
  }
}

function colorIndicador() {
  paleta.addEventListener('click', function (e) {
    indicador.style.backgroundColor = e.target.style.backgroundColor;
  }, false)
}

function pintarPixel() {
  grilla.addEventListener('click', function (e) {
    e.target.style.backgroundColor = indicador.style.backgroundColor;
  }, false)
}

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicador.style.backgroundColor = colorActual;
  })
);

function mouseDownUp() {
  grilla.addEventListener('mousedown', function() {
      mouse = true;
      return mouse;
  }, false);
  grilla.addEventListener('mouseup', function() {
      mouse = false;
      return mouse;
  }, false);
}

function pintando() {
  colorIndicador();
  mouseDownUp();
  pintarPixel();
  grilla.addEventListener('mousemove', function (e) {
    if (mouse===true) {
      e.target.style.backgroundColor=indicador.style.backgroundColor;
    }
  }, false);
}

function borrarTodo() {
  $('#borrar').on('click', function () {
    $.each(pixeles,function (i,elem) {
      $(this).animate({'background-color':''},1500);
    });
  });
}

function dibujarHeroe() {
  $('#batman').click(function () {
    cargarSuperheroe(batman);
  });
  $('#wonder').click(function () {
    cargarSuperheroe(wonder);
  });
  $('#flash').click(function () {
    cargarSuperheroe(flash);
  });
  $('#invisible').click(function () {
    cargarSuperheroe(invisible);
  });
  // OPCION MAS OPTIMA
  // $('.imgs').click(function (e) {
  //   cargarSuperheroe(eval(e.target.id));
  // });
}

function guardarDibujo() {
  $('#guardar').click(guardarPixelArt);
}

function iniciar() {
  colores();
  grillaPixeles();
  pintando();
  borrarTodo();
  dibujarHeroe();
  guardarDibujo();
}

iniciar();
